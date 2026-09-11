/* Editorial Transfer: the publisher mark should arrive first; navigation stays light, clear, and tactile. */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";

export const MCA_LOGOS = {
  header: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1788559505/WhatsApp_Image_2026-09-04_at_10.51.11_PM_2_cp1ywy.jpg",
  footer: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1788559504/WhatsApp_Image_2026-09-04_at_10.51.11_PM_4_nu75ha.jpg",
};

export function Logo({ inverse = false, compact = false, variant }) {
  const src = MCA_LOGOS[variant || (inverse ? "footer" : "header")];
  return <Link href="/" className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="Mentors Crib Africa home"><span className="brand__asset"><img src={src} alt="Mentors Crib Africa logo" /></span>{!compact && <span className="brand__type"><b>Mentors</b><b>Crib <em>AFRICA</em></b></span>}</Link>;
}

export default function Navbar({ open, setOpen, links }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <>
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}><Logo /><nav className="desktop-nav">{links.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}</nav><div className="nav-actions"><Link className="nav-secondary" href="/partner-with-us">Partner with us</Link><Link className="action" href="/contact"><span>Talk to MCA</span><ArrowUpRight size={16} /></Link><button className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></header>
    {open && <nav className="mobile-nav">{links.map(([label, href]) => <Link key={href} href={href}>{label}<ChevronRight size={18} /></Link>)}<Link href="/our-story">Our story<ChevronRight size={18} /></Link><Link href="/events">Events<ChevronRight size={18} /></Link><Link href="/contact">Contact us<ChevronRight size={18} /></Link><Link className="mobile-nav__cta" href="/support-the-movement">Support the movement<ArrowUpRight size={18} /></Link></nav>}
  </>;
}
