import { utilsOne } from '@imported-libs/utils/one';
import styles from './react-vite.module.css';

/* eslint-disable-next-line */
export interface ReactViteProps {}

export function ReactVite(props: ReactViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactVite!</h1>
      <p>Here is the utils: {utilsOne()}</p>
    </div>
  );
}

export default ReactVite;
