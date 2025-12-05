import React from 'react';
import { Download } from 'lucide-react';

const ASSETS = [
    { name: 'OFFICIAL BIO (PDF)', size: '2.4 MB' },
    { name: 'HIGH-RES PHOTOS (ZIP)', size: '156 MB' },
    { name: 'LOGOS & BRANDING (AI)', size: '12 MB' },
    { name: 'TECH RIDER 2024 (PDF)', size: '1.1 MB' },
];

export default function Press() {
    return (
        <div className="container py-24">
            <h1 className="text-6xl md:text-8xl mb-4 font-[var(--font-display)] uppercase text-center">PRESS KIT</h1>
            <p className="text-center text-neutral-500 tracking-widest mb-16">OFFICIAL ASSETS FOR MEDIA & PROMOTERS</p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-900/50 p-8 border border-white/10">
                    <h2 className="text-2xl font-[var(--font-display)] mb-8">DOWNLOADS</h2>
                    <div className="space-y-4">
                        {ASSETS.map((asset, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4">
                                <div>
                                    <p className="font-bold tracking-wide group-hover:text-[var(--accent-violet)] transition-colors">{asset.name}</p>
                                    <p className="text-xs text-neutral-600">{asset.size}</p>
                                </div>
                                <Download className="text-neutral-500 group-hover:text-white transition-colors" size={20} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-900/50 p-8 border border-white/10">
                    <h2 className="text-2xl font-[var(--font-display)] mb-8">CONTACTS</h2>

                    <div className="mb-8">
                        <h3 className="text-[var(--accent-violet)] text-xs tracking-widest mb-2">MANAGEMENT</h3>
                        <p className="text-xl">MGMT@ARTIST.COM</p>
                        <p className="text-neutral-500">+1 (555) 000-0000</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-[var(--accent-violet)] text-xs tracking-widest mb-2">PRESS / PR</h3>
                        <p className="text-xl">PRESS@LABEL.COM</p>
                    </div>

                    <div>
                        <h3 className="text-[var(--accent-violet)] text-xs tracking-widest mb-2">BOOKING (NA)</h3>
                        <p className="text-xl">AGENT@WME.COM</p>
                    </div>
                </div>
            </div>

            {/* Brand Guidelines Teaser */}
            <div className="max-w-4xl mx-auto mt-12 p-8 border border-[var(--accent-violet)]/30 bg-[var(--accent-violet)]/5 text-center">
                <p className="font-[var(--font-body)] tracking-widest text-sm">PLEASE ADHERE TO BRAND GUIDELINES WHEN USING MATERIAL.</p>
            </div>
        </div>
    );
}
