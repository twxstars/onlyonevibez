import React from 'react';

export default function SpotifyEmbed() {
    return (
        <section className="container py-24 border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-1/2">
                    <h3 className="text-4xl font-[var(--font-display)] mb-2">ESSENTIALS</h3>
                    <p className="text-neutral-500 tracking-wide mb-8">Curated collection of top hits and deep cuts.</p>
                    <div className="w-full h-[400px] overflow-hidden rounded-sm relative border border-white/10 group">
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center z-0">
                            <span className="text-neutral-700 tracking-widest">LOADING PLAYER...</span>
                        </div>
                        {/* Real iframe would go here. Using a simulated sleek container for now. */}
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="relative z-10"
                        ></iframe>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-8 text-right">
                    <h2 className="text-6xl md:text-8xl font-[var(--font-display)] tracking-tighter text-white opacity-10">
                        LISTEN<br />NOW
                    </h2>
                    <p className="text-lg text-[var(--accent-violet)] tracking-widest">SPOTIFY / APPLE MUSIC / TIDAL</p>
                </div>
            </div>
        </section>
    );
}
