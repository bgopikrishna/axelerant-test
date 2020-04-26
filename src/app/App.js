import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/sections/Hero/Hero';
import Team from '../components/sections/Team/Team';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import Contact from '../components/sections/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Team />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
