import React from 'react';
import Layout from '@theme/Layout';
import styles from './services.module.css';

export default function Services() {
  return (
    <Layout title="Wedding Services">
      <header className={styles.servicesHeader}>
        <div className="container">
          <h1>Wedding Packages</h1>
          <p>Weddings & Civil Unions are a celebration of love, whānau, and connection—each one as unique as the couple at its heart. These packages are designed to honour that journey, weaving together care, culture, and a touch of magic to help make your special day truly unforgettable.</p>
        </div>
      </header>
      <main className="container margin-top--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>My Services</h2>
            {/* Highlighted service listing */}
            <div className={styles.highlightSection}>
              <div className={styles.serviceCard}>
                <h3>Short, sweet, small and simple- $250</h3>
                <ul className={styles.serviceList}>
                  <li>Elopement Style</li>
                  <li>Short & simple personalised ceremony for up to 35 guests</li>
                  <li>One in-person meeting or virtual catch up</li>
                  <li>Unlimited email support</li>
                  <li>Includes all legal requirements</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Bespoke Ceremony- $350</h3>
                <ul className={styles.serviceList}>
                  <li>Fully bespoke ceremony for over 35 guests</li>
                  <li>One in-person meeting or virtual catch up</li>
                  <li>Unlimited email support</li>
                  <li>Includes all legal requirements</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Ceremony & Rehearsal- $450</h3>
                <ul className={styles.serviceList}>
                  <li>Fully bespoke ceremony.</li>
                  <li>Ceremony rehearsal at the Venue the day before or prior to the ceremony</li>
                  <li>One in-person meeting or virtual catch up</li>
                  <li>Unlimited email support</li>
                  <li>Includes all legal requirements</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>The Works- $ 1000</h3>
                <ul className={styles.serviceList}>
                      <li>Full Day Master of Ceremonies</li>
                      <li>Fully bespoke ceremony</li>
                      <li>Ceremony rehearsal at the Venue the day before or prior to the ceremony</li>
                      <li>MC support at rehearsal dinner and for photos, up until your first danced as a united couple.</li>
                      <li>Unlimited in-person meeting or virtual catch up</li>
                      <li>Unlimited email support</li>
                </ul>
              </div>
              <div className={styles.termsCard}>
                <h3>Terms and Conditions</h3>
                <ul className={styles.termsList}>
                  <li>A non-refundable deposit of 25% is required to secure your date.</li>
                  <li>Final payment is due 14 days before the wedding date.</li>
                  <li>Cancellations made within 30 days of the wedding date will incur a 50% charge of the total package price.</li>
                  <li>Travel outside of the local area may incur additional costs.</li>
                </ul>
              </div>
              <div className={styles.contactSection}>
                <h2>Contact Me</h2>
                <p>I’m looking forward to hearing from you—so we can begin crafting the story of your special day, woven with love, laughter, and the threads of your unique journey together.</p>
                Facebook: <a href="https://www.facebook.com/marriedbygen">Married by Gen</a><br />
                Instagram: <a href="https://www.instagram.com/marriedbygen/">@marriedbygen</a><br />
                <p>Email: <a href="mailto:marriedbygen@gmail.com ">marriedbygen@gmail.com </a></p>
              </div>
            </div>
          </div>
        </div>
        </main>
    </Layout>
  );
}