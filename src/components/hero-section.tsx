
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, memo } from 'react';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, Code2, Zap, Sparkles, Award } from 'lucide-react';
import { HeroTypewriter } from './hero-typewriter';

const HERO_STATS = [
  { number: '23+', label: 'Skills & Technologies', icon: Sparkles },
  { number: '18+', label: 'Certifications Earned', icon: Award },
  { number: '7+', label: 'Completed Projects', icon: Code2 },
];

export const HeroSection = memo(function HeroSection() {
  const heroImage = useMemo(() => PlaceHolderImages.find((img) => img.id === 'hero-bg'), []);
  const stats = HERO_STATS;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-6 pb-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
                I'm{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lav
                </span>
              </h1>
            </div>

            {/* Typewriter effect */}
            <div className="h-12 flex justify-center lg:justify-start">
              <HeroTypewriter />
            </div>

            {/* Description */}
            <p className="text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              I’m Lav Kumar, a full-stack and mobile app developer crafting clean, scalable, and 
              user-friendly digital experiences with a strong focus on design and performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-4 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="flex justify-center lg:justify-start mb-2">
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 sm:mt-8 flex flex-row justify-center lg:justify-start gap-2 sm:gap-4">
              <Button asChild size="sm" className="sm:h-11 sm:px-8 bg-primary hover:bg-primary/90">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild size="sm" variant="secondary" className="sm:h-11 sm:px-8">
                <a href="/cv.pdf" download="cv.pdf">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Decorative element or image placeholder */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-80 h-96">
              {/* Glowing border box */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/30" />
              
              {/* Content inside */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                <style>{`
                  .role-item {
                    opacity: 1;
                  }
                `}</style>
                <div className="text-center">
                  <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
                    <Code2 className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 h-8 flex items-center justify-center">
                    <span className="role-item absolute">Software Engineer</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Web Developer • Mobile Developer • Cloud Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
