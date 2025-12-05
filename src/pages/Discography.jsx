import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowUpRight } from 'lucide-react';

const ALBUMS = [
    { id: 1, title: 'MIDNIGHT ONYX', year: '2024', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop', type: 'ALBUM' },
    { id: 2, title: 'CHROMATIC HAZE', year: '2023', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop', type: 'EP' },
    { id: 3, title: 'VELVET NOISE', year: '2022', image: 'https://images.unsplash.com/photo-1514525253440-b393452de239?q=80&w=1000&auto=format&fit=crop', type: 'SINGLE' },
    { id: 4, title: 'ECHO CHAMBER', year: '2021', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop', type: 'ALBUM' },
];

export default function Discography() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-12"
        >
            <h1 className="text-6xl md:text-9xl mb-12 text-center md:text-left opacity-10 font-[var(--font-display)] tracking-tighter select-none pointer-events-none fixed top-20 left-0 -z-10">DISCOGRAPHY</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24">
                {ALBUMS.map((album, index) => (
                    <motion.div
                        key={album.id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                            <img
                                src={album.image}
                                alt={album.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-4 backdrop-blur-sm">
                                <button className="flex items-center gap-2 text-white bg-[var(--accent-violet)] px-6 py-2 rounded-full font-bold tracking-widest hover:bg-white hover:text-black transition-all">
                                    <PlayCircle size={20} /> STREAM
                                </button>
                                <div className="flex gap-4">
                                    <span className="text-xs tracking-widest border border-white/20 px-3 py-1 bg-black/50">SPOTIFY</span>
                                    <span className="text-xs tracking-widest border border-white/20 px-3 py-1 bg-black/50">APPLE</span>
                                </div>
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="flex justify-between items-end mt-4 border-b border-white/10 pb-4">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-[var(--font-display)] uppercase">{album.title}</h3>
                                <p className="text-[var(--accent-violet)] tracking-widest text-xs mt-1">{album.type}</p>
                            </div>
                            <span className="text-4xl font-[var(--font-body)] text-neutral-700">{album.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
