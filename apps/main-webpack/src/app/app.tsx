// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { ReactRollup } from '@imported-libs/react-rollup';

export function App() {
  return (
    <div className={styles['container']}>
      <ReactRollup />
      <h1>Welcome to MainWebpack!</h1>
    </div>
  );
}

export default App;
