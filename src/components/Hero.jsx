import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Layer - Placeholder for Video */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 bg-neutral-900"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-onyx)] via-transparent to-[var(--bg-onyx)/50] z-10" />
                {/* Abstract animated gradient to simulate premium video feel */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--accent-violet-dim),transparent_70%)] blur-3xl" />
                <img
                    src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]"
                />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-20 text-center flex flex-col items-center p-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-[var(--accent-violet)] text-sm md:text-base tracking-[0.3em] font-medium mb-4"
                >
                    THE SOUND OF EXCELLENCE
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8"
                    style={{ fontFamily: 'var(--font-display)', textShadow: '0 0 40px rgba(127,0,255,0.3)' }}
                >
                    ARTIST<span className="text-[var(--accent-violet)]">.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-6 mt-4"
                >
                    <button className="px-8 py-3 bg-[var(--accent-violet)] text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105">
                        LATEST VIDEO
                    </button>
                    <button className="px-8 py-3 border border-white/20 text-white font-bold tracking-widest hover:border-[var(--accent-violet)] hover:text-[var(--accent-violet)] transition-all">
                        TOUR DATES
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-32 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-[10px] tracking-widest text-neutral-500">SCROLL</span>
                <ChevronDown className="animate-bounce text-neutral-500" />
            </motion.div>
        </div>
    );
}
