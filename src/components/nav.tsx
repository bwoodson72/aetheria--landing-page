

export default function Nav() {

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter uppercase"><a href='#hero-section'>Aetheria</a>  </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
                    <a href="#vision" className="hover:text-white transition-colors">Vision</a>
                    <a href="#spaces" className="hover:text-white transition-colors">Spaces</a>
                    <a href="#studio" className="hover:text-white transition-colors">Studio</a>
                </div>
                <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-colors">
                    <a href="#contact">Contact</a>
                </button>
            </div>
        </nav>
    )
}