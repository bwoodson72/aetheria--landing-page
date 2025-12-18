

export default function CtaFooterSection() {
    return (
        <section className="py-32 px-6 text-center relative border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
                READY TO <span className="italic font-serif font-light text-emerald-400">EVOLVE?</span>
            </h2>
            <button className="px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:scale-105 transition-transform">
                Start a Project
            </button>

            <footer className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
                <p>© 2025 Aetheria Studio. All rights reserved.</p>
                <div className="flex gap-8 uppercase tracking-widest text-[10px]">
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </footer>
        </section>
    )

}