module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'tsc --noEmit',
    'eslint --fix',
    'prettier --write',
  ],
  '*.{json,css,md,mdx,yaml,yml}': ['prettier --write'],
};
