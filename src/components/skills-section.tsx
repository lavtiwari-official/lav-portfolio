'use client';

import { memo } from 'react';
import { skillsByCategory } from '@/lib/data';
import type { Skill } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SkillButton = memo(function SkillButton({ skill }: { skill: Skill }) {
  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      className="h-auto px-3 py-1 text-sm transition-all duration-200 ease-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/40"
    >
      {skill.name}
    </Button>
  );
});

export const SkillsSection = memo(function SkillsSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
          My Skills
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A collection of technologies and tools I'm proficient with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsByCategory.map((category) => (
          <Card
            key={category.category}
            className="bg-card/80 backdrop-blur-sm border-border/20 group transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/60 relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/10 after:via-primary/5 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none"
          >
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors duration-500">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillButton skill={skill} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
});
