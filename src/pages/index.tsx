// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import App from '../components/App';
//import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Task App</title>
        <meta name="description" content="Task App with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <App />
      </main>
    </div>
  );
};

export default Home;
