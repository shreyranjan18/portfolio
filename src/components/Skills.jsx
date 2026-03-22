import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Terminal, FileCode, LayoutTemplate, 
  Server, Database, GitBranch, Github, Cloud, 
  BrainCircuit, Users, Briefcase, RefreshCw, Cpu
} from 'lucide-react';

const skillsList = [
  { name: 'C/C++', category: 'Languages', icon: <Terminal size={24} color="#06b6d4" /> },
  { name: 'Java', category: 'Languages', icon: <Code2 size={24} color="#f87171" /> },
  { name: 'Python', category: 'Languages', icon: <Terminal size={24} color="#facc15" /> },
  { name: 'JavaScript', category: 'Languages', icon: <FileCode size={24} color="#fde047" /> },
  
  { name: 'HTML & CSS', category: 'Frameworks', icon: <LayoutTemplate size={24} color="#fb923c" /> },
  { name: 'NodeJS', category: 'Frameworks', icon: <Server size={24} color="#4ade80" /> },
  { name: 'React', category: 'Frameworks', icon: <Cpu size={24} color="#38bdf8" /> },
  { name: 'TypeScript', category: 'Frameworks', icon: <FileCode size={24} color="#60a5fa" /> },
  { name: 'Spring-boot', category: 'Frameworks', icon: <Server size={24} color="#22c55e" /> },
  
  { name: 'MySQL', category: 'Tools', icon: <Database size={24} color="#fbbf24" /> },
  { name: 'MongoDB', category: 'Tools', icon: <Database size={24} color="#4ade80" /> },
  { name: 'Supabase', category: 'Tools', icon: <Database size={24} color="#34d399" /> },
  { name: 'Git', category: 'Tools', icon: <GitBranch size={24} color="#f87171" /> },
  { name: 'GitHub', category: 'Tools', icon: <Github size={24} color="#f3f4f6" /> },
  { name: 'AWS', category: 'Tools', icon: <Cloud size={24} color="#fb923c" /> },
  
  { name: 'Problem-Solving', category: 'Soft Skills', icon: <BrainCircuit size={24} color="#a855f7" /> },
  { name: 'Team Player', category: 'Soft Skills', icon: <Users size={24} color="#60a5fa" /> },
  { name: 'Project Management', category: 'Soft Skills', icon: <Briefcase size={24} color="#fbbf24" /> },
  { name: 'Adaptability', category: 'Soft Skills', icon: <RefreshCw size={24} color="#34d399" /> }
];

const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'Soft Skills'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsList 
    : skillsList.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section container">
      <div className="text-center mb-8">
        <h2>My <span className="text-gradient">Skills</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>A mix of technical knowledge and soft skills that keeps me adaptable.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '9999px',
              border: activeCategory === category ? '1px solid transparent' : '1px solid var(--border-color)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              background: activeCategory === category ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === category ? 'white' : 'var(--text-secondary)',
              boxShadow: activeCategory === category ? '0 4px 15px rgba(168, 85, 247, 0.3)' : 'none',
              backdropFilter: 'blur(10px)'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="glass-card flex items-center"
              style={{
                padding: '1.25rem 1.5rem', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.6rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)'
              }}>
                {skill.icon}
              </div>
              <span style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
