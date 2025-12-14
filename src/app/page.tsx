
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const sectionLoader = (
  <div className="container mx-auto px-4 py-16 sm:py-20 md:py-28">
    <div className="flex flex-col items-center space-y-8">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-8 w-3/4" />
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  </div>
);

const ProfileSection = dynamic(
  () => import('@/components/profile-section').then((mod) => mod.ProfileSection),
  { loading: () => sectionLoader }
);

const SkillsSection = dynamic(
  () => import('@/components/skills-section').then((mod) => mod.SkillsSection),
  { loading: () => sectionLoader }
);

const AchievementsSection = dynamic(
  () => import('@/components/achievements-section').then((mod) => mod.AchievementsSection),
  { loading: () => sectionLoader }
);

const ServicesSection = dynamic(
  () =>
    import('@/components/services-section').then((mod) => mod.ServicesSection),
  { loading: () => sectionLoader }
);

const ProjectsSection = dynamic(
  () =>
    import('@/components/projects-section').then((mod) => mod.ProjectsSection),
  { loading: () => sectionLoader }
);

const ContactSection = dynamic(
  () =>
    import('@/components/contact-section').then((mod) => mod.ContactSection),
  { loading: () => sectionLoader }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section id="about" className="bg-card/50 py-16 sm:py-20 md:py-28">
          <ProfileSection />
        </section>
        <section id="skills" className="py-16 sm:py-20 md:py-28">
          <SkillsSection />
        </section>
        <section id="services" className="py-16 sm:py-20 md:py-28">
          <ServicesSection />
        </section>
        <section id="projects" className="bg-card/50 py-16 sm:py-20 md:py-28">
          <ProjectsSection />
        </section>
        <section id="achievements" className="py-16 sm:py-20 md:py-28">
          <AchievementsSection />
        </section>
        <section id="contact" className="bg-card/50 py-16 sm:py-20 md:py-28">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
