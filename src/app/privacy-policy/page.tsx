import styles from './Legal.module.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fixyads',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
    return (
        <div className="container section pageTopOffset">
            <h1 className="title mb-4">Privacy Policy</h1>
            <div className={styles.legalContent}>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us via our contact forms, including name, email address, phone number, and any special requests you send.</p>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to communicate with you, provide marketing services, and improve our website experience.</p>
                </section>

                <section>
                    <h2>3. Data Protection</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and accessed only by authorized personnel.</p>
                </section>

                <section>
                    <h2>4. Third-Party Links</h2>
                    <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.</p>
                </section>
            </div>
        </div>
    );
}
