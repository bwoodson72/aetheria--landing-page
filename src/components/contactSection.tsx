'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required (min 2 chars)"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Please provide more project details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset, // Required to clear fields
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Transmission Successful:", data);

        // 1. Reset the form immediately after success
        reset();

        // 2. Then show the success UI
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="py-32 px-6 bg-[#050505] min-h-[700px] flex items-center justify-center text-center">
                <div className="max-w-md animate-in fade-in zoom-in duration-1000">
                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">Transmission Sent.</h2>
                    <p className="text-white/40 font-light leading-relaxed mb-10 text-lg">
                        Our collective has received your inquiry. An architect will reach out shortly to discuss your footprint.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-emerald-400 font-mono text-xs uppercase tracking-[0.4em] hover:text-white transition-colors py-2 border-b border-emerald-400/20 hover:border-white"
                    >
                        Send another message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-32 px-6 bg-[#050505] scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase leading-[0.85]">
                            Begin the <br />
                            <span className="text-emerald-400">Evolution.</span>
                        </h2>
                        <p className="text-white/40 text-xl max-w-sm font-light leading-relaxed">
                            We are currently accepting commissions for 2026. Let&#39;s discuss how we can integrate nature into your next project.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="name" className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Name</label>
                                <input
                                    {...register("name")}
                                    id="name"
                                    autoComplete="name"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    className={`bg-transparent border-b py-3 outline-none transition-all duration-300 ${
                                        errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-emerald-500'
                                    }`}
                                />
                                {errors.name && (
                                    <span id="name-error" className="text-[10px] text-red-500/80 font-mono uppercase tracking-tight animate-in slide-in-from-top-1">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="email" className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Email</label>
                                <input
                                    {...register("email")}
                                    id="email"
                                    autoComplete="email"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={`bg-transparent border-b py-3 outline-none transition-all duration-300 ${
                                        errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-emerald-500'
                                    }`}
                                />
                                {errors.email && (
                                    <span id="email-error" className="text-[10px] text-red-500/80 font-mono uppercase tracking-tight animate-in slide-in-from-top-1">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label htmlFor="message" className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Project Details</label>
                            <textarea
                                {...register("message")}
                                id="message"
                                rows={4}
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className={`bg-transparent border-b py-3 outline-none transition-all duration-300 resize-none ${
                                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-emerald-500'
                                }`}
                            />
                            {errors.message && (
                                <span id="message-error" className="text-[10px] text-red-500/80 font-mono uppercase tracking-tight animate-in slide-in-from-top-1">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="group relative w-full py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.4em] hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                                    Encrypting...
                                </span>
                            ) : (
                                "Send Inquiry"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}