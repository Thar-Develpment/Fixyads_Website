'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h1>Something went wrong</h1>
        <p className={styles.error}>The admin dashboard encountered an error.</p>
        <button type="button" onClick={reset} className={styles.button}>
          Try again
        </button>
      </div>
    </div>
  );
}
