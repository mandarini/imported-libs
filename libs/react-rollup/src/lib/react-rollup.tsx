import styles from './react-rollup.module.css';
// import { utilsOne } from '@imported-libs/utils/one';

/* eslint-disable-next-line */
export interface ReactRollupProps {}

export function ReactRollup(props: ReactRollupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactRollup!</h1>
      {/* <p>Here is the utils: {utilsOne()}</p> */}
    </div>
  );
}

export default ReactRollup;
