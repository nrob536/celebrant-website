import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import styles from './BlogListPage.module.css';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function TestimonialsHeader() {
  return (
    <header className={styles.testimonialsHeader}>
      <div className="container">
        <h1>Client Testimonials</h1>
        <p>Words from the heart of couples whose ceremonies I've had the privilege to create</p>
      </div>
    </header>
  );
}

export default function BlogListPage(props) {
  const {metadata, items, sidebar} = props;
  
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata metadata={metadata} />
      <BlogLayout sidebar={sidebar}>
        <TestimonialsHeader />
        <div className="container margin-top--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              <div className={styles.testimonialIntro}>
                <p>
                  Don't just take my word for it - hear from couples who have experienced 
                  my personalized approach to creating meaningful wedding ceremonies.
                </p>
              </div>
              <BlogPostItems items={items} />
              <BlogListPaginator metadata={metadata} />
            </main>
          </div>
        </div>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}