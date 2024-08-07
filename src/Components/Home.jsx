import React, { Suspense, lazy } from 'react';

import Loading from "../common/Loading"

// Dynamically import components
const Header = lazy(() => import('./Header'));
const Socials = lazy(() => import('./Socials'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

function Home() {
  return (
    <div id="wrapper">
      <Suspense fallback={<><Loading/></>}>
        <Header />
        <Socials />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
