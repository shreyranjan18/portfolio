import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section container">
      <div className="text-center mb-8">
        <h2>Education & <span className="text-gradient">Journey</span></h2>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="glass-card flex flex-col" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
               <BookOpen color="var(--accent-1)" /> Lovely Professional University
             </h3>
             <span className="pill" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', backgroundColor: 'transparent', border: '1px solid var(--accent-1)', color: 'var(--accent-1)' }}>
               Since Aug 2023
             </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Bachelor of Technology - Computer Science and Engineering
          </p>
          <p style={{ color: 'var(--accent-1)', fontWeight: 600, fontSize: '0.9rem' }}>CGPA: 8.2</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="glass-card flex flex-col" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
               <BookOpen color="var(--accent-1)" /> B.S.S.N Inter Collage, Deo
             </h3>
             <span className="pill" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', backgroundColor: 'transparent', border: '1px solid var(--accent-1)', color: 'var(--accent-1)' }}>
               Mar 2022 – May 2023
             </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Intermediate
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aurangabad, Bihar</p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="glass-card flex flex-col" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
               <BookOpen color="var(--accent-1)" /> St. Xavier’s High School
             </h3>
             <span className="pill" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', backgroundColor: 'transparent', border: '1px solid var(--accent-1)', color: 'var(--accent-1)' }}>
               Mar 2020 – May 2021
             </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Matriculation
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Varanasi, Uttar Pradesh</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
