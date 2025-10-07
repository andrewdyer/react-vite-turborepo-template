# Web

This app was created with `pnpm create vite`.

## Dockerizing

You can build and run this app in a Docker container **from the repository root**. Once running, it will be available at [http://localhost:8080](http://localhost:8080).

### Step 1: Build the image

Build the Docker image for the web app using the `Dockerfile` located in `apps/web`:

```bash
docker build -t web-app -f apps/web/Dockerfile .
```

### Step 2: Run the container

Run the container, mapping port 8080 on your machine to port 80 inside the container:

```bash
docker run --name web-app -p 8080:80 -d web-app
```
