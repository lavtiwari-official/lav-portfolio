
'use client';

import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import * as LucideIcons from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type IconName = keyof typeof LucideIcons;

export function ServicesSection() {
  return (
    <div className="container mx-auto px-0">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
          What I Do
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-4 overflow-visible">
          {services.map((service, index) => {
            const Icon = LucideIcons[
              service.icon as IconName
            ] as React.ElementType;
            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 overflow-visible"
              >
                <div className="group h-full">
                  <Card
                    key={service.title}
                    className="bg-card text-center flex flex-col h-full transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-primary/60 relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/10 after:via-primary/5 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none"
                  >
                  <CardHeader className="items-center relative z-10">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-primary/20">
                      <div className="p-3 bg-primary rounded-full transition-all duration-500 ease-out group-hover:shadow-lg group-hover:shadow-primary/50">
                        {Icon && (
                          <Icon className="h-8 w-8 text-primary-foreground transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                        )}
                      </div>
                    </div>
                    <CardTitle className="transition-colors duration-500 ease-out group-hover:text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between relative z-10">
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="transition-all duration-500 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  </Card>
                </div>
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
