import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import clsx from 'clsx';

export default function Gallery() {
  // Categories for filtering
  const categories = [
    'All',
    'Traditional',
    'Outdoor',
    'Beach',
    'LGBTQ+',
    'Multicultural',
    'Elopements'
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: '/img/gallery/wedding1.jpg',
      alt: 'Beachside wedding ceremony',
      categories: ['Beach', 'Outdoor'],
      caption: 'Sarah & Michael\'s beautiful beach ceremony at sunset'
    },
    {
      id: 2,
      src: '/img/gallery/wedding2.jpg',
      alt: 'Garden wedding ceremony',
      categories: ['Outdoor', 'Traditional'],
      caption: 'Emma & James celebrating their union in a lush garden setting'
    },
    {
      id: 3,
      src: '/img/gallery/wedding3.jpg',
      alt: 'LGBTQ+ wedding celebration',
      categories: ['LGBTQ+', 'Traditional'],
      caption: 'Alex & Jordan\'s heartfelt ceremony surrounded by loved ones'
    },
    {
      id: 4,
      src: '/img/gallery/wedding4.jpg',
      alt: 'Multicultural wedding ceremony',
      categories: ['Multicultural', 'Traditional'],
      caption: 'Priya & David blending traditions in their beautiful ceremony'
    },
    {
      id: 5,
      src: '/img/gallery/wedding5.jpg',
      alt: 'Private elopement ceremony',
      categories: ['Elopements', 'Outdoor'],
      caption: 'Taylor & Morgan\'s intimate elopement in the mountains'
    },
    {
      id: 6,
      src: '/img/gallery/wedding6.jpg',
      alt: 'Traditional church wedding',
      categories: ['Traditional'],
      caption: 'Katherine & Thomas exchanging vows in a beautiful ceremony'
    },
    {
      id: 7,
      src: '/img/gallery/wedding7.jpg',
        alt: 'Sunset beach wedding',
        categories: ['Beach', 'LGBTQ+'],
        caption: 'Jamie & Casey\'s joyful beach wedding at sunset'
        }
    ];

  // Sample gallery items - just placeholders
  const galleryItems = [
    {
      title: 'Beach Wedding',
      description: 'A beautiful ceremony by the ocean'
    },
    {
      title: 'Garden Celebration',
      description: 'An intimate gathering surrounded by nature'
    },
    {
      title: 'Mountain Elopement',
      description: 'A breathtaking ceremony with scenic views'
    },
    {
      title: 'Sunset Vows',
      description: 'Exchanging promises as the day turns to evening'
    },
    {
      title: 'Rustic Barn Wedding',
      description: 'Country charm with elegant touches'
    },
    {
      title: 'City Rooftop Ceremony',
      description: 'Urban sophistication with skyline views'
    }
  ];

  return (
    <Layout title="Wedding Gallery">
      <header className={styles.galleryHeader}>
        <div className="container">
          <h1>Wedding Gallery</h1>
          <p>Beautiful moments from ceremonies I've had the honor of conducting</p>
        </div>
      </header>
      
      <main className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <p className="text--center margin-bottom--lg">
              Image gallery coming soon! Below are descriptions of the beautiful ceremonies 
              that will be featured in our full gallery.
            </p>
            
            <div className={styles.galleryGrid}>
              {galleryItems.map((item, index) => (
                <div key={index} className={styles.galleryItem}>
                  <div className={styles.placeholderBox}>
                    <span>Gallery Image {index + 1}</span>
                  </div>
                  <div className={styles.itemContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}