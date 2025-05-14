'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Image from 'next/image';

const FloatingIcons = () => {
  const icons = [
    '🎉', '🎪', '🎭', '🎨', '🎸', '🎼', '🎤', '🎵',
    '✨', '💫', '⭐', '🌟', '💃', '🕺', '🎯', '🎪'
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
        >
          {icon}
        </div>
      ))}
    </>
  );
};

interface ConfettiOptions {
  spread: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: ConfettiOptions) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast.success('Successfully joined the waitlist!');
      launchConfetti();
      setEmail('');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen animated-gradient relative overflow-hidden">
      <FloatingIcons />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Toaster position="top-center" />
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[320px] mx-auto mb-8 flex items-center justify-center px-4"
            >
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={400}
                height={400}
                className="w-auto h-auto"
                style={{ maxHeight: '260px', maxWidth: '100%' }}
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'linear-gradient(to right, #60A5FA, #A78BFA, #60A5FA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Get Ready for the Ultimate Event Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg mb-8"
            >
              Our event management platform is launching soon. Join the waitlist to be the first to know!
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 rounded-lg text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(to right, #2563EB, #7C3AED)',
                  backgroundSize: '200% auto'
                }}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              {[
                { icon: '🎯', text: 'Personalized Events' },
                { icon: '✨', text: 'Seamless Planning' },
                { icon: '🎊', text: 'Unforgettable Experiences' }
              ].map((feature, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <span className="w-4 h-4">{feature.icon}</span> {feature.text}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
