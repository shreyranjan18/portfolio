import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'emerald', color: '#10b981' },
  { name: 'blue', color: '#2563eb' },
  { name: 'purple', color: '#c084fc' },
  { name: 'rose', color: '#e11d48' },
  { name: 'gold', color: '#fbbf24' },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('emerald');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'emerald';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: 0,
          marginBottom: '1rem',
          background: 'var(--bg-secondary)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          {themes.map(t => (
            <button
              key={t.name}
              onClick={() => changeTheme(t.name)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: t.color,
                border: currentTheme === t.name ? '3px solid white' : '3px solid transparent',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                outline: 'none',
                boxShadow: currentTheme === t.name ? '0 0 10px rgba(255,255,255,0.3)' : 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label={`Change theme to ${t.name}`}
            />
          ))}
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--accent-gradient)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(var(--accent-rgb), 0.4)',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(15deg)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(var(--accent-rgb), 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(var(--accent-rgb), 0.4)';
        }}
        title="Change Theme Color"
      >
        <Palette size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
