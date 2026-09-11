/* Editorial Transfer: the footer is a closing editorial spread—warm, direct, and built for the next invitation. */
import React from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Logo, MCA_LOGOS } from "./Navbar";

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/mentors-crib/"],
  ["Instagram", "https://www.instagram.com/mentorscribafrica?igsi=b2ViZGgwZzBya2x6"],
  ["Facebook", "https://www.facebook.com/share/1C66oBieu4/"],
];

export default function Footer() {
  return <footer className="footer"><div className="footer__top"><div><Logo inverse /><p className="footer__lede">Growth is a decision.<br />Transformation is a journey.</p><div className="footer__stamp">MCA <span>EST. 2024</span></div><div className="footer__brand-tile"><img src={MCA_LOGOS.footer} alt="Mentors Crib Africa logo" /></div></div><div className="footer__cta"><span className="eyebrow eyebrow--light">OUR INVITATION</span><h2>You do not have to<br /><span>walk it alone.</span></h2><p className="footer__copy">Join a community that will challenge you, support you, sharpen you, and prepare you to leave a lasting legacy.</p><Link className="action action--inverse" href="/contact"><span>Let's grow together</span><ArrowUpRight size={16} /></Link></div></div><div className="social-strip"><div><span className="eyebrow eyebrow--light">FOLLOW THE MOVEMENT</span><b>Stay close to the conversation.</b></div><div className="social-strip__links">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight size={15} /></a>)}</div></div><div className="footer__bottom"><span>© {new Date().getFullYear()} Mentors Crib Africa</span><span>Accra · Lagos · Everywhere</span></div></footer>;
}
