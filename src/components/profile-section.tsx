
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Briefcase, GraduationCap, MapPin, Github, Linkedin, Instagram, Download } from 'lucide-react';
import { Button } from './ui/button';

// Custom X logo SVG to replace the Twitter icon
function XLogo(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.823L521.697 619.934L112.383 44.0126H302.54L607.484 507.643L655.011 575.474L1091.03 1182.26H900.86L569.165 687.823Z" />
    </svg>
  );
}

export function ProfileSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  const profileItems = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech. Computer Science and Engg.',
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: '1+ Years',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, India',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          {profileImage && (
            <div className="relative aspect-square max-w-sm mx-auto p-2">
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                  quality={85}
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            </div>
          )}
        </div>
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I’m Lav Kumar, a Computer Science and Engineering student 
            currently in my 3rd year at Technocrats Institute of 
            Technology – Excellence (TIT-EX), Bhopal. I am a passionate 
            and creative Full-Stack and Mobile App Developer with a strong
            interest in building modern, responsive, and user-friendly digital products.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/lavtiwariofficial" target="_blank">
                <Linkedin className="h-28 w-28" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/lavtiwari-official" target="_blank">
                <Github className="h-28 w-28" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/lavtiwari_official/" target="_blank">
                <Instagram className="h-28 w-28" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://x.com/Lav_tiwari_" target="_blank">
                <XLogo className="h-28 w-28" />
                <span className="sr-only">X</span>
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {profileItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className='text-left'>
                  <p className="font-semibold text-foreground text-lg">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-8 flex flex-row gap-2 sm:gap-4 md:justify-start justify-center">
            <Button asChild size="sm" className="sm:h-11 sm:px-8">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="sm" variant="secondary" className="sm:h-11 sm:px-8">
              <a href="/cv.pdf" download="cv.pdf">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
