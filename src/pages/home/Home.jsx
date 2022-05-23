import React from 'react'
import Footer from '../../containers/footer/Footer';
import Blog from '../../containers/blog/Blog';
import Possibility from '../../containers/possibility/Possibility';
import Features from '../../containers/features/Features';
import WhatGPA from '../../containers/whatGPA/WhatGPA';
// import { Blog, Possibility, Features, WhatGPA, Header} from './containers'
// import { CTA, Brand, Navbar} from './components';
import CTA from '../../components/cta/CTA';
import Brand from '../../components/brand/Brand';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../containers/header/Header';




const Home = () => {
  return (
    <div>
        <div className="gradient__bg">
            <Navbar />
        </div>
      <Header />
      <Brand />
      <WhatGPA />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home