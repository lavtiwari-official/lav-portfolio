
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          &copy; {currentYear} Lav Tiwari. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/lavtiwari-official" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/lavtiwariofficial" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/Lav_tiwari_" target="_blank">
              <XLogo className="h-5 w-5 p-0.5" />
              <span className="sr-only">X</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
