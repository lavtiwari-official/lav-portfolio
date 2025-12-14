
'use client';

import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';

type IconName = keyof typeof LucideIcons;

export function AchievementsSection() {
  return (
    <div className="container mx-auto px-0">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Achievements
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A few of my proudest professional accomplishments.
        </p>
      </div>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-4 overflow-visible">
          {achievements.map((achievement, index) => {
            const Icon = LucideIcons[
              achievement.icon as IconName
            ] as React.ElementType;
            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 overflow-visible"
              >
                <Card className="bg-card text-center flex flex-col h-full overflow-hidden group transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/60 relative">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <CardHeader className="items-center gap-4 pt-6 transition-colors duration-500">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors duration-500">
                      {Icon && <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" />}
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-500">{achievement.title}</CardTitle>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-500">
                        {achievement.source}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow transition-colors duration-500">
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 rounded-full bg-background/50 hover:bg-background lg:hidden" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 rounded-full bg-background/50 hover:bg-background lg:hidden" />
      </Carousel>
    </div>
  );
}
