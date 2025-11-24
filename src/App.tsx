import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/student/Dashboard";
import TeacherDashboard from "./pages/teacher/Dashboard";
import Tutoring from "./pages/student/Tutoring";
import ProgressPage from "./pages/student/Progress";
import Learning from "./pages/student/Learning";
import Collaborate from "./pages/student/Collaborate";
import Assessment from "./pages/student/Assessment";
import Settings from "./pages/student/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/learning" element={<Learning />} />
          <Route path="/student/tutoring" element={<Tutoring />} />
          <Route path="/student/assessment" element={<Assessment />} />
          <Route path="/student/progress" element={<ProgressPage />} />
          <Route path="/student/collaborate" element={<Collaborate />} />
          <Route path="/student/settings" element={<Settings />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
