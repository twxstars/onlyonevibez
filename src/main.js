import './styles/main.css';
import gsap from 'gsap';
import Lenis from 'lenis'

// Smooth Scroll
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
    });
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            duration: 0.3
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.3
        });
    });
});

console.log('OnlyOneVibez initialized.');

// Mock Data - Discography
const tracks = [
    { id: 1, title: "LAGOS NIGHTS", year: "2024", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=300" },
    { id: 2, title: "GOLDEN HOUR", year: "2024", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300" },
    { id: 3, title: "OCEAN VIBES", year: "2023", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300" },
    { id: 4, title: "AFRO SOUL", year: "2023", image: "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?auto=format&fit=crop&q=80&w=300" },
];

// Render Tracks (Discography)
if (discographyGrid) {
    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
      <img src="${track.image}" alt="${track.title}" class="artist-image" loading="lazy">
      <div class="artist-info">
        <span class="artist-genre">${track.year}</span>
        <h3 class="artist-name" style="color: white; font-size: 1.2rem;">${track.title}</h3>
        <button class="cta-button primary small spotify-btn" style="padding: 8px 16px; font-size: 10px;">
           SPOTIFY
        </button>
      </div>
    `;

        // Interaction
        card.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, borderColor: '#D4AF37', duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, borderColor: '#E0E0E0', duration: 0.3 });
        });

        card.addEventListener('click', () => {
            openPlayer(track);
        });

        discographyGrid.appendChild(card);
    });
}

// Player Logic
function openPlayer(track) {
    player.classList.remove('closed');
    playerTrack.textContent = track.title;
    playerArtist.textContent = "OnlyOneVibez";
    trackArt.style.backgroundImage = `url(${track.image})`;

    // Auto play simulation
    if (!isPlaying) {
        togglePlay();
    }
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlay);
}

function togglePlay() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';

    if (isPlaying) {
        player.classList.add('playing');
        animateProgress();
    } else {
        player.classList.remove('playing');
        gsap.killTweensOf('.progress-fill');
    }
}


// Progress Bar Animation
function animateProgress() {
    gsap.fromTo('.progress-fill',
        { width: '0%' },
        {
            width: '100%', duration: 30, ease: 'none', onComplete: () => {
                togglePlay(); // Stop when done
            }
        }
    );
}


// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.service-card, .artist-card, .testimonial-card, .section-title, .hero-content, .highlight-item, .beat-title').forEach(el => {
    observer.observe(el);
});

console.log('UI Animations Initialized');
