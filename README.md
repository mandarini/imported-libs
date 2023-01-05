# Import libs that import libs

Checking if and how the paths are resolved correctly for Storybook, using Vite and using Webpack.

## FOR STORYBOOK 6.5

### Check the Storybook + React + Webpack

All paths are resolved correctly. It can find the imported library. Works like a charm!

```
npx nx build-storybook main-webpack
```

### Check the Storybook + React + Vite

The paths are resolved correctly, if I add the correct Vite config Storybook's configuration:

```
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
```

The reason is that for versions of `@storybook/builder-vite` previous to v7, it does NOT read the `vite.config.ts` file automatically. [See here](https://github.com/storybookjs/storybook/issues/19391#issuecomment-1282243042).

#### All works on `.js` configuration files

In [`apps/main-vite/.storybook/main.js`](apps/main-vite/.storybook/main.js), I use `vite-tsconfig-paths`, and I build Storybook like this:

```
npx nx build-storybook main-vite
```

#### All works on `.ts` configuration files

In [`apps/main-vite-ts/.storybook/main.ts`](apps/main-vite-ts/.storybook/main.ts), I use `viteTsConfigPaths`, and I build Storybook like this:

```
npx nx build-storybook main-vite-ts
```

#### Note - do not import the whole `vite.config.ts` file

We cannot import and merge the whole Vite config from `vite.config.ts` file, because it will not work. We need to import only the `viteTsConfigPaths` plugin. The reason is that Storybook conflicts with the `'@vitejs/plugin-react'` plugin. [See here](https://github.com/storybookjs/storybook/issues/19365).

### Test it out

#### Verify that normal build works

```
npx nx build main-vite
```

```
npx nx build main-webpack
```

## FOR STORYBOOK v7

```
git checkout sb/migrate-7
yarn
```

### Check the Storybook + Angular

All works as it is!!! :D

```
npx nx build-storybook ngapp

npx nx storybook ngapp
```

### Check the Storybook + React + Webpack

```
cd apps/main-webpack
npx storybook build
```

Not working. Something with babel, but we'll see. [Here](https://app.warp.dev/block/w9ldDAC8OFtTfaiibElRD0). [Possibly not reading the `.babelrc` file](https://github.com/storybookjs/storybook/issues/18961).

### Check the Storybook + React + Vite

The paths are resolved correctly. No need to add the extra Vite configuration for `@storybook/builder-vite` version 7!

#### All works on `.js` configuration files

In [`apps/main-vite/.storybook/main.js`](apps/main-vite/.storybook/main.js), I build Storybook like this:

```
cd apps/main-vite
npx storybook build
```

#### All works on `.ts` configuration files

In [`apps/main-vite-ts/.storybook/main.ts`](apps/main-vite-ts/.storybook/main.ts), I build Storybook like this:

```
cd apps/main-vite-ts
npx storybook build
```

### Test it out

#### Verify that normal build works

```
npx nx build main-vite
```

```
npx nx build main-webpack
```
