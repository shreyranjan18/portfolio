import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificationsList = [
  {
    title: 'Master Generative AI',
    issuer: 'Udemy',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1FiEaupI9xseYwfiSOQDpHXhbu5bQ_Iu9/view?usp=sharing',
    desc: 'Completed an in-depth 14-hour Udemy course on Generative AI, exploring ChatGPT, modern AI tools, prompt engineering, and practical use cases for AI-powered content.'
  },
  {
    title: 'Java Spring Boot Full Stack',
    issuer: 'Code IT / Sunshine Coding',
    date: '2024',
    link: 'https://drive.google.com/file/d/1GGjwkFz8QrgBx66p5GYoV-NC_y4EocMV/view',
    desc: 'Comprehensive certification in enterprise-level development emphasizing Spring Core, MVC architecture, Hibernate ORM, and secure REST APIs.'
  },
  {
    title: 'Computer Programming',
    issuer: 'iamneo & LPU',
    date: 'May 2024',
    link: 'https://drive.google.com/file/d/1UPwaGWpJANsHvu8KF_fYkxfimyprsXcb/view',
    desc: 'Completed an intensive 72-hour online computer programming bootcamp authorized by Lovely Professional University.'
  },
  {
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: '2024',
    link: 'https://drive.google.com/file/d/1akPuciK65jj4QSTooSJH4ueKA1S6sbzA/view',
    desc: 'Extensive coursework focusing on core cloud computing concepts, virtualization, and distributed systems.'
  },
  {
    title: 'HTML, CSS, JavaScript & React',
    issuer: 'Udemy',
    date: '2023',
    link: 'https://drive.google.com/file/d/19Z38JzG7nTkMoKXrVX-vCxCv0GHErxPr/view',
    desc: 'Mastered frontend web development through full-stack hands-on projects and advanced React component lifecycles.'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2022',
    link: 'https://www.freecodecamp.org/certification/fcc25fb8be4-8556-4bd6-b08e-d693b561ce96/responsive-web-design',
    desc: 'Comprehensive training in creating highly responsive and fluid layouts using modern CSS Flexbox and Grids.'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section container">
      <div className="text-center mb-8">
        <h2>Professional <span className="text-gradient">Certifications</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Official accomplishments and credentials validating my technical abilities and continuing education.
        </p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {certificationsList.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="glass-card flex flex-col"
            style={{ padding: '2rem', position: 'relative' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--accent-1)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {cert.issuer}
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '0.2rem 0.8rem', 
                borderRadius: '9999px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }}>
                {cert.date}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>
              {cert.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
              {cert.desc}
            </p>
            
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  color: 'var(--accent-1)', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  textDecoration: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  transition: 'opacity 0.3s ease' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                View Credential <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
