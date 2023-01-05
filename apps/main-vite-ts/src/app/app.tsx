import styles from './app.module.css';
import { ReactVite } from '@imported-libs/react-vite';

export function App() {
  return (
    <div className={styles['container']}>
    <ReactVite />
    <p>React Vite</p>
  </div>
  );
}

export default App;
