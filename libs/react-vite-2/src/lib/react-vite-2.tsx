import styles from './react-vite-2.module.css';

/* eslint-disable-next-line */
export interface ReactVite2Props {}

export function ReactVite2(props: ReactVite2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactVite2!</h1>
    </div>
  );
}

export default ReactVite2;
