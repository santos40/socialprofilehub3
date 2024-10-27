import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { MainNav } from "./components/MainNav";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import BusinessProfile from "./pages/BusinessProfile";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }
  return <>{children}</>;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <MainNav />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/directory" element={<Index />} />
                    <Route path="/business/:id" element={<BusinessProfile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin" element={
                      <ProtectedRoute>
                        <Admin />
                      </ProtectedRoute>
                    } />
                  </Routes>
                </main>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;