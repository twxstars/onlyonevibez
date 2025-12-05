import React from 'react';
import { motion } from 'framer-motion';

const PHOTOS = [
    'https://images.unsplash.com/photo-1459749411177-046f5211a52f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1514525253440-b393452de239?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1533174072545-e8d98597397b?auto=format&fit=crop&q=80',
];

export default function Gallery() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24"
        >
            <div className="flex justify-between items-end mb-16">
                <h1 className="text-8xl font-[var(--font-display)] uppercase">VISION</h1>
                <p className="text-right text-[var(--accent-violet)] tracking-widest text-sm">ARCHIVE / 2024</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {PHOTOS.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="break-inside-avoid relative group overflow-hidden"
                    >
                        <img
                            src={src}
                            alt="Gallery Item"
                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
