const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
