import React from 'react';
import Hero from '../components/Hero';
import SpotifyEmbed from '../components/SpotifyEmbed';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <SpotifyEmbed />

            {/* Short Bio Teaser */}
            <section className="container py-32 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-[var(--font-display)] mb-8">THE STORY</h2>
                <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
                    From the underground shadows to the blinding stadium lights.
                    A journey defined by obsession, rhythm, and the pursuit of the perfect frequency.
                </p>
                <button className="mt-12 text-[var(--accent-violet)] tracking-widest hover:text-white transition-colors border-b border-[var(--accent-violet)] pb-1">
                    READ FULL BIO
                </button>
            </section>
        </motion.div>
    );
}
