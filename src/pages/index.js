import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
// Temporarily disable Testimonials and Gallery pages by commenting out their imports and usage
// import TestimonialSection from './TestimonialSection';
// import GallerySection from './GallerySection';

function HeroSection() {
  return (
    <header className={clsx('hero', styles.heroBanner, 'maori-pattern', 'fire-bg')}>
      <div className={styles.waveOverlay}></div>
      <div className={styles.fireElement}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Celebrate Your Love Story</h1>
          <p className={styles.heroSubtitle}>
            Creating memorable, personalized ceremonies that reflect your unique journey
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button", styles.buttonElegantPrimary)}
              to="/contact">
              Let's Plan Your Day
            </Link>
            <Link
              className={clsx("button", styles.buttonElegantSecondary)}
              to="/services">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'Personalized Ceremonies',
      src: 'img/personalized.png',
      description: (
        <>
          Every love story is unique. Your ceremony should be too. I create 
          customized ceremonies that truly reflect your relationship.
        </>
      ),
    },
    {
      title: 'Inclusive & Diverse',
      src: '/img/inclusive.png',
      description: (
        <>
          I celebrate love in all forms. LGBTQ+ weddings, multicultural ceremonies, 
          and interfaith celebrations are all welcomed and honored.
        </>
      ),
    },
    {
      title: 'Experienced & Professional',
      imageUrl: '/img/professional.png',
      description: (
        <>
          With years of experience crafting memorable ceremonies, I ensure your
          special day flows perfectly from start to finish.
        </>
      ),
    },
  ];

  return (
    <section className={clsx(styles.features, 'water-bg', 'maori-pattern')}>
      <div className={styles.maoriCornerElement}></div>
      <div className="container">
        <h2 className={styles.sectionTitle}>Creating Magical Moments</h2>
        <div className="row">
          {features.map(({title, imageUrl, description}, idx) => (
            <div key={idx} className={clsx('col col--4', styles.feature)}>
              <div className={styles.featureCard}>
                <div className={styles.featureImageContainer}>
                  <div className={styles.featurePlaceholder}>{title}</div>
                </div>
                <div className={styles.featureContent}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className={clsx(styles.testimonials, 'fire-bg', 'maori-pattern')}>
      <div className={styles.waveElement}></div>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Couples Say</h2>
        <div className={styles.testimonialCard}>
          <div className={styles.quote}>"</div>
          <p className={styles.testimonialText}>
            We couldn't have asked for a more perfect celebrant. She took the time to 
            understand our story and created a ceremony that felt truly personal and meaningful.
            Our guests are still talking about how beautiful it was!
          </p>
          <p className={styles.testimonialAuthor}>- Sarah & Michael</p>
        </div>
        <div className={styles.testimonialLink}>
          <Link to="/blog" className={styles.elegantLink}>Read More Testimonials</Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={clsx(styles.ctaSection, 'water-bg', 'maori-pattern')}>
      <div className={styles.maoriEdgeElement}></div>
      <div className="container">
        <h2>Ready to Begin?</h2>
        <p>Let's create a ceremony that celebrates your unique love story</p>
        <div className={styles.ctaButtons}>
          <Link
            className={clsx("button", styles.buttonElegantPrimary)}
            to="/contact">
            Contact Me
          </Link>
          <a
            className={clsx("button", styles.buttonElegantSecondary)}
            href="https://calendly.com/your-wife-celebrant"
            target="_blank"
            rel="noopener noreferrer">
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Create beautiful, personalized wedding ceremonies that celebrate your unique love story">
      <HeroSection />
      <main>
        <FeatureSection />
        <div className={styles.sectionDivider}></div>
      </main>
    </Layout>
  );
}