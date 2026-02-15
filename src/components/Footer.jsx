
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200">
      
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center font-bold text-white">
                ZI
              </div>
              <h2 className="text-xl font-semibold tracking-wide">
                Zero Idea Academy
              </h2>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              Learn modern skills with industry-focused courses and practical
              services. Build your career with guidance from experts.
            </p>

            
            <div className="flex items-center gap-3 pt-1">
              <SocialIcon href="#" label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="YouTube">
                <Youtube size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <Twitter size={18} />
              </SocialIcon>
            </div>
          </div>

          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/courses">Courses</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          
          <div>
            <h3 className="text-base font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/refund">Refund Policy</FooterLink>
            </ul>
          </div>

          
          <div className="space-y-5">
            <div>
              <h3 className="text-base font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 text-blue-400" size={18} />
                  <span>
                    Dhaka, Bangladesh <br />
                    (Online based)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-blue-400" size={18} />
                  <span>+880 1XXXXXXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="text-blue-400" size={18} />
                  <span>support@zeroidea.academy</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">
                Subscribe to newsletter
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full items-center gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 transition"
                >
                  Join
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-500">
                No spam. We only send course updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Zero Idea Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <a href="/privacy" className="hover:text-slate-200 transition">
              Privacy
            </a>
            <a href="/terms" className="hover:text-slate-200 transition">
              Terms
            </a>
            <a href="/contact" className="hover:text-slate-200 transition">
              Support
            </a>

            
            <a
              href="/admin"
              className="ml-0 md:ml-2 rounded-md px-2 py-1 hover:bg-slate-900 hover:text-slate-200 transition"
              title="Admin"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-slate-400 hover:text-white transition"
      >
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-9 w-9 grid place-items-center rounded-full bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
