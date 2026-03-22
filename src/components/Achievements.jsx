import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Star, Zap } from 'lucide-react';

const achievementsList = [
  {
    icon: <Code size={24} color="white" />,
    iconBg: '#8b5cf6',
    title: '200+',
    subtitle: 'Problems Solved',
    desc: 'LeetCode & CodeChef — sharpening problem-solving skills consistently.',
    date: 'Nov 2025'
  },
  {
    icon: <Trophy size={24} color="white" />,
    iconBg: '#f97316',
    title: '100',
    subtitle: 'Days Badge',
    desc: 'Earned the 100-day streak badge on LeetCode in C++ for consistent daily performance.',
    date: 'Oct 2025'
  },
  {
    icon: <Star size={24} color="white" />,
    iconBg: '#06b6d4',
    title: '5 ★',
    subtitle: 'HackerRank C++',
    desc: 'Achieved 5-star C++ badge on HackerRank, demonstrating strong OOP and core programming.',
    date: 'Jun 2024'
  },
  {
    icon: <Zap size={24} color="white" />,
    iconBg: '#22c55e',
    title: '8.2',
    subtitle: 'CGPA at LPU',
    desc: 'Maintaining strong academic performance while building real-world projects and internships.',
    date: 'Ongoing'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section container">
      <div className="text-center mb-12">
        <h2>Key <span className="text-gradient">Achievements</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {achievementsList.map((item, i) => (
          <motion.div
            key={item.subtitle}
            className="glass-card flex flex-col"
            style={{ padding: '2rem 1.75rem', borderRadius: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div style={{ 
              width: '48px', height: '48px', 
              borderRadius: '12px', 
              background: item.iconBg, 
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              marginBottom: '1.5rem',
              boxShadow: `0 4px 20px ${item.iconBg}40`
            }}>
              {item.icon}
            </div>

            <h3 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 900, 
              color: 'var(--text-primary)', 
              marginBottom: '0',
              lineHeight: 1.2,
              letterSpacing: '-1px'
            }}>
              {item.title}
            </h3>
            
            <h4 style={{ 
              fontSize: '1rem', 
              color: 'var(--text-primary)', 
              marginBottom: '1rem',
              fontWeight: 700
            }}>
              {item.subtitle}
            </h4>

            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.6, 
              flexGrow: 1,
              marginBottom: '1.5rem'
            }}>
              {item.desc}
            </p>

            <div style={{ 
              width: '100%', 
              height: '1px', 
              background: 'rgba(255,255,255,0.1)', 
              marginBottom: '1.25rem' 
            }} />

            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-secondary)', 
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>
              {item.date}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
