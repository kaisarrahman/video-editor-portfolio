"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Instagram, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/sheikhkaisarrahman@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
                setTimeout(() => setIsSuccess(false), 5000); // Reset success state after 5s
            } else {
                throw new Error("Failed to submit");
            }
        } catch {
            alert("Something went wrong. Please try emailing directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10 w-full">
            {/* Decorative background blur */}
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/3 mix-blend-screen" />

            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="text-5xl md:text-[5rem] font-instrument text-white tracking-[-0.02em] leading-[0.9]"
                    >
                        Project Inquiry.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-white/40 text-lg mt-6 max-w-xl font-outfit font-light tracking-wide leading-relaxed mx-auto md:mx-0"
                    >
                        I&apos;m currently accepting new commercial projects and top-tier creator partnerships. Fill out the intake form to discuss your vision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">

                    {/* Left Column - Intake Form */}
                    <div className="lg:col-span-7">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(255,255,255,0.01)] backdrop-blur-3xl flex flex-col gap-8 cursor-none group/form relative overflow-hidden"
                        >
                            {/* Inner subtle glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormInput label="Name" name="name" type="text" placeholder="John Doe" />
                                <FormInput label="Email" name="email" type="email" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/50 uppercase tracking-widest font-outfit">Service Needed</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <ServicePill label="Long Form" value="Long Form" defaultChecked />
                                    <ServicePill label="Shorts / Reels" value="Shorts or Reels" />
                                    <ServicePill label="Full Channel" value="Full Channel Management" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/50 uppercase tracking-widest font-outfit">Project Details</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Tell me about your channel, current bottlenecks, and what you're looking to achieve..."
                                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none font-outfit cursor-none"
                                    required
                                />
                            </div>

                            {/* Anti-spam honeypot */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={`mt-4 w-full py-5 rounded-2xl font-bold font-outfit transition-all duration-500 flex items-center justify-center gap-3 cursor-none ${isSuccess
                                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                    : "bg-white text-black hover:scale-[1.02] disabled:opacity-70"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                ) : isSuccess ? (
                                    <>Inquiry Sent Successfully <CheckCircle2 className="w-5 h-5" /></>
                                ) : (
                                    <>Submit Inquiry <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </motion.form>
                    </div>

                    {/* Right Column - Direct Contact & Socials */}
                    <div className="lg:col-span-5 flex flex-col justify-start space-y-16 pt-4">
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-white/30 uppercase tracking-[0.2em] font-outfit">Direct Contact</h3>
                            <a href="mailto:sheikhkaisarrahman@gmail.com" className="inline-flex items-center gap-4 text-xl md:text-2xl font-instrument text-white hover:text-white/70 transition-colors cursor-none group w-fit">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="break-all">sheikhkaisarrahman<br className="hidden md:block" />@gmail.com</span>
                            </a>
                        </div>

                        <div className="space-y-6 flex-grow">
                            <h3 className="text-sm font-semibold text-white/30 uppercase tracking-[0.2em] font-outfit">Connect</h3>
                            <div className="flex flex-col space-y-2">
                                <SocialLink href="https://twitter.com/thekaisarrahman" icon={<Twitter className="w-6 h-6" />} label="Twitter / X" delay={0.2} />
                                <SocialLink href="https://instagram.com/thekaisarrahman" icon={<Instagram className="w-6 h-6" />} label="Instagram" delay={0.3} />
                                <SocialLink href="https://linkedin.com/in/thekaisarrahman" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" delay={0.4} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FormInput({ label, type, name, placeholder }: { label: string, type: string, name: string, placeholder: string }) {
    return (
        <div className="space-y-3 w-full">
            <label className="text-sm font-semibold text-white/50 uppercase tracking-widest font-outfit">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all font-outfit cursor-none"
                required
            />
        </div>
    );
}

function ServicePill({ label, value, defaultChecked = false }: { label: string, value: string, defaultChecked?: boolean }) {
    return (
        <label className="relative cursor-none group">
            <input type="radio" name="service" value={value} defaultChecked={defaultChecked} className="sr-only peer" />
            <div className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-white/50 text-center font-outfit text-sm font-medium peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all duration-300 group-hover:bg-white/[0.08]">
                {label}
            </div>
        </label>
    );
}

function SocialLink({ href, icon, label, delay }: { href: string; icon: React.ReactNode; label: string; delay: number }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
            className="group flex items-center justify-between text-white/30 hover:text-white transition-colors py-5 border-b border-white/[0.03] last:border-0 cursor-none"
        >
            <div className="flex items-center gap-5">
                <div className="text-white/20 group-hover:text-white transition-colors">
                    {icon}
                </div>
                <span className="font-instrument text-[1.75rem] group-hover:pl-4 transition-all duration-500 ease-[0.25,1,0.5,1]">{label}</span>
            </div>
            <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-6 scale-50 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.25,1,0.5,1] text-white" />
        </motion.a>
    );
}
