import React from 'react';
import Navbar from './Navbar';
import PersistentPlayer from './PersistentPlayer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--bg-onyx)] text-white font-sans">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow pt-[var(--nav-height)] pb-[var(--player-height)]">
                {children}
            </main>

            <PersistentPlayer />
        </div>
    );
}
