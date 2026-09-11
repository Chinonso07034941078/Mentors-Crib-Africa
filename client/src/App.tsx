/* Editorial Transfer reminder: asymmetry, generous whitespace, cobalt authority, cyan connection signals, and precise motion. */
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { ArrowUpRight, ChevronRight, Menu, MoveUpRight, Search, X } from "lucide-react";

const ASSETS = {
  hero: "/manus-storage/mca-hero-reference_9cfa65b0.jpg",
  mentor: "/manus-storage/mca-mentor-portrait_d75f2e36.jpg",
  community: "/manus-storage/mca-community_42c31e3c.jpg",
  resource: "/manus-storage/mca-resource_8bdbea99.jpg",
  mark: "/manus-storage/mca-monogram_c0a1a16a.png",
};

const nav = [
  ["About", "/about"],
  ["Mentors", "/mentors"],
  ["Programs", "/programs"],
  ["Resources", "/resources"],
  ["Community", "/community"],
] as const;

function Logo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""} ${compact ? "brand-lockup--compact" : ""}`}>
      <span className="brand-mark-wrap"><span className="brand-mark-fallback">MC</span><img src={ASSETS.mark} alt="" className="brand-mark" onError={(e) => { e.currentTarget.style.display = "none"; }} /></span>
      {!compact && <span className="brand-wordmark"><b>Mentors</b><b>Crib <em>AFRICA</em></b></span>}
    </Link>
  );
}

function ArrowButton({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return <Link href={href} className={`arrow-button ${inverse ? "arrow-button--inverse" : ""}`}><span>{children}</span><ArrowUpRight size={16} /></Link>;
}

function TransferLine({ inverse = false }: { inverse?: boolean }) {
  return <div className={`transfer-line ${inverse ? "transfer-line--inverse" : ""}`}><span /><i /></div>;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return <div className="site-shell">
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Logo />
      <nav className="desktop-nav">{nav.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}</nav>
      <div className="nav-actions"><Link href="/become-a-mentor" className="nav-secondary">Become a mentor</Link><ArrowButton href="/find-a-mentor">Find a mentor</ArrowButton><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </header>
    {open && <div className="mobile-nav">{nav.map(([label, href]) => <Link key={href} href={href}>{label}<ChevronRight size={18}/></Link>)}<Link href="/become-a-mentor">Become a mentor<ChevronRight size={18}/></Link><Link href="/find-a-mentor" className="mobile-nav__cta">Find a mentor<ArrowUpRight size={18}/></Link></div>}
    {children}
    <Footer />
  </div>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-top"><div><Logo inverse /><p className="footer-lede">Experience is meant<br/>to be transferred.</p></div><div className="footer-cta"><span className="eyebrow eyebrow--light">MAKE YOUR NEXT MOVE</span><h2>Bring what you know.<br/><span>Make room for what’s next.</span></h2><ArrowButton href="/contact" inverse>Start a conversation</ArrowButton></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Mentors Crib Africa</span><div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Privacy</a></div><span>Accra · Lagos · Everywhere</span></div>
  </footer>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <span className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</span>; }
function PageIntro({ number, label, title, lead, dark = false }: { number: string; label: string; title: React.ReactNode; lead: string; dark?: boolean }) { return <section className={`page-intro ${dark ? "page-intro--dark" : ""}`}><div className="page-intro__index">{number}</div><div className="page-intro__copy"><div className="page-intro__publisher"><Logo compact inverse={dark}/><span>AN EDITION OF<br/>THE TRANSFER SERIES</span></div><Eyebrow light={dark}>{label}</Eyebrow><h1>{title}</h1><p>{lead}</p></div><div className="page-intro__direction">→</div><TransferLine inverse={dark}/></section>; }

function Home() {
  return <main>
    <section className="hero"><div className="hero-copy"><Eyebrow>MENTORSHIP <span>•</span> COMMUNITY <span>•</span> GROWTH</Eyebrow><h1>The right<br/>conversation<br/>can change your <span>direction.</span></h1><p className="hero-lede">A mentorship ecosystem for ambitious people building meaningful careers, companies, and communities across Africa.</p><div className="hero-actions"><ArrowButton href="/find-a-mentor">Find a mentor</ArrowButton><Link href="/mentors" className="text-link">Explore mentors <MoveUpRight size={15}/></Link></div></div><div className="hero-visual"><div className="hero-image-frame"><img src={ASSETS.hero} alt="African founder in a cobalt-blue jacket"/><div className="hero-caption"><span>01 / 04</span><span>THE TRANSFER SERIES</span></div></div><div className="hero-stamp"><span>MC</span><small>EXPERIENCE<br/>IN MOTION</small></div><div className="hero-side-note">For the road ahead <MoveUpRight size={15}/></div></div><TransferLine/></section>
    <section className="statement section-pad"><div className="section-index">01</div><div className="statement-copy"><Eyebrow>THE IDEA</Eyebrow><h2>Experience is not meant to be <span>kept.</span></h2><p>It moves from one person to another — through perspective, challenge, encouragement, and the kind of conversation that makes a new path feel possible.</p><ArrowButton href="/about">Our point of view</ArrowButton></div></section>
    <section className="blue-band"><div className="blue-band__copy"><Eyebrow light>FIND YOUR NEXT CONVERSATION</Eyebrow><h2>Go further<br/><span>with context.</span></h2><p>Find the people who have already walked a version of the road you are on — and are willing to walk with you for a while.</p><ArrowButton href="/find-a-mentor" inverse>Find a mentor</ArrowButton></div><div className="blue-band__orb"><div className="orb-ring orb-ring--one"/><div className="orb-ring orb-ring--two"/><span>→</span></div></section>
    <section className="chapter-grid section-pad"><div className="chapter-grid__intro"><Eyebrow>THE ECOSYSTEM</Eyebrow><h2>Different roads.<br/><span>Shared direction.</span></h2></div><div className="chapter-list"><Link href="/mentors"><span>01</span><b>Meet the mentors</b><ArrowUpRight size={18}/></Link><Link href="/programs"><span>02</span><b>Find your program</b><ArrowUpRight size={18}/></Link><Link href="/community"><span>03</span><b>Enter the community</b><ArrowUpRight size={18}/></Link></div></section>
    <section className="image-story"><img src={ASSETS.community} alt="Mentorship community in conversation"/><div className="image-story__overlay"><Eyebrow light>THE PEOPLE IN BETWEEN</Eyebrow><h2>There is power<br/>in the <span>in-between.</span></h2><ArrowButton href="/community" inverse>See the community</ArrowButton></div></section>
  </main>;
}

function About() { return <main><PageIntro number="01" label="THE IDEA" title={<>A better future is built in <span>conversation.</span></>} lead="Mentors Crib Africa is a community for people who believe that experience becomes more valuable when it moves."/><section className="manifesto section-pad"><div className="manifesto__rail"><span>OUR MANIFESTO</span><div>↓</div></div><div className="manifesto__body"><p className="manifesto__lead">We create the conditions for honest exchange between where someone is and where they want to go.</p>{["Perspective before prescription.","Connection before credentials.","Progress that leaves a trail for others."].map((item, i) => <div className="manifesto-row" key={item}><span>0{i+1}</span><h3>{item}</h3><p>Mentorship works when it is specific, generous, and grounded in the reality of the person in front of you.</p></div>)}</div></section><section className="blue-band blue-band--split"><div><Eyebrow light>OUR VISION</Eyebrow><h2>More doors<br/><span>open earlier.</span></h2></div><p>We are building the connective tissue between talent and opportunity — one meaningful exchange at a time.</p></section></main>; }

const mentorNames = ["Aisha Mensah", "Kofi Owusu", "Zanele Mokoena", "Daniel Okafor", "Nia Kamau", "Tolu Adebayo"];
function Mentors() { const mentorImages = [ASSETS.mentor, ASSETS.community, ASSETS.hero, ASSETS.resource, ASSETS.community, ASSETS.mentor]; return <main><PageIntro number="02" label="MENTORSHIP" title={<>Find the people who have <span>walked ahead.</span></>} lead="Filter by the kind of context you need next. Every profile is a doorway to a more informed move."/><section className="directory section-pad"><div className="directory-toolbar"><div className="search-field"><Search size={18}/><input placeholder="Search by name, expertise or city"/></div><div className="filter-label">FILTER <ChevronRight size={15}/></div></div><div className="mentor-grid">{mentorNames.map((name, i) => <Link href="/mentor-profile" className={`mentor-card mentor-card--${i % 3}`} key={name}><div className="mentor-card__image"><img src={mentorImages[i]} alt={`${name}, mentor`} /><span>0{i+1}</span></div><div className="mentor-card__meta"><div><h3>{name}</h3><p>{["Product & leadership · Accra", "Finance & growth · Nairobi", "Creative strategy · Johannesburg", "Technology & systems · Lagos", "People & culture · Kigali", "Brand & community · Dakar"][i]}</p></div><ArrowUpRight size={18}/></div></Link>)}</div></section></main>; }

function MentorProfile() { return <main><section className="profile-hero"><div className="profile-hero__image"><img src={ASSETS.mentor} alt="Aisha Mensah"/></div><div className="profile-hero__copy"><Eyebrow>MENTOR PROFILE / 01</Eyebrow><h1>Aisha<br/><span>Mensah</span></h1><p className="profile-role">Product leader · Accra, Ghana</p><TransferLine/><p>Helping ambitious builders turn big questions into clear next moves.</p><ArrowButton href="/contact">Request a conversation</ArrowButton></div></section><section className="profile-body section-pad"><div><Eyebrow>AREAS OF CONTEXT</Eyebrow><h2>Build with<br/><span>intention.</span></h2></div><div className="profile-details"><p>Aisha works with founders and product teams navigating their first inflection points: finding focus, building the right team, and creating products people return to.</p><div className="tag-row"><span>Product strategy</span><span>Leadership</span><span>Founder transitions</span></div></div></section></main>; }

function Programs() { return <main><PageIntro number="03" label="PROGRAMS" title={<>Structured space for <span>forward motion.</span></>} lead="Programs that turn the right conversation into a rhythm — with clarity, accountability, and room to think."/><section className="program-list section-pad">{[["01","The Direction Lab","A six-week cohort for people at a meaningful crossroads.","/program-details"],["02","Mentor Circles","Small, focused groups built around shared questions.","/program-details"],["03","Open Office Hours","A generous first conversation when you need one.","/contact"]].map(([num,title,desc,href])=><Link href={href} className="program-row" key={num}><span>{num}</span><div><h2>{title}</h2><p>{desc}</p></div><ArrowUpRight size={22}/></Link>)}</section></main>; }
function ProgramDetails() { return <main><PageIntro number="03 / 01" label="THE DIRECTION LAB" title={<>A clearer next step is a <span>practice.</span></>} lead="Six weeks of honest questions, useful frameworks, and a small group of people willing to keep showing up." dark/><section className="details-grid section-pad"><div><Eyebrow>THE FORMAT</Eyebrow><h2>Less advice.<br/><span>More agency.</span></h2></div><div className="details-copy"><p>Each week gives you a prompt, a room, and a reason to move. The work is practical: name the question, test the assumption, make the next call.</p><div className="detail-steps">{["Orient", "Examine", "Move"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><p>{["See the whole terrain.","Find the useful tension.","Leave with a decision."][i]}</p></div>)}</div><ArrowButton href="/contact">Ask about the next cohort</ArrowButton></div></section></main>; }

function Resources() { return <main><PageIntro number="04" label="RESOURCES" title={<>A library for the road <span>ahead.</span></>} lead="Short reads, honest prompts, and useful ways to think about the move in front of you."/><section className="resource-feature section-pad"><img src={ASSETS.resource} alt="Notebook and arrow motif on a desk"/><div><Eyebrow>FIELD NOTE / 01</Eyebrow><h2>The question beneath the question.</h2><p>Before you ask what to do next, ask what you are really trying to protect, prove, or become.</p><Link href="/resource-details" className="text-link">Read the field note <ArrowUpRight size={15}/></Link></div></section><section className="resource-list section-pad">{["How to ask for the kind of help you actually need","The difference between access and alignment","A working definition of meaningful progress"].map((x,i)=><Link href="/resource-details" key={x}><span>0{i+2}</span><b>{x}</b><ArrowUpRight size={18}/></Link>)}</section></main>; }
function ResourceDetails() { return <main><PageIntro number="04 / 01" label="FIELD NOTE" title={<>The question beneath the <span>question.</span></>} lead="A short reflection on asking for help without handing over your agency."/><article className="article section-pad"><div className="article-meta"><span>06 MIN READ</span><span>MENTORSHIP</span></div><div className="article-body"><p className="article-lead">Good mentorship does not replace your judgement. It gives your judgement more room to work.</p><p>We often arrive at a mentor’s door with a question that is easier to say out loud: “What should I do?” Underneath it is usually something more precise. What am I not seeing? What am I afraid to name? Which choice would feel like mine?</p><p>The quality of the conversation changes when we bring that second question with us. Not because the answer is waiting in someone else, but because another perspective can help us hear our own thinking with less noise.</p><TransferLine/><ArrowButton href="/mentors">Continue exploring</ArrowButton></div></article></main>; }

function Community() { return <main><PageIntro number="05" label="COMMUNITY" title={<>The people you meet can change the <span>terrain.</span></>} lead="A thoughtful network for exchange, accountability, and the kind of belonging that makes ambitious work sustainable."/><section className="community-feature"><img src={ASSETS.community} alt="Professionals gathered around a table"/><div className="community-feature__card"><Eyebrow>THE CRIB</Eyebrow><h2>A room for<br/><span>becoming.</span></h2><p>Events, circles, and useful collisions for people building the next chapter of African work.</p><ArrowButton href="/contact">Join the list</ArrowButton></div></section></main>; }

function Contact({ title = "Let's make the next move useful." }: any) { return <main><PageIntro number="06" label="CONTACT" title={<>{title.split(" ").slice(0,-2).join(" ")} <span>{title.split(" ").slice(-2).join(" ")}</span></>} lead="Tell us where you are, what you are building, and what kind of conversation would help."/><section className="contact-grid section-pad"><div><Eyebrow>START HERE</Eyebrow><h2>One clear question<br/><span>is enough.</span></h2><p>We read every message. A human will get back to you with the most useful next step.</p></div><form className="contact-form" onSubmit={(e)=>e.preventDefault()}><label>Name<input placeholder="Your name"/></label><label>Email<input type="email" placeholder="you@example.com"/></label><label>What brings you here?<textarea placeholder="A few lines is perfect." rows={4}/></label><button type="submit" className="arrow-button"><span>Send the note</span><ArrowUpRight size={16}/></button></form></section></main>; }
function NotFound() { return <main><PageIntro number="404" label="NOT FOUND" title={<>This page took a <span>different route.</span></>} lead="The conversation is still open. Find your way back to the home page."/><div className="section-pad"><ArrowButton href="/">Return home</ArrowButton></div></main>; }

export default function App() { return <Layout><Switch><Route path="/" component={Home}/><Route path="/about" component={About}/><Route path="/mentors" component={Mentors}/><Route path="/mentor-profile" component={MentorProfile}/><Route path="/programs" component={Programs}/><Route path="/program-details" component={ProgramDetails}/><Route path="/resources" component={Resources}/><Route path="/resource-details" component={ResourceDetails}/><Route path="/community" component={Community}/><Route path="/contact" component={Contact}/><Route path="/become-a-mentor" component={()=><Contact title="Bring your experience forward."/>}/><Route path="/find-a-mentor" component={()=><Contact title="Find a conversation that moves you."/>}/><Route component={NotFound}/></Switch></Layout>; }
