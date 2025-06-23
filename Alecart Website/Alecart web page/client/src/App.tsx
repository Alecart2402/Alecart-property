import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactFormModal from "@/components/contact-form-modal";
import Home from "@/pages/home";
import Process from "@/pages/process";
import NotFound from "@/pages/not-found";

function Router({ onShowContactForm }: { onShowContactForm: () => void }) {
  return (
    <Switch>
      <Route path="/">
        <Home onShowContactForm={onShowContactForm} />
      </Route>
      <Route path="/process">
        <Process onShowContactForm={onShowContactForm} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <Navigation onShowContactForm={() => setShowContactForm(true)} />
          <Router onShowContactForm={() => setShowContactForm(true)} />
          <Footer onShowContactForm={() => setShowContactForm(true)} />
          <ContactFormModal 
            open={showContactForm} 
            onClose={() => setShowContactForm(false)} 
          />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
