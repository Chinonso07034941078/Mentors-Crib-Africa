/* Editorial Transfer: institutional clarity, deep cobalt, electric cyan, and smooth human-scale motion. */
import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import Home from "./pages/Home";
import { AboutPage, StoryPage, FounderPage, GrowthJourneyPage, ProgramsPage, ProgramDetailPage, AcademyPage, CoursesPage, ResourcesPage, BlogPage, CommunityPage, EventsPage, VolunteerPage, PartnerPage, SupportPage, GalleryPage, TestimonialsPage, FAQsPage, ContactPage, PrivacyPage, TermsPage, NotFoundPage } from "./components/SitePages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WhatsAppButton } from "./components/SocialIcons";

export const NAV_LINKS = [
  ["Home", "/"], ["About", "/about"], ["Programs", "/programs"], ["Resources", "/resources"], ["Community", "/community"],
];

function Layout({ children }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location]);
  return <div className="site-shell"><Navbar open={open} setOpen={setOpen} links={NAV_LINKS} /><main>{children}</main><Footer /><WhatsAppButton /></div>;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={AboutPage} />
    <Route path="/our-story" component={StoryPage} />
    <Route path="/founder" component={FounderPage} />
    <Route path="/growth-journey" component={GrowthJourneyPage} />
    <Route path="/programs" component={ProgramsPage} />
    <Route path="/programs/:slug" component={ProgramDetailPage} />
    <Route path="/mentorshift">{() => <ProgramDetailPage params={{ slug: "mentorshift" }} />}</Route>
    <Route path="/learning-academy" component={AcademyPage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/resources" component={ResourcesPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/community" component={CommunityPage} />
    <Route path="/events" component={EventsPage} />
    <Route path="/volunteer" component={VolunteerPage} />
    <Route path="/partner-with-us" component={PartnerPage} />
    <Route path="/support-the-movement" component={SupportPage} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/testimonials" component={TestimonialsPage} />
    <Route path="/faqs" component={FAQsPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/privacy-policy" component={PrivacyPage} />
    <Route path="/terms-conditions" component={TermsPage} />
    <Route component={NotFoundPage} />
  </Switch>;
}

export default function App() { return <Layout><Router /></Layout>; }
