import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BroadcastAlert from "./pages/admin/BroadcastAlert";
import ManageBookings from "./pages/admin/ManageBookings";
import Analytics from "./pages/admin/Analytics";
import TrafficMap from "./pages/admin/TrafficMap";
import AllAlerts from "./pages/admin/AllAlerts";
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
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/alerts/create" element={<BroadcastAlert />} />
          <Route path="/admin/booking" element={<ManageBookings />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/map" element={<TrafficMap />} />
          <Route path="/admin/alerts" element={<AllAlerts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
