import React from 'react';

import { Footer, Blog, Possibility, Features, WebName, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WebName />
    <Features />
    <Possibility />
    <CTA /> {/*Click To Action*/}
    <Blog />
    <Footer />
  </div>
);

export default App;
