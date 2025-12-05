import React from 'react';
import { motion } from 'framer-motion';

const POSTS = [
    { id: 1, date: 'DEC 01, 2024', title: 'EUROPEAN TOUR ANNOUNCED', excerpt: 'We are bringing the Onyx experience to 15 major cities.' },
    { id: 2, date: 'NOV 20, 2024', title: 'NEW MERCH DROP', excerpt: 'Limited edition hoodies available for 48 hours only.' },
    { id: 3, date: 'OCT 15, 2024', title: 'STUDIO DIARY: DAY 40', excerpt: 'Exploring new synth textures. The sound is evolving.' },
];

export default function Blog() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24 max-w-4xl"
        >
            <h1 className="text-6xl md:text-8xl mb-16 font-[var(--font-display)] tracking-tighter text-center">NEWS</h1>

            <div className="space-y-12">
                {POSTS.map((post, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-b border-white/10 pb-12 group hover:border-[var(--accent-violet)] transition-colors"
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline">
                            <span className="text-[var(--accent-violet)] text-sm tracking-widest w-32 shrink-0">{post.date}</span>
                            <div>
                                <h2 className="text-3xl font-[var(--font-display)] uppercase mb-4 group-hover:text-white text-neutral-200 transition-colors">{post.title}</h2>
                                <p className="text-neutral-400 font-[var(--font-body)]">{post.excerpt}</p>
                                <button className="mt-6 text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all pb-1">READ MORE</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
