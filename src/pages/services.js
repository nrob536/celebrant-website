import React from 'react';
import Layout from '@theme/Layout';
import styles from './services.module.css';

export default function Services() {
  return (
    <Layout title="Wedding Services">
      <header className={styles.servicesHeader}>
        <div className="container">
          <h1>Wedding Ceremony Services</h1>
          <p>Creating meaningful celebrations for your special day</p>
        </div>
      </header>
      
      <main className="container margin-top--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>My Services</h2>
            <p>
              I offer personalized wedding ceremony services tailored to your unique love story.
              From intimate elopements to grand celebrations, I'll work with you to create
              a ceremony that reflects your values, personalities, and relationship.
            </p>
            
            {/* Simple service listing */}
            <div className={styles.serviceCard}>
              <h3>Full Wedding Ceremony</h3>
              <p>A complete, personalized ceremony including vows, readings, and rituals of your choice.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Elopement Ceremony</h3>
              <p>Intimate, meaningful ceremonies for couples choosing to elope.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}