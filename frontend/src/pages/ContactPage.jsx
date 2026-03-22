import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-bg text-white overflow-hidden flex flex-col z-[70] p-8 md:p-24">
      {/* Grain & Background */}
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-16">
        <motion.button 
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> BACK
        </motion.button>
        <span className="mono text-brand">Connect</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="text-[10vw] lg:text-[6vw] font-cabinet font-black leading-none uppercase mb-8">
            Tell me <br /> <span className="text-brand italic text-outline">Anything</span>
          </h1>
          <p className="text-xl text-zinc-500 font-satoshi max-w-md">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="relative group">
            <span className="absolute -top-6 left-0 mono text-[10px] text-zinc-600 transition-colors group-focus-within:text-brand">Your Name</span>
            <input 
              type="text" 
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-white/10 py-4 text-2xl font-cabinet focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-800"
              required
            />
          </div>

          <div className="relative group">
            <span className="absolute -top-6 left-0 mono text-[10px] text-zinc-600 transition-colors group-focus-within:text-brand">Message</span>
            <textarea 
              placeholder="What's on your mind?"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-white/10 py-4 text-2xl font-cabinet focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-800 resize-none"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="group relative flex items-center justify-between bg-white text-black p-6 rounded-2xl font-cabinet font-black uppercase tracking-tight overflow-hidden hover:bg-brand hover:text-white transition-colors duration-500"
          >
            <span className="relative z-10 text-xl">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </span>
            <div className="relative z-10">
              {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={24} />}
            </div>
          </button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-green-500 mono text-xs"
              >
                <CheckCircle2 size={16} /> Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-red-500 mono text-xs"
              >
                <AlertCircle size={16} /> {errorMessage || 'Something went wrong. Try again.'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {/* Floating Watermark */}
      <div className="absolute bottom-12 right-12 opacity-[0.02] pointer-events-none">
        <h2 className="text-[12vw] font-cabinet font-black leading-none">POST</h2>
      </div>
    </div>
  );
};

export default ContactPage;
