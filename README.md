# x-bin-headless

## Requirements

You need to install:

- [Docker](https://www.docker.com/community-edition)
- [`nvm`](https://github.com/creationix/nvm)

## Get started

- `nvm use v8.4.0`
- `npm install`
- [create local env files](#create-local-env-files)
- `docker-compose up -d redis`
- `npm start`

## Create local env files

- make a local env file:

```
cd env
cp app.env.dist app.env
```

- edit `app.env`
