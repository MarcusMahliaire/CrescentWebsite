import React from 'react'
import Blog from '../../containers/blog/Blog';
import Possibility from '../../containers/possibility/Possibility';
import Features from '../../containers/features/Features';
import WhatGPA from '../../containers/whatGPA/WhatGPA';
// import { Blog, Possibility, Features, WhatGPA, Header} from './containers'
// import { CTA, Brand, Navbar} from './components';
import CTA from '../../components/cta/CTA';
import Brand from '../../components/brand/Brand';
import Header from '../../containers/header/Header';




const Home = () => {
  return (
    <div>
      <Header />
      <Brand />
      <WhatGPA />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
  )
}

export default Home