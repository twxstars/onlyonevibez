import React from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
    { id: 1, name: 'ONYX HOODIE', price: '$85.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000' },
    { id: 2, name: 'TOUR TEE v1', price: '$45.00', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000' },
    { id: 3, name: 'VINYL BOXSET', price: '$120.00', image: 'https://images.unsplash.com/photo-1535926524332-9cb7e72b0c3d?q=80&w=1000' },
    { id: 4, name: 'DAGGER PENDANT', price: '$60.00', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000' },
];

export default function Merch() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container py-24"
        >
            <h1 className="text-6xl md:text-8xl mb-8 font-[var(--font-display)] uppercase text-center">STORE</h1>
            <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-4">
                <span className="text-sm tracking-widest text-neutral-500">FALL / WINTER 2024</span>
                <div className="flex gap-4 text-sm font-bold">
                    <span>USD</span>
                    <span className="text-neutral-600">EUR</span>
                    <span className="text-neutral-600">GBP</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/5] bg-neutral-900 overflow-hidden relative mb-4">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-black px-6 py-2 tracking-widest text-xs font-bold hover:bg-[var(--accent-violet)] hover:text-white transition-colors">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold tracking-wide uppercase">{item.name}</h3>
                            <span className="text-[var(--accent-violet)]">{item.price}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
