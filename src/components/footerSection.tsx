'use client'

import SmoothLink from "@/components/smoothLink";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-500/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter uppercase text-white">Aetheria</h3>
                        <p className="text-white/70 max-w-xs text-sm leading-relaxed">
                            Redefining urban density through regenerative biophilic architecture.
                            Building the lungs of the future city.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-6">
                        <p id="footer-nav-label" className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em]">Navigation</p>
                        <nav aria-labelledby="footer-nav-label">
                            <ul className="space-y-1 text-sm font-medium">
                                <li><SmoothLink href="#vision" className="inline-block py-3 text-white/70 hover:text-white transition-colors">Vision</SmoothLink></li>
                                <li><SmoothLink href="#studio" className="inline-block py-3 text-white/70 hover:text-white transition-colors">Studio</SmoothLink></li>
                                <li><SmoothLink href="#spaces" className="inline-block py-3 text-white/70 hover:text-white transition-colors">Projects</SmoothLink></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Social Column */}
                    <div className="space-y-6">
                        <p id="footer-social-label" className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em]">Connect</p>
                        <nav aria-labelledby="footer-social-label">
                            <ul className="space-y-1 text-sm font-medium">
                                <li><a href="#" className="inline-block py-3 text-white/70 hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="inline-block py-3 text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="inline-block py-3 text-white/70 hover:text-white transition-colors">Behance</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-mono text-white/50 uppercase tracking-widest text-center md:text-left">
                        © 2025 Aetheria Collective. All Rights Reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-3 p-3 text-xs font-mono text-white/60 hover:text-emerald-400 transition-colors uppercase tracking-widest min-h-[44px]"
                        aria-label="Scroll back to top"
                    >
                        Back to Top
                        <span className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-400/30 transition-colors">
                            ↑
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}