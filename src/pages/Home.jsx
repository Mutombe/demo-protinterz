import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Phone,
  WhatsappLogo,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  CheckCircle,
  Image,
  Car,
  Flag,
  Notebook,
  TShirt,
  Lightning,
  Eye,
  Rocket,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER — counts up when in view
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   1. HERO — Full Viewport, Black & Red Cinematic
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80',
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80',
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Background carousel with crossfade + parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt="Protinterz printing studio"
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 z-[1]" />
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-500 ${
              i === currentSlide ? 'h-8 bg-red-600' : 'h-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Red line accent */}
      <div className="absolute top-[20%] left-0 w-20 sm:w-32 h-[2px] bg-red-600 z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[3px] bg-red-600 mb-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6 sm:mb-8"
        >
          {hero.badge}
        </motion.p>

        {/* Giant stacked text */}
        <div className="overflow-hidden">
          {['PRINT', 'THAT', 'SPEAKS.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.88] tracking-tight ${
                  word === 'SPEAKS.' ? 'text-red-600' : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-red-600 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 border border-white/30 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* Vertical side text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <span className="text-white/15 text-[10px] uppercase tracking-[0.4em] font-heading" style={{ writingMode: 'vertical-rl' }}>
          Protinterz &mdash; Harare, Zimbabwe
        </span>
      </div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE TICKER
   ================================================================ */
function MarqueeTicker() {
  const items = ['LARGE FORMAT', 'VEHICLE WRAPS', 'SIGNAGE', 'BUSINESS CARDS', 'BANNERS', 'BRANDED MERCH', 'EXHIBITION STANDS', 'FLEET BRANDING'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-black border-y border-white/5 py-4 sm:py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="text-red-600 font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider">
              {item}
            </span>
            <span className="text-red-600/40 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT — Company Story
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-black py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-red-600 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              INK IN<br />
              <span className="text-red-600">OUR BLOOD.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Protinterz started in 2016 with one large format printer and a garage full of ambition.
              We saw an industry full of slow turnaround, poor quality, and imported prices.
              We decided to build the print shop we wished existed.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-lg">
              We invested in top-tier equipment — Roland, Mimaki, and HP Latex printers. We sourced 3M and Avery
              vinyl directly. Today, we run one of Harare's largest in-house print operations.
            </p>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-red-600 font-heading text-3xl sm:text-4xl font-bold">2016</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Founded</div>
              </div>
              <div>
                <div className="text-red-600 font-heading text-3xl sm:text-4xl font-bold">5K+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="text-red-600 font-heading text-3xl sm:text-4xl font-bold">25+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Specialists</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                  alt="Protinterz printing facility"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-black shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80"
                  alt="Vehicle wrapping in progress"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Red stat badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-red-600 text-white p-4 sm:p-6 shadow-2xl">
                <div className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">9+</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-white/80">
                    Years in<br />Print
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES GRID — 6 cards with image backgrounds
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const serviceImages = [
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
  ];

  return (
    <section ref={ref} className="bg-neutral-950 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-red-600 mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-heading font-bold text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              WHAT WE <span className="text-red-600">PRINT</span>
            </h2>
            <Link
              to="/services"
              className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              All Services
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesPreview.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <Link
                to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                className="group relative block overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
              >
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Red number */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-red-600/30 font-heading text-5xl sm:text-6xl font-bold leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/60 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-red-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-wider font-heading font-semibold">Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. FEATURED WORK — Horizontal Scroll Gallery
   ================================================================ */
function HorizontalGallery() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80', caption: 'Fleet Branding — 30 Vehicles' },
    { src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80', caption: 'Vehicle Wrapping' },
    { src: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80', caption: 'Shopfront Signage' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', caption: 'Exhibition Stand' },
    { src: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80', caption: 'Branded Merchandise' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', caption: 'Billboard Campaign' },
    { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80', caption: 'Corporate Rebrand' },
    { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', caption: 'PVC Banners' },
  ];

  return (
    <section ref={containerRef} className="bg-black py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="w-10 h-[3px] bg-red-600 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              OUR <span className="text-red-600">WORK</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            View All
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-5 sm:px-8 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-red-500 font-heading text-xs uppercase tracking-wider font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-white font-heading text-base uppercase tracking-wide font-bold mt-1">
                  {img.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   6. WHY CHOOSE US — Image + Points
   ================================================================ */
function WhyChooseUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="bg-neutral-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt={whyChooseUs.imageAlt}
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-red-600 text-white p-5 sm:p-7 shadow-2xl">
              <div className="text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold leading-none">{whyChooseUs.experienceYears}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-white/80">{whyChooseUs.experienceLabel}</div>
              </div>
            </div>
            {/* Decorative red line */}
            <div className="absolute top-6 -left-3 sm:-left-6 w-12 h-[2px] bg-red-600" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-10 h-[3px] bg-red-600 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              WHY <span className="text-red-600">PROTINTERZ?</span>
            </h2>

            <div className="space-y-6">
              {whyChooseUs.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/10 border border-red-600/20 flex items-center justify-center mt-0.5">
                    <CheckCircle size={20} weight="fill" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading text-sm sm:text-base font-bold uppercase tracking-wide mb-1">
                      {point.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. STATS BAND — Large Animated Numbers
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots text-white/[0.02]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {siteData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                {stat.number.includes('+') && <span className="text-red-600">+</span>}
              </div>
              <div className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
    </section>
  );
}


/* ================================================================
   8. TESTIMONIALS — Dark Centered Quote Carousel
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
  ];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-neutral-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quotes size={40} weight="fill" className="text-red-600/20 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                {/* Avatar */}
                <img
                  src={avatars[active % avatars.length]}
                  alt={t.name}
                  className="w-14 h-14 object-cover object-center border-2 border-red-600/30 mb-2"
                  loading="lazy"
                />
                <div className="w-8 h-[2px] bg-red-600 mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-red-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[3px] transition-all duration-300 ${
                    i === active ? 'w-8 bg-red-600' : 'w-3 bg-white/15 hover:bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   9. PROCESS — How We Work
   ================================================================ */
function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { num: '01', title: 'Brief & Design', desc: 'Share your vision or artwork. Our design team refines it for print perfection.', icon: Eye },
    { num: '02', title: 'Print & Produce', desc: 'In-house production on premium equipment. Quality checked at every stage.', icon: Lightning },
    { num: '03', title: 'Finish & Install', desc: 'Lamination, mounting, wrapping, installation. We handle everything to completion.', icon: Rocket },
  ];

  return (
    <section ref={ref} className="bg-black py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-10 h-[3px] bg-red-600 mx-auto mb-6" />
          <h2
            className="font-heading font-bold text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
          >
            HOW WE <span className="text-red-600">WORK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative bg-neutral-950 border border-white/5 p-8 sm:p-10 group hover:border-red-600/30 transition-colors duration-500"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-4 text-red-600/10 font-heading text-6xl sm:text-7xl font-bold leading-none">
                  {step.num}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-red-500" />
                  </div>
                  <h3 className="font-heading text-white text-lg font-bold uppercase tracking-wide mb-3">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   10. CTA — Full-Bleed Photo with Giant Text
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
          alt="Protinterz printing"
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
            READY TO<br />
            <span className="text-red-600">PRINT?</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {homeCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60"
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME — Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <HorizontalGallery />
      <WhyChooseUsSection />
      <StatsBand />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
