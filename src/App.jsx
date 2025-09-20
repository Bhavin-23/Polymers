import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Nav from './components/Nav';
import Polymers from './components/Polymers';
import Product from './components/Product';
import TrustedConnections from './components/TrustedConnections';
import LatestProjects from './components/LatestProjects';
import UpcomingProject from './components/UpcomingProject';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import KeyApprovals from './components/KeyApprovals';
import InquirySection from './components/InquirySection';
import MediaCoverage11 from './components/MediaCoverage11';

const App = () => {
  return (
    <div className="w-full overflow-x-hidden font-roboto">
      <Nav />
      <Hero />
      <About />
      <Polymers />
      <Product />
      <TrustedConnections />
      <LatestProjects />
      <UpcomingProject />
      <InquirySection />
      <MediaCoverage11 />
      <KeyApprovals />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
