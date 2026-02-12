import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
   <div>
    <Header />
    <main>
      <h2>메인 컨텐츠 자리</h2>

      <ProfileCard />
    </main>
    <Footer />
   </div>
  )
}

export default App;
