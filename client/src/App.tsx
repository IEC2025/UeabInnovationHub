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
import NewsPage from "@/pages/NewsPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense, lazy } from "react";

// Lazy load heavy components to reduce initial bundle size
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));
const CalendarPage = lazy(() => import("@/pages/CalendarPage"));
const RegistrationPage = lazy(() => import("@/pages/RegistrationPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));

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
          <Route path="/news" component={NewsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          {/* Lazy loaded routes with loading states */}
          <Route path="/events">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <EventsPage />
            </Suspense>
          </Route>
          <Route path="/resources">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <ResourcesPage />
            </Suspense>
          </Route>
          <Route path="/calendar">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <CalendarPage />
            </Suspense>
          </Route>
          <Route path="/registration">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <RegistrationPage />
            </Suspense>
          </Route>
          <Route path="/admin">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
              <AdminPage />
            </Suspense>
          </Route>
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
