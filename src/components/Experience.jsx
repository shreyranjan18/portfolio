import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="text-center mb-8">
        <h2>Experience & <span className="text-gradient">Journey</span></h2>
      </div>

      <div className="grid-2">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen color="var(--accent-1)" /> Education
          </h3>
          <div className="flex flex-col gap-4">
            <div className="glass-card">
              <span className="pill mb-2">Since Aug 2023</span>
              <h4>Lovely Professional University</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Bachelor of Technology - Computer Science and Engineering</p>
              <p style={{ color: 'var(--accent-1)', fontWeight: 600 }}>CGPA: 8.2</p>
            </div>
            
            <div className="glass-card">
              <span className="pill mb-2">Mar 2022 – May 2023</span>
              <h4>B.S.S.N Inter Collage, Deo</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Intermediate</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aurangabad, Bihar</p>
            </div>
            

          </div>
        </motion.div>

        {/* Certificates & Achievements Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Star color="var(--accent-2)" /> Achievements
          </h3>
          <div className="flex flex-col gap-3 glass-card">
            <p style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-2)' }}>•</span> Qualified through two highly competitive coding rounds in Code-a-hunt Hackathon.
            </p>
            <p style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-2)' }}>•</span> Solved 200+ coding problems across LeetCode, GFG & HackerRank.
            </p>
            <p style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-2)' }}>•</span> Earned 5-star rating in C++ on HackerRank for consistent performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
