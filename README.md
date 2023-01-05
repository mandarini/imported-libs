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

#### Issue with `.js` configuration files

The main issue is that on `.js` configuration files I CANNOT use `viteTsConfigPaths`. So, in [`apps/main-vite/.storybook/main.js`](apps/main-vite/.storybook/main.js), when I try to use `vite-tsconfig-paths`, and I build Storybook like this:

```
npx nx build-storybook main-vite
```

I get the following error:

```
TypeError: viteTsConfigPaths is not a function
```

#### All works on `.ts` configuration files

When I use the same configuration on a `.ts` file, it works. So, in [`apps/main-vite-ts/.storybook/main.ts`](apps/main-vite-ts/.storybook/main.ts), when I use `viteTsConfigPaths`, and I build Storybook like this:

```
npx nx build-storybook main-vite-ts
```

it works!!

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

### Check the Storybook + React + Webpack

```
cd apps/main-webpack
npx storybook build
```

Not working. Something with babel, but we'll see. [Here](https://app.warp.dev/block/w9ldDAC8OFtTfaiibElRD0). Could be that we do some transformations on the Nx executor.

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

#### All works on `.js` configuration files

In [`apps/main-vite/.storybook/main.js`](apps/main-vite/.storybook/main.js), I use `vite-tsconfig-paths`, and I build Storybook like this:

```
cd apps/main-vite
npx storybook build
```

#### All works on `.ts` configuration files

In [`apps/main-vite-ts/.storybook/main.ts`](apps/main-vite-ts/.storybook/main.ts), I use `viteTsConfigPaths`, and I build Storybook like this:

```
cd apps/main-vite-ts
npx storybook build
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
