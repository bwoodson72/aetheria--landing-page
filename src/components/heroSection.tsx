'use client'

import Image from "next/image";
import { motion, Variants } from "motion/react";
import React from "react";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        }
    };

    return (
        <section id="hero-section" className="relative h-screen flex flex-col justify-center px-6 overflow-hidden bg-black">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                <motion.div
                    animate={{
                        x: [0, 20, 0, -20, 0],
                        y: [-20, 0, 20, 0, -20],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/hero-bg.webp"
                        alt=""
                        fill
                        priority
                        quality={100}
                        sizes='100vw'
                        className="object-cover opacity-90 scale-125 contrast-125 saturate-110 brightness-90"
                    />
                </motion.div>

                {/* VIGNETTE OVERLAYS:
                   Using a radial-style linear gradient to darken the edges and
                   center the light on the text, removing the "gray" wash.
                */}
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-[#0a0a0a]" />
                <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
            </div>

            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto w-full relative z-10"
            >
                <motion.span
                    variants={itemVariants}
                    className="inline-block px-3 py-1 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono rounded-full mb-6 backdrop-blur-md"
                >
                    EST. 2025 • ARCHITECTURAL INNOVATION
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-[120px] leading-[0.85] font-bold tracking-tighter mb-8 uppercase"
                >
                    BREATHING <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/40">STRUCTURES.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-xl text-lg md:text-xl text-white/90 leading-relaxed mb-10 drop-shadow-xl"
                >
                    Aetheria designs living environments that bridge the gap between organic nature and industrial precision. We build the lungs of the modern city.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                    <a
                        href="#spaces"
                        className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300 text-center shadow-lg shadow-emerald-500/20"
                    >
                        View Portfolio
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-lg hover:bg-white/10 hover:border-emerald-500/30 transition-all text-center"
                    >
                        Start a Project
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
                aria-hidden="true"
            >
                <div className="w-px h-12 bg-linear-to-b from-emerald-500 to-transparent" />
            </motion.div>
        </section>
    );
}