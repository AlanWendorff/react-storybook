<p align="center">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
    -
    <img alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" width="60" />
</p>

<h1 align="center">
  ReactTS and Storybook example
</h1>

## Dependencies

Create React App and docker

## Setup development environment

### Prepare the project

Clone the repository and move into the created directory

`git clone git@github.com:NFTStudios/react-skeleton.git && cd react-skeleton`

Create the .env file

`cp .env.dist .env`

Build docker containers

`docker-compose build`

`docker-compose up -d` builds, (re)creates, starts, and attaches to containers for a service.

### How to run

`docker-compose start` to start all the containers

`docker-compose stop` to stop all the containers

`docker-compose down` destroys the containers, data generated for this containers will be gone (fe: database data)

`docker-compose restart` to restart all the containers

`docker-compose logs -f app` shows docker console output

`docker-compose exec app yarn {options}` to use yarn

The dev environment will run in http://localhost:3000/

### Tests

Run tests with `docker-compose exec app yarn run test`

### ESLint and Prettier

To see linting issues `docker-compose exec app yarn run lint`

To automatically fix linting issues (when possible) `docker-compose exec app yarn run lint-and-fix`

To see style issues `docker-compose exec app yarn prettier-check`

To fix style issues `docker-compose exec app yarn prettier-format`

### Visual studio code

[Download](https://code.visualstudio.com/download)

Download [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Configuration in vscode's `settings.json` file

```jsx
{
  // add to the default configuration

  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "editor.formatOnSave": true,
  "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
}
```
