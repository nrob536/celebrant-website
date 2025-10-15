import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import {Date, ReadMoreLink} from '@theme/BlogPostItem/Footer';

export default function BlogPostItem({children, className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {
    title,
    authors,
    frontMatter,
    date,
    tags,
    formattedDate,
  } = metadata;

  // If this is the blog post page itself, we don't use this component - we use default
  if (isBlogPostPage) {
    // Importing and using components directly from @theme/BlogPostItem to avoid circular dependencies
    const BlogPostItem = require('@theme-original/BlogPostItem').default;
    return <BlogPostItem className={className}>{children}</BlogPostItem>;
  }

  // In list view, we customize it as a testimonial card
  return (
    <article className={clsx('margin-bottom--xl', styles.testimonialCard, className)}>
      <div className={styles.testimonialHeader}>
        {authors.length > 0 && (
          <div className={styles.testimonialAuthor}>
            {authors[0].imageURL && (
              <img src={authors[0].imageURL} alt={authors[0].name} className={styles.authorImage} />
            )}
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>{authors[0].name}</div>
              {authors[0].title && (
                <div className={styles.authorTitle}>{authors[0].title}</div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.testimonialContent}>
        <h2 className={styles.testimonialTitle}>{title}</h2>
        <div className={styles.testimonialBody}>
          {children}
        </div>
        
        <div className={styles.testimonialFooter}>
          <div className={styles.tagList}>
            {tags.map(({label, permalink}) => (
              <a 
                key={permalink} 
                href={permalink} 
                className={styles.tagItem}
              >
                {label}
              </a>
            ))}
          </div>
          
          <div className={styles.testimonialDate}>
            <Date formattedDate={formattedDate} />
          </div>
        </div>
      </div>
    </article>
  );
}