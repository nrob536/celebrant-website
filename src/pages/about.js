// Add a simple version to test navigation
import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About Me">
      <main className="container margin-top--lg">
        <h1>About Me</h1>
        <p>This is a simple test page to check navigation.</p>
      </main>
    </Layout>
  );
}