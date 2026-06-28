import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/heemo-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Heemo India"
              width={220}
              height={66}
              className="h-12 w-auto opacity-90"
            />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A trusted institutional supply partner since 1989 based in Meerut, India. Powering
              organizations with scalable technology and electronics supply across the nation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-premium hover:text-primary hover:pl-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-premium hover:text-primary hover:pl-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/brand-partners"
                  className="transition-premium hover:text-primary hover:pl-1"
                >
                  Brand Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-premium hover:text-primary hover:pl-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-widest">Legal</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="transition-premium hover:text-primary hover:pl-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-premium hover:text-primary hover:pl-1">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>+91 9719107400</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>info@heemoindia.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>
                  Meerut, Uttar Pradesh,
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground/80">
          <p>© {new Date().getFullYear()} Heemo India. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
