import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

module.exports = {
  core: { builder: '@storybook/builder-vite' },
  stories: [
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
};
