'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyInner}>
        <h2 className={styles.emptyTitle}>Something went wrong</h2>
        <p className={styles.emptyText}>
          We could not load the blog right now. Please try again in a moment.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button type="button" onClick={reset} className={styles.emptyBtn}>
            Try again
          </button>
          <Link href="/" className={styles.emptyBtn}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
