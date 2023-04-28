const path = require('path');

const eslintCommand = filenames =>
  `next lint --no-cache --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

const prettierCommand = 'prettier --write';

module.exports = {
  '*.{js,jsx}': [eslintCommand, prettierCommand],
  '*.{css,scss}': [prettierCommand],
};
