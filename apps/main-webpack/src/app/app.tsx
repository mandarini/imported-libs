import styles from './app.module.css';
import { ReactRollup } from '@imported-libs/react-rollup';
import { utilsOne } from '@imported-libs/utils/one';

export function App() {
  return (
    <div className={styles['container']}>
      <ReactRollup />
      <h1>Welcome to MainWebpack!</h1>
      <p>Here is the utils: {utilsOne()}</p>
    </div>
  );
}

export default App;
