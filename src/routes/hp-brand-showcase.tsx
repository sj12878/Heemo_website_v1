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
    script.src =
      "https://syndication.inc.hp.com/inpage/contentid.min.js#Yz1zaG93Y2FzZS9pbi9lbiZtPUlCU0wmY2M9aW4mcD0yLVNJVUQtMTM1MQ";
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
    <Section>
      <div ref={containerRef} className="w-full min-h-[500px]" />
    </Section>
  );
}
