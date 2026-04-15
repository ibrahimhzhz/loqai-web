import { FormEvent, MouseEvent, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroStats = [
  { value: "100+", label: "Companies" },
  { value: "3K+", label: "Employees Managed" },
  { value: "70k+", label: "Resumes Screened" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trialEmailInputRef = useRef<HTMLInputElement | null>(null);
  const [trialEmail, setTrialEmail] = useState("");
  const [isTrialSubmitted, setIsTrialSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleTrialRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = trialEmail.trim();
    if (!trimmedEmail) return;

    setIsTrialSubmitted(true);
    setTrialEmail("");
  };

  const handleTrialCtaClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!trialEmailInputRef.current) return;
    trialEmailInputRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    trialEmailInputRef.current.focus();
  };

  const dashboardY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [26, -28]
  );
  const statsY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-10, 20]
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full bg-purple-200/40 blur-[140px]" />
        <div className="absolute top-1/4 right-[8%] w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[96rem] mx-auto px-6 lg:px-8 pt-40 pb-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start">
          <div className="xl:col-span-5">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] text-gray-900">
              The only HR platform{" "}
              <span className="gradient-text">you'll ever need</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mb-9 leading-relaxed">
              Your complete AI-powered HR engine. Streamline everything from
              screening resumes to managing your entire workforce, all in
              one place.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                type="button"
                onClick={handleTrialCtaClick}
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-purple-200 text-base"
              >
                Request a 21-day free trial
                <ArrowRight size={16} />
              </button>
              <form
                onSubmit={handleTrialRequest}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
              >
                <input
                  ref={trialEmailInputRef}
                  id="trial-request-email"
                  type="email"
                  value={trialEmail}
                  onChange={(event) => {
                    setTrialEmail(event.target.value);
                    if (isTrialSubmitted) setIsTrialSubmitted(false);
                  }}
                  placeholder="james@acmecorp.com"
                  required
                  className="w-full sm:w-64 px-4 py-3.5 rounded-xl border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400 text-base"
                />
                <button
                  type="submit"
                  className="px-5 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors text-base"
                >
                  Send
                </button>
              </form>
              </div>
              {isTrialSubmitted && (
                <p className="text-sm text-green-600">
                  Thanks. We have received your request and will contact you soon.
                </p>
              )}
            </div>
          </div>

          <div className="xl:col-span-7 xl:mt-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-[0.16em]">
                Live LoqHRMS Interface
              </p>
            </div>
            <motion.div
              className="rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/70 overflow-hidden"
              style={{ y: dashboardY }}
            >
              <div className="bg-white">
                <img
                  src="/intro-dashboard.png2.png"
                  alt="LoqAI dashboard preview"
                  className="block w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[96rem] mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-sm"
          style={{ y: statsY }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {heroStats.map((stat) => (
              <article key={stat.label} className="text-center py-5 sm:py-1 sm:px-6">
                <p className="text-3xl sm:text-4xl font-bold gradient-text tracking-tight">{stat.value}</p>
                <p className="text-base text-gray-500 mt-2">{stat.label}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
