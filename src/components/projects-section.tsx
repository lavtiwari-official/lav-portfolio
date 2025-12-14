'use client';

import { useState, useMemo, memo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Github,
} from 'lucide-react';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Memoize category extraction to avoid recalculation
const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: () => void;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden group hover:shadow-lg hover:shadow-primary/40 relative">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"></div>
      </div>
      <CardHeader>
        <CardTitle className="group-hover:text-primary">{project.title}</CardTitle>
        <Badge variant="secondary" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground">
          {project.category}
        </Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground group-hover:text-foreground/80">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onViewDetails} className="w-full">
          View Details <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
});

const ProjectDetails = memo(function ProjectDetails({ project }: { project: Project }) {
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <DialogHeader onClick={stopPropagation}>
      <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
      <div className="space-y-6">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.all.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video">
                  <Image
                    src={img}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-4">
          <p className="text-muted-foreground text-base">
            {project.longDescription}
          </p>

          <div>
            <h4 className="font-semibold text-lg mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button asChild>
              <Link href={project.liveUrl} target="_blank">
                Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </DialogHeader>
  );
});

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeCategory === 'All' || project.category === activeCategory
      ),
    [activeCategory]
  );

  const handleViewDetails = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleDialogOpenChange = useCallback((isOpen: boolean) => {
    if (!isOpen) {
      setSelectedProject(null);
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Work
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A selection of projects that I'm proud of.
        </p>
      </div>

      <Tabs
        defaultValue="All"
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="flex flex-wrap gap-2 md:gap-4 h-auto justify-center mx-auto mb-12 md:mb-16 px-4 md:px-8 py-1.5 md:py-3 bg-transparent border border-primary/20 rounded-lg">
          {projectCategories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className={cn(
                'transition-all duration-200 ease-in-out px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-medium',
                'data-[state=inactive]:hover:bg-muted/80 data-[state=inactive]:hover:-translate-y-1'
              )}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <Carousel
        opts={{
          align: 'center',
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {filteredProjects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-3/4 sm:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => handleViewDetails(project)}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 rounded-full bg-background/50 hover:bg-background lg:hidden" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 rounded-full bg-background/50 hover:bg-background lg:hidden" />
      </Carousel>


      <Dialog
        open={!!selectedProject}
        onOpenChange={handleDialogOpenChange}
      >
        <DialogContent className="max-w-3xl">
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
