import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/hp-brand-showcase")({
  component: HPBrandShowcasePage,
});

function HPBrandShowcasePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://syndication.inc.hp.com/inpage/contentid.min.js#Yz1zaG93Y2FzZS9pbi9lbiZtPUlCU0wmY2M9aW4mcD0yLVNJVUQtMTM1MQ";
    script.async = true;

    // Append script to our container
    containerRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-4xl leading-[1.1]">
              HP Brand Showcase
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <div 
          ref={containerRef} 
          className="w-full min-h-[500px]" 
        />
      </Section>
    </>
  );
}
