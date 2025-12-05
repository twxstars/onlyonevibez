import React from 'react';
import { Play, SkipForward, SkipBack, Volume2 } from 'lucide-react';

export default function PersistentPlayer() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-black/90 backdrop-blur-lg border-t border-white/10" style={{ height: 'var(--player-height)' }}>
            <div className="container h-full flex items-center justify-between">
                {/* Track Info */}
                <div className="flex items-center gap-4 w-1/3">
                    <div className="w-12 h-12 bg-neutral-800 rounded-sm animate-pulse" /> {/* Art Placeholder */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide">Select a Track</h4>
                        <p className="text-xs text-neutral-500">Artist Name</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-1 w-1/3">
                    <div className="flex items-center gap-6">
                        <button className="text-neutral-400 hover:text-white transition-colors"><SkipBack size={20} /></button>
                        <button className="w-10 h-10 rounded-full bg-[var(--accent-violet)] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <Play size={20} fill="currentColor" />
                        </button>
                        <button className="text-neutral-400 hover:text-white transition-colors"><SkipForward size={20} /></button>
                    </div>
                    {/* Progress Bar Shell */}
                    <div className="w-full max-w-[200px] h-1 bg-white/10 rounded-full mt-2">
                        <div className="w-0 h-full bg-[var(--accent-violet)] rounded-full" />
                    </div>
                </div>

                {/* Volume / Extra */}
                <div className="flex items-center justify-end gap-2 w-1/3">
                    <Volume2 size={16} className="text-neutral-500" />
                    <div className="w-20 h-1 bg-white/10 rounded-full">
                        <div className="w-1/2 h-full bg-white/50 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
