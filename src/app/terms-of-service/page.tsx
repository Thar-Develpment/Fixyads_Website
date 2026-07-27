import styles from '../privacy-policy/Legal.module.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Fixyads',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfService() {
    return (
        <div className="container section pageTopOffset">
            <h1 className="title mb-4">Terms of Service</h1>
            <div className={styles.legalContent}>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
                </section>

                <section>
                    <h2>2. Use of Services</h2>
                    <p>The services provided by Fixyads including digital marketing and training are subject to specific service agreements which will be provided upon engagement.</p>
                </section>

                <section>
                    <h2>3. Intellectual Property</h2>
                    <p>All content, branding, and materials on this website are the intellectual property of Fixyads unless otherwise stated.</p>
                </section>

                <section>
                    <h2>4. Limitation of Liability</h2>
                    <p>Fixyads shall not be held liable for any indirect or consequential damages resulting from the use of our website or services.</p>
                </section>
            </div>
        </div>
    );
}
