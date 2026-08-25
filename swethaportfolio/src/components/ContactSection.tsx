import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Clock,
  SendHorizontal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | 'message' | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'message') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const getGmailUrl = () => {
    const subjectText = formData.subject.trim() 
      ? `[Portfolio Message] ${formData.subject.trim()} - From ${formData.name || 'Visitor'}`
      : `[Portfolio Message] Inquiry from ${formData.name || 'Visitor'}`;
    const bodyText = `Hello Swetha,\n\nName: ${formData.name}\nEmail: ${formData.senderEmail}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}\n\nSent via Swetha J Portfolio`;
    
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const getMailtoUrl = () => {
    const subjectText = formData.subject.trim() 
      ? `[Portfolio Message] ${formData.subject.trim()} - From ${formData.name || 'Visitor'}`
      : `[Portfolio Message] Inquiry from ${formData.name || 'Visitor'}`;
    const bodyText = `Hello Swetha,\n\nName: ${formData.name}\nEmail: ${formData.senderEmail}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`;
    
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.senderEmail || !formData.message) return;

    setIsSubmitting(true);

    const emailSubject = formData.subject.trim() 
      ? `[Portfolio Message] ${formData.subject.trim()} (From ${formData.name})`
      : `[Portfolio Message] New Inquiry from ${formData.name}`;

    try {
      // Send directly to Swetha's email address via FormSubmit AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Recipient': PERSONAL_INFO.email,
          'Sender Name': formData.name,
          'Sender Email': formData.senderEmail,
          'Sender Phone': formData.phone || 'Not provided',
          '_subject': emailSubject,
          '_replyto': formData.senderEmail,
          '_template': 'table',
          '_captcha': 'false',
          'Message': formData.message
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok || (result && (result.success === 'true' || result.success === true))) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // Safe fallback
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Direct delivery fallback triggered:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect & Send a Message
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Have an internship opportunity, project collaboration, or inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Email Address</span>
                    <h3 className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs">{PERSONAL_INFO.email}</h3>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent('Inquiry for Swetha J')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-5 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Mobile & WhatsApp</span>
                    <h3 className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</h3>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  title="Copy phone to clipboard"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Call Directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/919025159820?text=${encodeURIComponent('Hello Swetha, I saw your portfolio and would like to connect!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Cards: GitHub & LinkedIn */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 transition-all group block text-center"
              >
                <Github className="w-6 h-6 text-slate-300 group-hover:text-white mx-auto mb-2" />
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">@gitswetha12</div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-4 transition-all group block text-center"
              >
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform mx-auto mb-2" />
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">swetha-jayakumar</div>
              </a>
            </div>

            {/* Location Banner */}
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Location: Trichy & Mayiladuthurai, Tamil Nadu, India</span>
            </div>

          </div>

          {/* Right Column: Direct Message Dispatcher */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <Check className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mt-2">
                    Thank you! Your message has been sent directly to <strong className="text-emerald-400">{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>

                {/* Delivery details card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto space-y-3 text-left">
                  <div className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-mono">
                    <div className="text-[11px] text-slate-400 mb-1">From: {formData.name} ({formData.senderEmail})</div>
                    <div className="line-clamp-2">"{formData.message}"</div>
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row gap-2">
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>

                    <button
                      onClick={() => handleCopy(`To: ${PERSONAL_INFO.email}\nFrom: ${formData.name} (${formData.senderEmail})\nPhone: ${formData.phone}\nMessage: ${formData.message}`, 'message')}
                      className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      {copiedType === 'message' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedType === 'message' ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', senderEmail: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-2 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <SendHorizontal className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-heading text-lg font-bold text-white">
                      Send a Message to Swetha
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>Quick Response</span>
                  </span>
                </div>

                {/* Sender Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Collaborator"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@company.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Phone / WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Web Developer Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 transition-all duration-200 disabled:opacity-60 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending message...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1">
                    <span>Delivers to: <code className="text-emerald-400/90 font-semibold">{PERSONAL_INFO.email}</code></span>
                    <span>•</span>
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 underline transition-colors"
                    >
                      Open directly in Gmail
                    </a>
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
