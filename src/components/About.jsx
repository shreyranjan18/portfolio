import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Trophy, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="text-center mb-8">
        <h2>About <span className="text-gradient">Me</span></h2>
        <p style={{ maxWidth: 800, margin: '0 auto', color: 'var(--text-secondary)' }}>
          My journey in the tech world has evolved into a focused expertise in Software Development,
          Full-Stack Web Architectures, and Algorithmic Problem Solving. I find patterns that solve genuine
          problems and keep a strong foundation in competitive programming.
        </p>
      </div>

      <div className="grid-2 gap-4">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          className="glass-card flex-col justify-between"
        >
          <div className="mb-4">
            <h3 className="mb-2 text-gradient">My Approach</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              I enjoy solving complex architectural problems by writing robust, scalable, and optimized code. I believe in continuous learning, which drives me to explore new domains like Web3, cloud integrations, and competitive problem-solving.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="glass flex items-center justify-center p-3" style={{ padding: '1rem', width: 60, height: 60 }}>
              <Trophy color="var(--accent-1)" />
            </div>
            <div>
              <h4 className="mb-1">Competitive Coding</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Solved 200+ problems across LeetCode, GFG & HackerRank.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="mb-4">What I Do <span className="text-gradient">Best</span></h3>
          <div className="grid-2">
            {[
              { title: 'Frontend Systems', desc: 'React, TypeScript, Framer Motion', icon: <Code /> },
              { title: 'Backend APIs', desc: 'Node.js, Express, Spring-boot', icon: <Server /> },
              { title: 'Database & Cloud', desc: 'MongoDB, MySQL, Supabase, AWS', icon: <Database /> },
              { title: 'System Architecture', desc: 'Scalable, maintainable, user-focused', icon: <Globe /> }
            ].map((skill, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
                <div className="mb-3" style={{ color: 'var(--accent-2)' }}>{skill.icon}</div>
                <h4 className="mb-1" style={{ fontSize: '1.1rem' }}>{skill.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
