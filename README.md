
# Memory Game

Memory Game is a memorization game created for a challenge. This project is built with Next.js 13, uses hooks and context to persist state, and is set up with ESLint (Airbnb style), lint-staged, Prettier, and Husky.


![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)        ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://eclectic-kelpie-73a18e.netlify.app) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/en/download/) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Features

- Developed with Next.js 13
- Uses hooks and context to persist state
- Configured with ESLint (Airbnb style), lint-staged, Prettier, and Husky
- Docker and Docker Compose support
- Conventional Commits and Commitizen usage

## Live Demo

You can find a live version of the project at this link: [https://eclectic-kelpie-73a18e.netlify.app](https://eclectic-kelpie-73a18e.netlify.app).


## Installation

Clone the repository:
```sh
git clone https://github.com/ffigueroa/memorygame.git
```

Install the dependencies:

With npm:
```sh
cd memorygame
npm install
```
With yarn:
```sh
cd memorygame
yarn install
```
Run the project in development mode:
```sh
npm run dev
```
or
```sh
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Docker

To run the project with Docker, make sure you have Docker and Docker Compose installed, and follow these steps:

```sh
cd memorygame
docker-compose up
```
To stop and remove the container:
```sh
docker-compose down
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Conventional Commits and Commitizen

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specifications to facilitate changelog generation and improve commit message readability. In addition, [Commitizen](http://commitizen.github.io/cz-cli/) is used to help contributors follow these conventions.

To make a commit with Commitizen, run the following command instead of `git commit`:
```sh
npm run commit
```
or
```sh
yarn commit
```
Commitizen will guide you to create a commit message following the Conventional Commits specifications.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.
