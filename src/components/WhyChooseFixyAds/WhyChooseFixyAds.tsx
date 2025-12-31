import styles from "./WhyChooseFixyAds.module.css";

const features = [
  {
    title: "Expert Team",
    description: "Certified digital marketing professionals with hands-on experience in SEO, branding, and social media marketing.",
    image: "/whychoosefixyads/expert.png",
    cardtag: "Certified marketing professionals",
    variant: "orange",
  },
  {
    title: "Data Driven",
    description: "Every decision is powered by analytics, performance metrics, and real-time data insights for measurable growth.",
    image: "/whychoosefixyads/dataDriven.png",
    cardtag: "Decisions powered by analytics",
    variant: "teal",
  },
  {
    title: "Affordable Plans",
    description: "Cost-effective digital marketing solutions designed to deliver maximum value within your business budget.",
    image: "/whychoosefixyads/coin.png",
    cardtag: "Best value for your budget",
    variant: "orange",
  },
  {
    title: "Transparent Reports",
    description: "Clear, detailed performance reports with measurable results, insights, and continuous optimization tracking.",
    image: "/whychoosefixyads/image.png",
    cardtag: "Clear performance tracking",
    variant: "teal",
  },
];


export default function WhyChooseFixyAds() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionbg}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Why Brands Trust Us</h2>
          <p className={styles.subheading}>
            Expert-led digital marketing services built on  <b>analytics, accountability, and trust.</b>
          </p>

          <div className={styles.grid}>
            {features.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  item.variant === "orange" ? styles.orangeCard : styles.tealCard
                }`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>

                <hr className={styles.hr} />

                <p className={styles.cardtag}>{item.cardtag}</p>
              </div>
            ))}
          </div>

          <div className={styles.trustBar}>
            <span>Enhance – Experience – Elevation</span>
            <span>🤝 Satisfied Brands, Transparency Process, 24 x 7 Support</span>
          </div>

          <div className={styles.ctaWrapper}>
            <a href="#contact" className="btn primary-btn"  style={{color: 'white'}}>
              Free Marketing Audit Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
