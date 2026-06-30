import styles from './blog.module.css';

export default function BlogLoading() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyInner}>
        <p className={styles.emptyText}>Loading articles…</p>
      </div>
    </div>
  );
}
