import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import Home from '@/pages/Home';
import GameDetails from '@/pages/GameDetails';
import Profile from '@/pages/Profile';
import Admin from '@/pages/Admin';
import Rankings from '@/pages/Rankings';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-arcano-bg text-gray-100 selection:bg-arcano-primary/30">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/game/:id" element={
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <GameDetails />
              </motion.div>
            } />
            <Route path="/profile" element={
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Profile />
              </motion.div>
            } />
            <Route path="/admin" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Admin />
              </motion.div>
            } />
            <Route path="/rankings" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Rankings />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        
        <Navbar />
      </div>
    </Router>
  );
}
