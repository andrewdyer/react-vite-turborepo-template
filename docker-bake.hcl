target "_common" {
    context    = "."
    dockerfile = "./Dockerfile"
}

target "web" {
    inherits = ["_common"]
    args = {
        APP_NAME = "web"
    }
    tags = ["web:local"]
}

group "default" {
    targets = ["web"]
}