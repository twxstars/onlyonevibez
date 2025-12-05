import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Discography from './pages/Discography';
import TourDates from './pages/TourDates';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import Press from './pages/Press';
import Contact from './pages/Contact';
import Merch from './pages/Merch';
import PlayerPage from './pages/PlayerPage';

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Discography />} />
          <Route path="/tour" element={<TourDates />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/store" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/player" element={<PlayerPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
