# Import libs that import libs

Checking if and how the paths are resolved correctly for Storybook, using Vite and using Webpack.

## FOR STORYBOOK 6.5

### Check the Storybook + React + Webpack

All paths are resolved correctly. It can find the imported library. Works like a charm!

```
npx nx build-storybook main-webpack
```

### Check the Storybook + React + Vite

The paths are NOT resolved correctly. It cannot find the imported library.

```
npx nx build-storybook main-vite
```

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

Not working. Something with babel, but we'll see. [Here](https://app.warp.dev/block/w9ldDAC8OFtTfaiibElRD0).

### Check the Storybook + React + Vite

```
cd apps/main-vite
npx storybook build
```

The paths are NOT resolved correctly. It cannot find the imported library.

### Test it out

#### Verify that normal build works

```
npx nx build main-vite
```

```
npx nx build main-webpack
```
