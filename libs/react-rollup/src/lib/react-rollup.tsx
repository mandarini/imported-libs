import styles from './react-rollup.module.css';

/* eslint-disable-next-line */
export interface ReactRollupProps {}

export function ReactRollup(props: ReactRollupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactRollup!</h1>
    </div>
  );
}

export default ReactRollup;
