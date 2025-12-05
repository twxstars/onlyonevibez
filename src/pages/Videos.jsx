import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEOS = [
    { id: 1, title: 'MIDNIGHT ONYX (OFFICIAL)', date: '2024', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000' },
    { id: 2, title: 'ECHOES LIVE', date: '2023', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000' },
    { id: 3, title: 'BEHIND THE SCENES', date: '2023', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000' },
];

export default function Videos() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24"
        >
            <h1 className="text-6xl md:text-8xl mb-12 font-[var(--font-display)] tracking-tighter">VISUALS</h1>

            {/* Featured Video - Placeholder */}
            <div className="w-full aspect-video bg-neutral-900 border border-white/10 relative group mb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--accent-violet)] hover:scale-110 transition-all duration-500">
                        <Play size={40} fill="currentColor" />
                    </button>
                </div>
                <div className="absolute bottom-8 left-8">
                    <span className="text-[var(--accent-violet)] tracking-widest text-sm">LATEST RELEASE</span>
                    <h2 className="text-4xl font-[var(--font-display)] uppercase mt-2">NEON SHADOWS</h2>
                </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {VIDEOS.map((video, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-video bg-neutral-800 relative overflow-hidden mb-4 border border-white/5">
                            <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play size={32} />
                            </div>
                        </div>
                        <h3 className="font-bold tracking-wide text-sm group-hover:text-[var(--accent-violet)] transition-colors">{video.title}</h3>
                        <span className="text-xs text-neutral-500">{video.date}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
