import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faDownload, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import useMouseParallax from "../hooks/useMouseParallax";
import MagneticButton from "./MagneticButton";

const roles = [
  "Junior Full Stack Developer",
  "Flutter Developer",
  "Laravel Developer",
  "AI Research Enthusiast",
];

const floatChips = [
  { label: "Flutter", x: "-18%", y: "10%", z: 70, delay: 0.9 },
  { label: "Laravel", x: "78%", y: "16%", z: 90, delay: 1.05 },
  { label: "AI / LLMs", x: "74%", y: "74%", z: 55, delay: 1.2 },
  { label: "POS Systems", x: "-14%", y: "70%", z: 75, delay: 1.35 },
];

const metrics = [
  { value: "2+", label: "Years Experience" },
  { value: "3", label: "Platforms" },
  { value: "10+", label: "Business modules" },
];

const wordReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }, 
};

const wordChild = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [spot, setSpot] = useState({ x: 50, y: 40 });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const soundEnabledRef = useRef(false);
  const { offset, onMove, onLeave } = useMouseParallax(1);

  const springCfg = { stiffness: 120, damping: 18, mass: 0.35 };
  const rx = useSpring(0, springCfg);
  const ry = useSpring(0, springCfg);
  const tx = useSpring(0, springCfg);
  const ty = useSpring(0, springCfg);
  const textX = useSpring(0, springCfg);
  const textY = useSpring(0, springCfg);

  useEffect(() => {
    rx.set(offset.y * -9);
    ry.set(offset.x * 11);
    tx.set(offset.x * 14);
    ty.set(offset.y * 11);
    textX.set(offset.x * -9);
    textY.set(offset.y * -7);
  }, [offset, rx, ry, tx, ty, textX, textY]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const MAX_WITH_SOUND = 2;
    let playCount = 0;
    let mutedByCount = false;

    video.loop = false;
    video.muted = false;
    video.volume = 1;

    const tryPlay = () => {
      const attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    const onEnded = () => {
      playCount += 1;
      if (playCount < MAX_WITH_SOUND && !mutedByCount) {
        video.currentTime = 0;
        tryPlay();
      } else {
        // After two plays, switch to silent looping
        mutedByCount = true;
        video.muted = true;
        video.loop = true;
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const unmuteOnInteraction = () => {
      soundEnabledRef.current = true;
      if (!mutedByCount) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
      }
      removeListeners();
    };

    const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"];
    const removeListeners = () => {
      events.forEach((evt) =>
        window.removeEventListener(evt, unmuteOnInteraction)
      );
    };

    video.addEventListener("ended", onEnded);
    tryPlay();
    events.forEach((evt) =>
      window.addEventListener(evt, unmuteOnInteraction, { once: true, passive: true })
    );

    return () => {
      video.removeEventListener("ended", onEnded);
      removeListeners();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting && entry.intersectionRatio > 0.35;
        if (inView) {
          video.play().catch(() => {});
        } else {
          video.muted = true;
        }
      },
      { threshold: [0, 0.35, 0.6] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => setIsMuted(video.muted);
    video.addEventListener("volumechange", sync);
    sync();
    return () => video.removeEventListener("volumechange", sync);
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      soundEnabledRef.current = true;
      video.play().catch(() => {});
    }
    setIsMuted(nextMuted);
  };

  const handleMove = (e) => {
    onMove(e);
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen hero-atmosphere grain overflow-hidden flex items-center"
      onMouseMove={handleMove}
      onMouseLeave={onLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${spot.x}% ${spot.y}%, rgba(61,184,176,0.16), transparent 45%)`,
        }}
      />

      <div className="orb w-72 h-72 bg-tide-500/25 top-[18%] right-[8%]" />
      <div className="orb w-56 h-56 bg-copper-500/20 bottom-[18%] left-[6%]" />
      <div className="orb w-40 h-40 bg-tide-400/15 top-[55%] right-[35%]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 pt-28 pb-24 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div style={{ x: textX, y: textY }} className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-white/70 to-transparent" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              variants={wordReveal}
              initial="hidden"
              animate="show"
              className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mt-5"
              aria-label="Vallatharasu Katturaja"
            >
              <span className="block overflow-hidden">
                <motion.span className="inline-block" variants={wordChild}>
                  Vallatharasu
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block text-tide-400"
                  variants={wordChild}
                >
                  Katturaja
                </motion.span>
              </span>
            </motion.h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 bg-copper-400 shrink-0" />
              <div className="h-8 sm:h-9 overflow-hidden relative flex-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roles[roleIndex]}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg sm:text-xl text-copper-400 font-semibold absolute inset-x-0"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-5 text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
            >
              Building business software people rely on every day — Flutter apps, Laravel APIs,
              POS systems, and AI-assisted workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <MagneticButton
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-tide-500 text-white font-semibold hover:bg-tide-400 transition-colors shadow-lg shadow-tide-500/30"
              >
                View work
                <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
              </MagneticButton>
              <MagneticButton
                href="/Vallatharasu_Katturaja_Resume.pdf"
                download="Vallatharasu_Katturaja_Resume.pdf"
                aria-label="Download Vallatharasu Katturaja resume PDF"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <FontAwesomeIcon icon={faDownload} className="text-sm" />
                Resume
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center gap-5 sm:gap-8"
            >
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-5 sm:gap-8">
                  {i > 0 && <span className="h-8 w-px bg-white/10" />}
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-700 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-white/45 mt-1 tracking-[0.12em] uppercase">
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="perspective-stage relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  rotateX: rx,
                  rotateY: ry,
                  x: tx,
                  y: ty,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full"
              >
                <div
                  className="absolute inset-3 rounded-full bg-gradient-to-br from-tide-500/35 to-copper-500/25 blur-[1px]"
                  style={{ transform: "translateZ(-48px) scale(1.08)" }}
                />

                <motion.div
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-tide-400/45"
                  style={{ transform: "translateZ(24px) rotateX(68deg)" }}
                />
                <motion.div
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-7 sm:-inset-9 rounded-full border border-copper-400/30"
                  style={{ transform: "translateZ(-12px) rotateX(72deg) rotateY(8deg)" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-white/15"
                  style={{ transform: "translateZ(10px)" }}
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-white/25 bg-ink-800 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65),0_0_50px_-8px_rgba(42,157,150,0.4)]"
                  style={{ transform: "translateZ(56px)" }}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover object-top"
                    src="/vallatharasu_intro.mp4"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster="/vallatharasu_katturaja.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-white/10" />
                  <div className="portrait-shine" />
                </motion.div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-18%] w-[72%] h-9 rounded-[100%] bg-black/45 blur-xl"
                  style={{ transform: "translateZ(-36px)" }}
                />

                {floatChips.map((chip) => (
                  <motion.div
                    key={chip.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                    transition={{
                      opacity: { delay: chip.delay, duration: 0.45 },
                      scale: { delay: chip.delay, duration: 0.45 },
                      y: {
                        delay: chip.delay + 0.4,
                        duration: 4 + chip.z / 40,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="floating-chip"
                    style={{
                      left: chip.x,
                      top: chip.y,
                      transform: `translateZ(${chip.z}px)`,
                    }}
                  >
                    {chip.label}
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                type="button"
                onClick={toggleSound}
                aria-label={isMuted ? "Enable audio" : "Mute audio"}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-ink-900/90 text-white backdrop-blur-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] hover:bg-tide-500 hover:border-tide-400 transition-colors"
              >
                {isMuted && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-tide-400/40 animate-ping" />
                )}
                <FontAwesomeIcon
                  icon={isMuted ? faVolumeXmark : faVolumeHigh}
                  className="relative text-base sm:text-lg"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-white/40 hover:text-tide-300 transition-colors"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <span className="scroll-cue" />
      </motion.a>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-mist-50 to-transparent pointer-events-none" />
    </section>
  );
}
