'use client'

import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function ShowcaseGrid() {
    const projects = [
        { id: "01", city: "LONDON", title: "The Verdant Spire", src: "/verdant-spire.webp" },
        { id: "02", city: "KYOTO", title: "Komorebi Pavilion", src: "/komorebi-pavilion.webp" },
        { id: "03", city: "REYKJAVIK", title: "Basalt Gardens", src: "/basalt-gardens.webp" },
        { id: "04", city: "SINGAPORE", title: "Solar Canopy", src: "/solar-canopy.webp" },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <section id="spaces" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase italic font-serif">
                        Iconic <span className="text-emerald-400 not-italic font-sans">Projects.</span>
                    </h2>
                    <p className="text-white/40 max-w-xs uppercase text-xs tracking-widest font-mono">
                        [ Selected Works 2022—2025 ]
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 group/grid"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="relative cursor-pointer transition-all duration-500 ease-out group-hover/grid:opacity-30 group-hover/grid:grayscale group-hover/grid:brightness-75 hover:!opacity-100 hover:!grayscale-0 hover:!brightness-110 hover:scale-[1.01] z-0 hover:z-10"
                            role="article"
                            aria-labelledby={`project-title-${project.id}`}
                        >
                            {/* FIX: Changed aspect-16/10 to aspect-[16/10] */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 shadow-2xl">
                                <Image
                                    src={project.src}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-emerald-400 uppercase">
                                        {project.id} / {project.city}
                                    </p>
                                    <p id={`project-title-${project.id}`} className="text-2xl font-bold leading-none tracking-tight text-white uppercase">
                                        {project.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}