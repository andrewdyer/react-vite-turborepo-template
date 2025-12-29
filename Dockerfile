# =============================
# Stage 1 — Base image
# Provides Node.js, pnpm, and Turbo for all later stages
# =============================
FROM node:22.20.0-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Enable corepack so pnpm can be used
RUN corepack enable

# Install Turbo globally for monorepo tasks
RUN npm install -g turbo


# =============================
# Stage 2 — Prune
# Reduces the monorepo down to only the selected app and its dependencies
# =============================
FROM base AS prune

# Set the working directory
WORKDIR /app

# Name of the app to prune
ARG APP_NAME

# Copy the entire repo (required for Turbo prune)
COPY . .

# Prune the repo for the selected app
RUN turbo prune --scope=${APP_NAME} --docker


# =============================
# Stage 3 — Build
# Installs deps and builds the selected app for production
# =============================
FROM base AS build

# Set the working directory
WORKDIR /app

# Copy pruned package.json files
COPY --from=prune /app/out/json/ ./

# Copy pruned pnpm lockfile
COPY --from=prune /app/out/pnpm-lock.yaml ./

# Copy pruned full source code
COPY --from=prune /app/out/full/ ./

# Install only the necessary dependencies
RUN pnpm install --frozen-lockfile

# Name of the app to build
ARG APP_NAME

# Build the selected app with Turbo
RUN pnpm turbo run build --filter=${APP_NAME}...


# =============================
# Stage 4 — Runtime
# Serves the built app using Nginx
# =============================
FROM nginx:alpine AS runtime

# Name of the app to serve
ARG APP_NAME

# Copy built static files from the build stage
COPY --from=build /app/apps/${APP_NAME}/dist /usr/share/nginx/html

# Copy the custom Nginx server configuration for SPA routing
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]