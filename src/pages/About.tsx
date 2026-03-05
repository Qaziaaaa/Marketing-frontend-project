import { motion } from 'framer-motion';
import { Target, Users, Landmark } from 'lucide-react';

const TeamMember = ({ name, role, delay }: { name: string; role: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ y: -10 }}
        className="card-premium card-premium-hover p-6 flex flex-col items-center text-center"
    >
        <div className="w-24 h-24 bg-lime rounded-full mb-4 border-2 border-black overflow-hidden">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
    </motion.div>
);

export default function About() {
    return (
        <div className="section-padding pt-32">
            <header className="mb-20">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl lg:text-6xl font-bold mb-8 flex flex-col items-center gap-4 text-center"
                >
                    <span className="bg-lime px-6 py-2 rounded-xl border-2 border-black rotate-1">Our Mission</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center"
                >
                    We are a team of passionate digital marketers dedicated to helping businesses
                    scale their online presence through data-driven strategies and creative excellence.
                </motion.p>
            </header>

            <div className="grid md:grid-cols-3 gap-12 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card-premium bg-black text-white"
                >
                    <Target className="w-12 h-12 text-lime mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Vision</h2>
                    <p className="text-gray-400">To become the world's most innovative partner for business growth in the digital age.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card-premium bg-lime text-black"
                >
                    <Users className="w-12 h-12 text-black mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Community</h2>
                    <p className="text-black/70">Building a global community of thriving businesses and successful entrepreneurs.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="card-premium"
                >
                    <Landmark className="w-12 h-12 text-black mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Integrity</h2>
                    <p className="text-gray-600">Operating with complete transparency and unwavering commitment to client success.</p>
                </motion.div>
            </div>

            <section className="text-center">
                <h2 className="text-3xl lg:text-5xl font-bold mb-12 inline-flex">
                    <span className="bg-lime px-6 py-2 rounded-xl border-2 border-black rotate-1">Meet the Team</span>
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <TeamMember name="Alex Riviera" role="Founder & CEO" delay={0.1} />
                    <TeamMember name="Sarah Chen" role="Head of Strategy" delay={0.2} />
                    <TeamMember name="Michael Ross" role="Creative Director" delay={0.3} />
                    <TeamMember name="Emma Stone" role="Technical Lead" delay={0.4} />
                </div>
            </section>
        </div>
    );
}
