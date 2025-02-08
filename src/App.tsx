import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegistrationPage from "./pages/register";
import ThemesPage from "./pages/ThemesPage";
import ThemeList from "./components/ThemeList";
import LoginForm from "./components/LoginForm";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/themeslist" element={<ThemesPage/>} />
        {/*<Route path="/" element={<LoginForm />} />*/}
        <Route path="/" element={<Index/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

