import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "", id = "" }) => (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    </section>
);

const ImageCard = ({ src, alt, className = "" }) => (
    <div className={`overflow-hidden rounded-sm border border-white/5 bg-[#0A0A0C] aspect-[4/5] md:aspect-square flex items-center justify-center relative group ${className}`}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-0 group-[.loaded]:opacity-80"
            onLoad={(e) => e.target.closest('.group').classList.add('loaded')}
            onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="text-white/5 tracking-[0.2em] uppercase text-[10px] font-medium">Image Placeholder</span>';
            }}
        />
        <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </div>
);

const About = () => {
    return (
        <div className="bg-primary text-white/60 pt-20">
            {/* 1 HERO SECTION */}
            <Section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
                        Where Precision <br />Meets Passion.
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        KURO RAMEN is more than a culinary destination. It is a commitment to the art of the bowl—where every ingredient is an intentional choice, and every technique is refined through years of discipline.
                    </p>
                </motion.div>
            </Section>

            {/* 2 ABOUT STORY SECTION */}
            <Section className="bg-secondary/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-8">Our Story.</h2>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                The foundations of KURO RAMEN were built on a simple question: How far can a single bowl of ramen be refined? What began as a personal obsession with the chemistry of umami evolved into a dedicated culinary laboratory.
                            </p>
                            <p>
                                We believe that craft is a dialogue between patience and purpose. We don't just cook; we engineer experiences that honor the history of the ramen while embracing the precision of modern technique. Every bowl served is a testament to that journey.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <ImageCard src="/images/kuro_story_bowl.jpg" alt="Premium Ramen Bowl" />
                    </motion.div>
                </div>
            </Section>

            {/* 3 CRAFT SECTION */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="order-2 md:order-1"
                    >
                        <ImageCard src="/images/kuro_craft_prep.jpg" alt="Ingredient Preparation" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl mb-8">Built with Discipline.</h2>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Excellence is found in the details that most overlook. Our broth is the heart of the experience—simmered for forty-eight hours to achieve a depth that cannot be rushed.
                            </p>
                            <p>
                                From the mineral content of our water to the specific hydration of our hand-pulled noodles, every variable is controlled. We source locally where quality permits, and globally where tradition demands, ensuring balance in every bowl.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 4 WEBSITE / BRAND SECTION */}
            <Section className="bg-secondary py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl mb-8">More Than a Restaurant.</h2>
                    <p className="text-lg leading-relaxed opacity-80 italic">
                        This digital space is an extension of our kitchen. The same discipline used to braise our chashu is applied to the design of this interface—minimal, precise, and devoid of clutter. Experience the culinary precision of KURO RAMEN, now echoed in your digital journey.
                    </p>
                </motion.div>
            </Section>

            {/* CONTACT SECTION */}
            <Section id="contact" className="bg-secondary border-t border-white/5 pb-32">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl mb-6">Contact Us.</h2>
                    <p className="mb-12 text-white/40 text-lg">
                        Questions, feedback, or private dining inquiries — we’d love to hear from you.
                    </p>

                    <form className="text-left space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-primary border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-accent-red/50 transition-colors text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-primary border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-accent-red/50 transition-colors text-white"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-primary border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-accent-red/50 transition-colors text-white"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Message</label>
                            <textarea
                                rows={5}
                                className="w-full bg-primary border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-accent-red/50 transition-colors text-white resize-none"
                                placeholder="Tell us more..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="button"
                                className="w-full bg-accent-red text-white py-4 rounded-sm font-medium tracking-widest uppercase text-sm hover:brightness-90 transition-all active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                            <p className="mt-4 text-[10px] text-center text-white/20 uppercase tracking-[0.2em]">
                                We usually respond within 24 hours.
                            </p>
                        </div>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default About;
