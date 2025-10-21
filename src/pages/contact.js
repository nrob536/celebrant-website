import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';
import clsx from 'clsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        location: '',
        message: '',
      });
    }, 1500);
    
    // In production, you'd send the form data to your backend or a form service
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <Layout
      title="Contact Me"
      description="Get in touch to discuss your wedding ceremony needs">
      <header className={styles.contactHeader}>
        <div className="container">
          <h1>Contact Me</h1>
          <p>Let's create something beautiful together</p>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--5">
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>
                I'd love to hear about your wedding plans and how I can help make your ceremony 
                special. Fill out the template below and email me directly.
              </p>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:marriedbygen@gmail.com">
                      marriedbygen@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Serving [Wairarapa Region]</p>
                </div>
              </div>
            
              <div className={styles.socialLinks}>
                <h3>Follow Me</h3>
                <div className={styles.socialIcons}>
                  <a href="https://instagram.com/marriedbygen" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://facebook.com/marriedbygen" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col col--7">
            <div className={styles.formContainer}>
              <h2>Email Inquiry Template</h2>
              <p>
                Please copy and paste the template below into your email to <a href="mailto:marriedbygen@gmail.com">marriedbygen@gmail.com</a> and fill in your details.
              </p>
              <pre className={styles.emailTemplate}>
{`Subject: Wedding Inquiry

Your Name:
Email Address:
Phone Number (optional):
Wedding Date (if known):
Wedding Location (if known):

Your Message:
(Tell me about your wedding plans and how I can help...)`}
              </pre>
              <a
                href="mailto:marriedbygen@gmail.com?subject=Wedding Inquiry&body=Your Name:%0AEmail Address:%0APhone Number (optional):%0AWedding Date (if known):%0AWedding Location (if known):%0A%0AYour Message:%0A(Tell me about your wedding plans and how I can help...)"
                className="button button--primary button--lg"
                style={{ marginTop: 16 }}
              >
                Open Email App
              </a>
            </div>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className={styles.faqSection}>
          <h2 className={styles.centeredTitle}>Frequently Asked Questions</h2>
          
          <div className="row">
            <div className="col col--6">
              <div className={styles.faqItem}>
                <h3>How soon will you respond to my inquiry?</h3>
                <p>
                  I typically respond to all inquiries within 24-48 hours. If you need an immediate response, 
                  please feel free to call or text me directly.
                </p>
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.faqItem}>
                <h3>What happens after I contact you?</h3>
                <p>
                  After your initial inquiry, we'll schedule a free consultation (via phone, video call, or in-person) 
                  to discuss your vision and how I can help create your perfect ceremony.
                </p>
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.faqItem}>
                <h3>Do you require a deposit to secure my date?</h3>
                <p>
                  Yes, a non-refundable deposit (typically 25% of the total fee) is required to secure your wedding 
                  date, along with a signed contract.
                </p>
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.faqItem}>
                <h3>What is your service area?</h3>
                <p>
                  I primarily serve the Wairarapa and Greater Wellington Region. For ceremonies outside this area, 
                  additional travel fees may apply. Please contact me for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}