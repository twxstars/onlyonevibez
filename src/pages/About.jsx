import React from 'react';
import { motion } from 'framer-motion';

const MILESTONES = [
    { year: '2024', title: 'GLOBAL TAKEOVER', desc: 'Sold out 50 stadiums worldwide.' },
    { year: '2022', title: 'GRAMMY WIN', desc: 'Best Alternative Album for "Velvet Noise".' },
    { year: '2020', title: 'THE DEBUT', desc: 'Broke streaming records with debut single.' },
];

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24"
        >
            <div className="flex flex-col md:flex-row gap-16">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <div className="sticky top-32">
                        <img
                            src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
                            alt="Artist Portrait"
                            className="w-full aspect-[3/4] object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-6xl md:text-8xl font-[var(--font-display)] uppercase leading-none mb-8">THE<br />MYTH</h1>
                    <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed font-light">
                        "I don't make music to be heard. I make music to be felt. It's not about the notes, it's about the space between them."
                    </p>
                    <p className="text-neutral-500 leading-looose mb-12">
                        Born in the glitch, raised by the beat. An enigmatic force in the modern soundscape, blending analog warmth with digital coldness.
                        From underground raves to sold-out arenas, the mission remains the same: Absolute sonic dominance.
                    </p>

                    {/* Timeline */}
                    <div className="border-l border-white/10 pl-8 space-y-12">
                        {MILESTONES.map((item, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-[var(--accent-violet)] ring-4 ring-black" />
                                <h3 className="text-3xl font-[var(--font-display)]">{item.year}</h3>
                                <h4 className="text-lg font-bold text-white mt-1 uppercase tracking-wide">{item.title}</h4>
                                <p className="text-neutral-500 mt-2 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
