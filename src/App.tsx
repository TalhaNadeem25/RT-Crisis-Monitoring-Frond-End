
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/incidents" element={<Index />} /> {/* Placeholder */}
          <Route path="/map" element={<Index />} /> {/* Placeholder */}
          <Route path="/history" element={<Index />} /> {/* Placeholder */}
          <Route path="/analytics" element={<Index />} /> {/* Placeholder */}
          <Route path="/intelligence" element={<Index />} /> {/* Placeholder */}
          <Route path="/settings" element={<Index />} /> {/* Placeholder */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
