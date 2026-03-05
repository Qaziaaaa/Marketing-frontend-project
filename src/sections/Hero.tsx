import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
              Navigating the <span className="bg-lime px-2 rounded-lg">digital landscape</span> for success
            </h1>
            <p className="text-base lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="btn-premium-primary h-16 text-lg group">
                Book a consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-auto drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Megaphone */}
                <motion.ellipse
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  cx="300" cy="250" rx="180" ry="80" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="5 5" />
                <ellipse cx="300" cy="250" rx="140" ry="60" fill="none" stroke="#000" strokeWidth="2" />
                <ellipse cx="300" cy="250" rx="100" ry="40" fill="none" stroke="#000" strokeWidth="2" />

                {/* Megaphone body */}
                <path
                  d="M180 200 L380 160 L380 340 L180 300 Z"
                  fill="#B9FF66"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Megaphone cone */}
                <path
                  d="M380 160 L520 100 L520 400 L380 340 Z"
                  fill="white"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Handle */}
                <rect x="200" y="300" width="20" height="100" rx="10" fill="#000" />

                {/* Social Media Icons */}
                <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <circle cx="520" cy="120" r="35" fill="#000" />
                  <path
                    d="M520 135 C520 135 505 122 505 112 C505 105 510 100 517 100 C520 100 520 103 520 103 C520 103 520 100 523 100 C530 100 535 105 535 112 C535 122 520 135 520 135 Z"
                    fill="white"
                  />
                </motion.g>

                <motion.g animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                  <circle cx="560" cy="180" r="30" fill="#B9FF66" stroke="#000" strokeWidth="2" />
                  <circle cx="550" cy="175" r="4" fill="#000" />
                  <circle cx="570" cy="175" r="4" fill="#000" />
                  <circle cx="560" cy="190" r="4" fill="#000" />
                  <line x1="553" y1="177" x2="567" y2="177" stroke="#000" strokeWidth="2" />
                  <line x1="553" y1="177" x2="560" y2="188" stroke="#000" strokeWidth="2" />
                  <line x1="560" y1="188" x2="567" y2="177" stroke="#000" strokeWidth="2" />
                </motion.g>

                <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <circle cx="540" cy="250" r="35" fill="#000" />
                  <polygon points="535,240 535,260 550,250" fill="white" />
                </motion.g>

                <motion.g animate={{ x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <circle cx="560" cy="320" r="35" fill="#B9FF66" stroke="#000" strokeWidth="2" />
                  <path
                    d="M560 300 C552 300 545 307 545 315 C545 325 560 340 560 340 C560 340 575 325 575 315 C575 307 568 300 560 300 Z"
                    fill="#000"
                  />
                  <circle cx="560" cy="315" r="8" fill="#B9FF66" />
                </motion.g>
              </svg>
            </div>
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
