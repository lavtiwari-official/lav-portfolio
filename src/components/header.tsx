'use client';

import { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const DesktopNav = memo(function DesktopNav() {
  return (
    <div className="flex items-center justify-between w-full px-4 gap-16">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold">Lav Tiwari</span>
      </Link>

      <nav className="flex items-center justify-center gap-8 text-lg font-medium flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
});

const MobileNav = memo(function MobileNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, [setIsMobileMenuOpen]);

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b pb-4">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={handleNavClick}
              >
                <span className="font-bold ml-2">Lav Tiwari</span>
              </Link>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex justify-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Lav Tiwari</span>
        </Link>
      </div>

      {/* Spacer to balance the menu button */}
      <div className="w-10" />
    </div>
  );
});

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-14 flex items-center justify-between px-4">
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </header>
  );
}
