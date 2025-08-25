import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProgress } from "@/components/ui/micro-interactions";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProgramsPage from "@/pages/ProgramsPage";
import EventsPage from "@/pages/EventsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import NewsPage from "@/pages/NewsPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import CalendarPage from "@/pages/CalendarPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
