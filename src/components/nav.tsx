'use client'

import React, { useState, useEffect } from "react";
import SmoothLink from "@/components/smoothLink";
import { motion, AnimatePresence, Variants } from "motion/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // FIX 1: Explicitly type 'Variants' and use 'as const' on ease arrays
    const menuVars: Variants = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0] as const // <--- 'as const' fixes the error
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    const containerVars: Variants = {
        initial: {
            transition: { staggerChildren: 0.09, staggerDirection: -1 }
        },
        open: {
            transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 }
        }
    };

    const linkVars: Variants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1] as const
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1] as const
            }
        }
    };

    const navLinks = [
        { title: "Vision", href: "#vision" },
        { title: "Spaces", href: "#spaces" },
        { title: "Studio", href: "#studio" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <nav aria-label="Main Navigation" className="fixed top-0 w-full z-50">

            <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/5 -z-10" />

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
                <div className="text-xl font-bold tracking-tighter uppercase relative z-50">
                    <SmoothLink href='#hero-section' aria-label="Aetheria Home">
                        Aetheria
                    </SmoothLink>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
                    <SmoothLink href="#vision" className="hover:text-white transition-colors">Vision</SmoothLink>
                    <SmoothLink href="#spaces" className="hover:text-white transition-colors">Spaces</SmoothLink>
                    <SmoothLink href="#studio" className="hover:text-white transition-colors">Studio</SmoothLink>
                </div>

                <div className="hidden md:block">
                    <button aria-label="Contact Us" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-colors">
                        <SmoothLink href="#contact">Contact</SmoothLink>
                    </button>
                </div>

                <button
                    className="md:hidden text-white z-50 p-2 relative"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 w-full h-dvh bg-zinc-950/70 backdrop-blur-2xl backdrop-saturate-150 origin-top z-40 flex flex-col justify-center px-6 md:hidden"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <div key={link.title} className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <div onClick={() => setIsOpen(false)}>
                                            <SmoothLink href={link.href}>
                                                <motion.span
                                                    className="block text-4xl font-serif font-medium text-white hover:text-emerald-400 transition-colors"
                                                    whileTap={{ scale: 0.95, color: "#34d399" }}
                                                >
                                                    {link.title}
                                                </motion.span>
                                            </SmoothLink>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            className="absolute bottom-10 left-6 right-6 pt-6 border-t border-white/10 flex justify-between text-xs font-mono text-white/40 uppercase tracking-widest"
                        >
                            <span>Est. 2024</span>
                            <span>Systems Online</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}