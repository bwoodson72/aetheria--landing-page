'use client'

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-500/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter uppercase">Aetheria</h3>
                        <p className="text-white/40 max-w-xs text-sm leading-relaxed">
                            Redefining urban density through regenerative biophilic architecture.
                            Building the lungs of the future city.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-6">
                        <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">Navigation</p>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#vision" className="text-white/60 hover:text-white transition-colors">Vision</a></li>
                            <li><a href="#studio" className="text-white/60 hover:text-white transition-colors">Studio</a></li>
                            <li><a href="#spaces" className="text-white/60 hover:text-white transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="space-y-6">
                        <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">Connect</p>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Behance</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        © 2025 Aetheria Collective. All Rights Reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-3 text-[10px] font-mono text-white/40 hover:text-emerald-400 transition-colors uppercase tracking-widest"
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