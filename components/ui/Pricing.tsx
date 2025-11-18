"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/UseMediaQuery";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="w-full py-12 md:py-20">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-gray-600 text-lg whitespace-pre-line max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-7xl mx-auto px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.95 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 150,
              damping: 25,
              delay: index * 0.08,
              opacity: { duration: 0.3 },
            }}
            className={cn(
              "rounded-2xl border p-8 bg-white text-center relative",
              "flex flex-col",
              "shadow-lg hover:shadow-2xl transition-all duration-300",
              "transform-gpu",
              plan.isPopular
                ? "border-primary border-2 scale-105 md:scale-100"
                : "border-gray-200",
              !plan.isPopular && "md:mt-5",
              index === 0 || index === 2
                ? "md:z-0"
                : "md:z-10",
              index === 0 && "md:origin-right",
              index === 2 && "md:origin-left"
            )}
            style={{
              perspective: "1000px",
            }}
          >
            {plan.isPopular && (
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 250, damping: 20 }}
                className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center gap-1 shadow-lg"
              >
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white font-sans font-semibold text-xs">
                  Popular
                </span>
              </motion.div>
            )}

            <div className="flex-1 flex flex-col">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                {plan.name}
              </p>

              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-left"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  href={plan.href}
                  className={cn(
                    "block w-full px-6 py-4 rounded-xl font-bold text-center",
                    "transition-all duration-300 transform hover:scale-105",
                    "shadow-md hover:shadow-xl",
                    plan.isPopular
                      ? "bg-primary text-white hover:bg-primary-dark hover:-translate-y-1"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-1"
                  )}
                >
                  {plan.buttonText}
                </Link>

                <p className="text-xs leading-relaxed text-gray-500 px-2">
                  {plan.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
