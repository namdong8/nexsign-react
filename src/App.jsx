import React from 'react';
import Header from './components/layout/Header'
import Contents from './components/layout/Contents'
import Provider from './components/layout/Provider'
import Footer from './components/layout/Footer'
import PopupModal from './components/item/PopupModal';

function App() {
    return (
      <>
        <div className="ns-block-bg"></div>
        <div className="ns-sign">
          <Header />
          <Provider />
          <Contents/>
          <PopupModal/>
          <Footer />
        </div>
      </>
    );
  }

export default App