import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.LoaderContainer}>
        <div className={styles.PulseRing}>
          <div className={styles.Ring}></div>
          <div className={styles.Ring}></div>
          <div className={styles.Ring}></div>
        </div>
        <div className={styles.LoadingText}>
          <span>M</span>
          <span>e</span>
          <span>o</span>
          <span>w</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}
