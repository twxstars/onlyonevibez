import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container py-24 max-w-2xl">
            <h1 className="text-5xl md:text-7xl mb-12 font-[var(--font-display)] uppercase text-center">BOOKING</h1>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-widest text-[var(--accent-violet)]">FULL NAME</label>
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:border-[var(--accent-violet)] focus:outline-none transition-colors text-xl font-[var(--font-display)] uppercase" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-widest text-[var(--accent-violet)]">ORGANIZATION</label>
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:border-[var(--accent-violet)] focus:outline-none transition-colors text-xl font-[var(--font-display)] uppercase" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-[var(--accent-violet)]">EMAIL ADDRESS</label>
                    <input type="email" className="bg-transparent border-b border-white/20 py-2 focus:border-[var(--accent-violet)] focus:outline-none transition-colors text-xl font-[var(--font-body)]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-[var(--accent-violet)]">EVENT TYPE / BUDGET</label>
                    <select className="bg-transparent border-b border-white/20 py-2 focus:border-[var(--accent-violet)] focus:outline-none transition-colors text-xl font-[var(--font-display)] uppercase text-neutral-400">
                        <option className="bg-black">FESTIVAL HEADLINE</option>
                        <option className="bg-black">CLUB SHOW</option>
                        <option className="bg-black">PRIVATE EVENT</option>
                        <option className="bg-black">BRAND PARTNERSHIP</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-[var(--accent-violet)]">MESSAGE</label>
                    <textarea rows="4" className="bg-transparent border-b border-white/20 py-2 focus:border-[var(--accent-violet)] focus:outline-none transition-colors text-lg font-[var(--font-body)] text-neutral-300"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-white text-black font-bold tracking-[0.2em] hover:bg-[var(--accent-violet)] hover:text-white transition-all flex items-center justify-center gap-4 mt-8">
                    SUBMIT INQUIRY <ArrowRight size={20} />
                </button>
            </form>
        </div>
    );
}
