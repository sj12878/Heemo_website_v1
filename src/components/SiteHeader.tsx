import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/heemo-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/brand-partners", label: "Brand Partners" },
  { to: "/hp-brand-showcase", label: "HP Showcase" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-premium",
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-sm py-2 border-b border-border/40"
          : "bg-background/70 backdrop-blur-md py-3",
      )}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8">
        <Link to="/" className="flex items-center gap-3 group mr-auto">
          <img
            src={logo}
            alt="Heemo India"
            width={200}
            height={60}
            className={cn(
              "h-12 sm:h-14 w-auto transition-premium",
              scrolled ? "scale-95" : "scale-100",
            )}
          />
          <span className="sr-only">Heemo India</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10 ml-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-2 text-sm font-medium text-muted-foreground transition-premium hover:text-foreground group/link"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-premium group-hover/link:w-full" />
              {l.to === "/" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary/0 group-[.text-primary]/link:bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block ml-8">
          <Button
            asChild
            size="sm"
            className="px-6 shadow-sm hover:shadow-md transition-premium font-medium"
          >
            <Link to="/contact" hash="contact-form" className="whitespace-nowrap">
              Request a Quote
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in shadow-xl">
          <nav className="flex flex-col px-4 py-6 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-accent transition-premium"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-4 rounded-full">
              <Link to="/contact" hash="contact-form" onClick={() => setOpen(false)}>
                Request a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
