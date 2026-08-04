import Image from 'next/image';
import styles from './Partners.module.css';

const clients = [
  { name: 'Tahrshop', logo: '/Clients/Tahrshop.png' },
  { name: 'Nexvyon', logo: '/Clients/Nexvyon.png' },
  { name: 'Symphony Bali Spa', logo: '/Clients/logo.png' },
  // { name: 'Koothan', logo: '/Clients/koothan.png' },
  { name: 'Surabi', logo: '/Clients/Surabi.png' },
  { name: 'feature Tech', logo: '/Clients/featurelogo.png' },
];

const Partners = () => {
  /* Render the logo list twice so the marquee loops seamlessly */
  const logoSet = clients.map((client, i) => (
    <div key={client.name + '-' + i} className={styles.logoItem}>
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={64}
        className={styles.logoImg}
      />
    </div>
  ));

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h3 className={styles.label}>Trusted by Our Clients</h3>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {logoSet}
            {logoSet}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
