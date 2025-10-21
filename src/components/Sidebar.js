import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close sidebar">×</button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        {/* <li><Link to="/gallery">Gallery</Link></li> */}
        {/* <li><Link to="/blog">Testimonials</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
      </ul>
    </nav>
  );
}