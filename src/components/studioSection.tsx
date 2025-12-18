'use client'

import { motion, Variants } from "motion/react";

export default function StudioSection() {
    // Parent stagger logic
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Upward reveal for text and elements
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <section id="studio" className="py-32 px-6 bg-[#0a0a0a] text-white scroll-mt-20 overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Large Headline */}
                <motion.div variants={itemVariants} className="lg:col-span-8">
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase italic">
                        Breathing <br />
                        <span className="text-emerald-400 not-italic">Structures.</span>
                    </h2>
                </motion.div>

                {/* Body Text & Stats */}
                <div className="lg:col-span-4 flex flex-col justify-end">
                    <motion.p variants={itemVariants} className="text-lg text-white/60 leading-relaxed mb-8">
                        Aetheria is a global architectural collective redefining urban density. We integrate living ecosystems into the structural fabric of our cities.
                    </motion.p>

                    {/* Animated Horizontal Rule */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
                        className="h-px bg-white/10 mb-8"
                    />

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-8 font-mono text-[10px] md:text-xs text-emerald-400 tracking-widest">
                        <div className="flex items-center gap-2 group cursor-default">
                            <span className="opacity-40 group-hover:opacity-100 transition-opacity">/</span>
                            <span>14 GLOBAL AWARDS</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <span className="opacity-40 group-hover:opacity-100 transition-opacity">/</span>
                            <span>EST. 2018</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}