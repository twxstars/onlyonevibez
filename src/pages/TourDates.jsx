import React from 'react';
import { motion } from 'framer-motion';

const TOUR_DATES = [
    { id: 1, date: 'OCT 12', city: 'LONDON', venue: 'O2 ARENA', status: 'SOLD OUT' },
    { id: 2, date: 'OCT 15', city: 'PARIS', venue: 'ACCOR ARENA', status: 'AVAILABLE' },
    { id: 3, date: 'OCT 20', city: 'BERLIN', venue: 'MERCEDES-BENZ ARENA', status: 'AVAILABLE' },
    { id: 4, date: 'NOV 05', city: 'NEW YORK', venue: 'MSG', status: 'SELLING FAST' },
    { id: 5, date: 'NOV 10', city: 'LOS ANGELES', venue: 'SOFI STADIUM', status: 'AVAILABLE' },
];

export default function TourDates() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24 min-h-screen"
        >
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
                <h1 className="text-6xl md:text-8xl font-[var(--font-display)] tracking-tighter">WORLD<br /><span className="text-[var(--accent-violet)]">TOUR</span></h1>
                <p className="text-right text-neutral-400 max-w-sm text-sm tracking-wide">
                    EXPERIENCE THE SOUND OF EXCELLENCE LIVE. <br />
                    GET YOUR TICKETS BEFORE THEY VANISH.
                </p>
            </div>

            <div className="flex flex-col">
                {TOUR_DATES.map((show, index) => (
                    <motion.div
                        key={show.id}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 group"
                    >
                        <div className="w-full md:w-1/4 text-[var(--accent-violet)] text-xl font-bold tracking-widest">{show.date}</div>
                        <div className="w-full md:w-1/4 text-4xl font-[var(--font-display)] uppercase">{show.city}</div>
                        <div className="w-full md:w-1/4 text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">{show.venue}</div>
                        <div className="w-full md:w-1/4 flex justify-end mt-4 md:mt-0">
                            {show.status === 'SOLD OUT' ? (
                                <span className="text-neutral-600 line-through tracking-widest">SOLD OUT</span>
                            ) : (
                                <button className="px-8 py-2 border border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase text-sm">
                                    GET TICKETS
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
