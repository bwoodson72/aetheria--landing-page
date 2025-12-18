'use client'

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "motion/react";

export default function VisionSection() {
    const sectionRef = useRef(null);

    // Track scroll for the parallax effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Subtly shift the image and a decorative foreground element at different speeds
    const yImage = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <section
            id="vision"
            ref={sectionRef}
            className="relative py-32 px-6 bg-[#050505] overflow-hidden border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: The Visual Component (5 columns) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                            <motion.div style={{ y: yImage, scale: 1.2 }} className="absolute inset-0">
                                <Image
                                    src="/vision-hero.png" // Deep forest/skyscraper blend
                                    alt="Sustainable Architecture Vision"
                                    fill
                                    className="object-cover brightness-70 contrast-125"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
                        </div>

                        {/* Floating "Data" Badge - Parallax accent */}
                        <motion.div
                            style={{ y: yText }}
                            className="absolute -right-8 bottom-12 p-6 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-xl hidden md:block"
                        >
                            <p className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase mb-1">Status</p>
                            <p className="text-white font-bold text-xl uppercase tracking-tighter italic">Regenerative</p>
                        </motion.div>
                    </div>

                    {/* Right: The Content Pillars (7 columns) */}
                    <motion.div
                        className="lg:col-span-7 space-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <p className="text-emerald-400 font-mono text-xs tracking-[0.3em] uppercase italic">// Vision 2025</p>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                                Engineering <br />
                                <span className="text-emerald-400">Symbiosis.</span>
                            </h2>
                        </motion.div>

                        {/* Your original 3 pillars, now with better spacing and motion */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <motion.div variants={itemVariants} className="space-y-3">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Carbon Negative</h3>
                                <p className="text-white/40 leading-relaxed text-sm">
                                    Every structure is engineered to absorb more CO2 than it produces,
                                    turning buildings into active carbon sinks.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-3">
                                <h3 className="text-xl font-bold uppercase tracking-tight">98% Biophilic</h3>
                                <p className="text-white/40 leading-relaxed text-sm">
                                    We move beyond decoration, integrating native flora into the
                                    very structural core of urban developments.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="md:col-span-2 space-y-3 pt-6 border-t border-white/5">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Global Reach</h3>
                                <p className="text-white/40 leading-relaxed text-sm max-w-md">
                                    From Tokyo to New York, our designs are transforming the
                                    skylines of the world&#39;s major capitals through organic precision.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}