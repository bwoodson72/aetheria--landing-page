import SmoothLink from "@/components/smoothLink";

export default function Nav() {

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter uppercase"><SmoothLink href='#hero-section'>Aetheria</SmoothLink>  </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
                    <SmoothLink href="#vision" className="hover:text-white transition-colors">Vision</SmoothLink>
                    <SmoothLink href="#spaces" className="hover:text-white transition-colors">Spaces</SmoothLink>
                    <SmoothLink href="#studio" className="hover:text-white transition-colors">Studio</SmoothLink>
                </div>
                <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-colors">
                    <SmoothLink href="#contact">Contact</SmoothLink>
                </button>
            </div>
        </nav>
    )
}