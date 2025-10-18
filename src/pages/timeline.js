import React from 'react';
import Layout from '@theme/Layout';
import styles from './timeline.module.css';

export default function Timeline() {
    return (
        <Layout title="Booking & Ceremony Timeline">
            <main className="container margin-top--lg margin-bottom--xl" style={{ textAlign: 'center' }}>
                <h1 className={styles.timelineTitle}>Booking & Ceremony Timeline</h1>
                <div className={styles.workflowContainer}>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>Enquire:</strong> Contact me to check availability and discuss your needs.
                        </div>
                        <div
                            className={styles.arrow}
                            style={{ textAlign: 'center', color: '#0070f3', fontSize: '2.5rem' }}
                        >
                            &#8595;
                        </div>
                    </div>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>First Meeting:</strong> In-person or Zoom to discuss your ceremony and see if we are a good fit.
                        </div>
                        <div
                            className={styles.arrow}
                            style={{ textAlign: 'center', color: '#0070f3', fontSize: '2.5rem' }}
                        >
                            &#8595;
                        </div>
                    </div>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>Booking Confirmation:</strong> Secure your date with a 25% deposit.
                        </div>
                        <div
                            className={styles.arrow}
                            style={{ textAlign: 'center', color: '#0070f3', fontSize: '2.5rem' }}
                        >
                            &#8595;
                        </div>
                    </div>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>2-3 Months Out:</strong>
                            <ul style={{ display: 'inline-block', textAlign: 'left' }}>
                                <li>Apply for your marriage or civil union licence (<a href="https://www.govt.nz/browse/family-and-whanau/getting-married/civil-unions/get-a-civil-union-licence/" target="_blank" rel="noopener noreferrer">NZ Government: Apply for a marriage licence</a>).</li>
                                <li>Meet to draft ceremony script and finalise details.</li>
                            </ul>
                        </div>
                        <div
                            className={styles.arrow}
                            style={{ textAlign: 'center', color: '#0070f3', fontSize: '2.5rem' }}
                        >
                            &#8595;
                        </div>
                    </div>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>1 Month Out:</strong> Pay remaining deposit & approve ceremony script.
                        </div>
                        <div
                            className={styles.arrow}
                            style={{ textAlign: 'center', color: '#0070f3', fontSize: '2.5rem' }}
                        >
                            &#8595;
                        </div>
                    </div>
                    <div className={styles.workflowStep}>
                        <div className={styles.stepContent}>
                            <strong>Ceremony Day:</strong> Bring your wedding licence to the ceremony!
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}