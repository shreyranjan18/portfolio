import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="text-center mb-8">
        <h2>Get In <span className="text-gradient">Touch</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Have a project in mind or want to collaborate? Feel free to reach out.</p>
      </div>

      <div className="grid-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-card flex items-center gap-4">
            <div className="glass flex items-center justify-center p-3" style={{ padding: '1rem', width: 60, height: 60, borderRadius: '50%' }}>
              <Mail color="var(--accent-1)" />
            </div>
            <div>
              <h4 className="mb-1 text-gradient">Email</h4>
              <p style={{ color: 'var(--text-secondary)' }}>shreyranjankumar96@gmail.com</p>
            </div>
          </div>

          <div className="glass-card flex items-center gap-4">
            <div className="glass flex items-center justify-center p-3" style={{ padding: '1rem', width: 60, height: 60, borderRadius: '50%' }}>
              <Phone color="var(--accent-2)" />
            </div>
            <div>
              <h4 className="mb-1 text-gradient">Phone</h4>
              <p style={{ color: 'var(--text-secondary)' }}>+91-9934862926</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card flex-col gap-4"
          style={{ display: 'flex' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Name</label>
            <input type="text" placeholder="John Doe" style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 8,
              padding: '0.8rem', color: 'white', outline: 'none', transition: 'border 0.3s ease'
            }} />
          </div>
          <div className="flex flex-col gap-2">
            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Email</label>
            <input type="email" placeholder="john@example.com" style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 8,
              padding: '0.8rem', color: 'white', outline: 'none', transition: 'border 0.3s ease'
            }} />
          </div>
          <div className="flex flex-col gap-2">
             <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Message</label>
             <textarea rows="4" placeholder="How can we help?" style={{
               background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: 8,
               padding: '0.8rem', color: 'white', outline: 'none', transition: 'border 0.3s ease', resize: 'vertical'
             }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>

      <style>{`
        input:focus, textarea:focus { border-color: var(--accent-1) !important; }
      `}</style>
    </section>
  );
};

export default Contact;
