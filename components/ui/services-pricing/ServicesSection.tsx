"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ButtonShadcn";
import { InteractiveStarfield } from "./InteractiveStarfield";
import { VerticalMarquee } from "./VerticalMarquee";
import { ServiceCard, type ServicePlan } from "./ServiceCard";

interface ServicesSectionProps {
  hero: {
    title: string;
    description: string;
  };
  pricing: {
    title: string;
    plans: ServicePlan[];
  };
  customCTA: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    marqueeItems?: string[];
  };
}

export function ServicesSection({
  hero,
  pricing,
  customCTA,
}: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: null, y: null })}
      className="relative w-full bg-background dark:bg-neutral-950"
    >
      <InteractiveStarfield
        mousePosition={mousePosition}
        containerRef={containerRef}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            {hero.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {hero.description}
          </p>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 pt-8 pb-4 lg:pb-8 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-12"
          >
            <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl text-neutral-900 dark:text-white">
              {pricing.title}
            </h3>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-start gap-8 max-w-7xl mx-auto">
            {pricing.plans.map((plan, index) => (
              <ServiceCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA Section with Marquee */}
      <section className="relative z-10 pt-6 lg:pt-0 pb-0 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 max-w-xl"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">
                {customCTA.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {customCTA.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={customCTA.buttonHref}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  )}
                >
                  <span className="relative z-10">{customCTA.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Link>
              </div>
            </motion.div>

            {/* Right Marquee */}
            {customCTA.marqueeItems && customCTA.marqueeItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <VerticalMarquee speed={20} className="h-full">
                    {customCTA.marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight py-6 marquee-item text-neutral-900 dark:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </VerticalMarquee>

                  {/* Top vignette */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/50 to-transparent z-10"></div>

                  {/* Bottom vignette */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
