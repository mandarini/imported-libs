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
git checkout storybook-7
yarn
```

### Check the Storybook + Angular

All works as it is!!! :D

```
npx nx build-storybook ngapp
npx nx storybook ngapp
```

### Check the Storybook + React + Webpack

All works as it is!!! :D

```
npx nx build-storybook main-webpack
npx nx storybook main-webpack
```

### Check the Storybook + React + Vite

#### All works on `.js` configuration files

In [`apps/main-vite/.storybook/main.js`](apps/main-vite/.storybook/main.js), I build Storybook like this:

```
npx nx build-storybook main-vite
npx nx storybook main-vite
```

#### All works on `.ts` configuration files

In [`apps/main-vite-ts/.storybook/main.ts`](apps/main-vite-ts/.storybook/main.ts), I build Storybook like this:

```
npx nx build-storybook main-vite-ts
npx nx storybook main-vite-ts
```

### Test it out for all

```
nx run-many --target=build-storybook --all=true --parallel=true --skipNxCache
```
