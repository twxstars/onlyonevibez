import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Heart } from 'lucide-react';

export default function PlayerPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[var(--bg-onyx)] pt-24 pb-32 flex flex-col relative overflow-hidden"
        >
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-violet)] blur-[120px] rounded-full animate-pulse px-4" />
            </div>

            <div className="container z-10 flex flex-col md:flex-row h-full items-center gap-12 flex-grow">
                {/* Cover Art */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="w-full max-w-md aspect-square bg-neutral-900 rounded-sm shadow-2xl shadow-[var(--accent-violet-dim)] border border-white/10 overflow-hidden relative"
                    >
                        <img src="https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=1000" alt="Album Art" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Controls & Tracklist */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-6xl font-[var(--font-display)] uppercase mb-2">MIDNIGHT<br />ONYX</h2>
                    <h3 className="text-xl text-[var(--accent-violet)] tracking-widest mb-12">NOW PLAYING</h3>

                    {/* Waveform Visualization (Simulated) */}
                    <div className="flex items-center justify-center gap-1 h-16 w-full mb-12 opacity-80">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: ['20%', '100%', '20%'] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                                className="w-2 bg-white rounded-full bg-gradient-to-t from-[var(--accent-violet)] to-white"
                            />
                        ))}
                    </div>

                    {/* Main Controls */}
                    <div className="flex items-center justify-center gap-12 mb-12">
                        <button className="text-neutral-400 hover:text-white transition-colors"><SkipBack size={32} /></button>
                        <button className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                            <Play size={40} fill="currentColor" className="ml-1" />
                        </button>
                        <button className="text-neutral-400 hover:text-white transition-colors"><SkipForward size={32} /></button>
                    </div>

                    {/* Playlist Snippet */}
                    <div className="border-t border-white/10 pt-8 space-y-4">
                        <div className="flex justify-between items-center text-[var(--accent-violet)] font-bold">
                            <span>01. THE BEGINNING</span>
                            <span>3:42</span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-500 hover:text-white transition-colors cursor-pointer">
                            <span>02. ECHOES</span>
                            <span>4:15</span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-500 hover:text-white transition-colors cursor-pointer">
                            <span>03. LOST IN TIME</span>
                            <span>3:50</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
