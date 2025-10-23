import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Sidebar from '../components/Sidebar';
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
          <h1
            className={clsx(styles.heroTitle, styles.textShadow)}
            style={{
              color: '#420B00', // crimson red
              textShadow: '0 0 2px #fff, 0 0 12px #fff', // white glow
            }}
          >
            Celebrate Your Love Story
          </h1>
          <p
            className={clsx(styles.heroSubtitle, styles.textShadow)}
            style={{
              color: '#420B00', // crimson red
              textShadow: '0 0 2px #fff, 0 0 11px #fff', // white glow
            }}
          >
            Creating memorable, personalized ceremonies that reflect your unique journey
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button", styles.buttonElegantPrimary)}
              style={{
                color: '#420B00', // crimson red
                textShadow: '0 0 2px #fff, 0 0 4px #fff', // white glow
              }}
              to="/contact">
              Let's Plan Your Day
            </Link>
            <Link
              className={clsx("button", styles.buttonElegantSecondary)}
              style={{
                color: '#420B00', // crimson red
                textShadow: '0 0 2px #fff, 0 0 4px #fff', // white glow
              }}
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
  return (
    <section className={clsx(styles.features, 'water-bg', 'maori-pattern')}>
      <div className={styles.maoriCornerElement}></div>
      <div className="container">
        <h2 className={styles.sectionTitle}>Creating Magical Moments</h2>
        <div className={clsx(styles.featureTextBlock)}>
          <p>
            Every love story is unique. Your ceremony should be too. I create customized ceremonies that truly reflect your relationship.
            I celebrate love in all forms. LGBTQ+ weddings, multicultural ceremonies, civil unions, and interfaith celebrations are all welcomed and honored.
            With years of experience crafting memorable ceremonies, I ensure your special day flows perfectly from start to finish.
          </p>
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout
      title={siteConfig.title}
      description="Create beautiful, personalized wedding  and civil union ceremonies that celebrate your unique love story">
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        ☰
      </button>
      <div className={styles.withSidebar}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className={styles.mainContent}>
          <HeroSection />
          <main>
            <FeatureSection />
            <div className={styles.sectionDivider}></div>
          </main>
        </div>
      </div>
    </Layout>
  );
}