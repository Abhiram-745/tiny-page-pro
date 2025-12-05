import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import UnifiedDashboard from "./pages/UnifiedDashboard";
import Sections from "./pages/Sections";
import TopicView from "./pages/TopicView";
import PhysicsSections from "./pages/PhysicsSections";
import PhysicsTopicView from "./pages/PhysicsTopicView";
import PhysicsProgress from "./pages/PhysicsProgress";
import ProductDesignChapters from "./pages/ProductDesignChapters";
import ProductDesignSections from "./pages/ProductDesignSections";
import ProductDesignTopicView from "./pages/ProductDesignTopicView";
import EnglishLiteratureChapters from "./pages/EnglishLiteratureChapters";
import DrJekyllSections from "./pages/DrJekyllSections";
import DrJekyllTopicView from "./pages/DrJekyllTopicView";
import DrJekyllBlurtPractice from "./pages/DrJekyllBlurtPractice";
import GeographyLivingWorldSections from "./pages/GeographyLivingWorldSections";
import GeographyTopicView from "./pages/GeographyTopicView";
import GeographyBlurtPractice from "./pages/GeographyBlurtPractice";
import BlurPractice from "./pages/BlurPractice";
import SectionReader from "./pages/SectionReader";
import BlurExercise from "./pages/BlurExercise";
import Results from "./pages/Results";
import History from "./pages/History";
import AdminSections from "./pages/AdminSections";
import Settings from "./pages/Settings";
import Progress from "./pages/Progress";
import SpacedRepetition from "./pages/SpacedRepetition";
import Help from "./pages/Help";
import ImportPDF from "./pages/ImportPDF";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import QuestionBank from "./pages/QuestionBank";
import EconomicsChapters from "./pages/EconomicsChapters";
import EconomicsSections from "./pages/EconomicsSections";
import EconomicsTopicView from "./pages/EconomicsTopicView";
import BiologyDashboard from "./pages/BiologyDashboard";
import BiologySections from "./pages/BiologySections";
import BiologyTopicView from "./pages/BiologyTopicView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Authenticated routes with sidebar */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<UnifiedDashboard />} />
            <Route path="/sections" element={<Sections />} />
            <Route path="/topic/:id" element={<TopicView />} />
            <Route path="/question-bank" element={<QuestionBank />} />
            <Route path="/physics/sections" element={<PhysicsSections />} />
            <Route path="/physics/topic/:id" element={<PhysicsTopicView />} />
            <Route path="/physics/progress" element={<PhysicsProgress />} />
            <Route path="/physics/blur-practice/:topicId/:moduleId/:subsectionId" element={<BlurPractice />} />
            <Route path="/physics/blur-practice/:topicId/:subsectionId" element={<BlurPractice />} />
            <Route path="/product-design/chapters" element={<ProductDesignChapters />} />
            <Route path="/product-design/sections/:chapterId" element={<ProductDesignSections />} />
            <Route path="/product-design/topic/:id" element={<ProductDesignTopicView />} />
            <Route path="/product-design/blur-practice/:topicId/:subsectionId" element={<BlurPractice />} />
            <Route path="/english/literature/chapters" element={<EnglishLiteratureChapters />} />
            <Route path="/english/literature/:bookId/sections" element={<DrJekyllSections />} />
            <Route path="/english/literature/dr-jekyll-mr-hyde/topic/:id" element={<DrJekyllTopicView />} />
            <Route path="/english/literature/dr-jekyll-mr-hyde/blurt/:id" element={<DrJekyllBlurtPractice />} />
            <Route path="/geography/:chapterId/sections" element={<GeographyLivingWorldSections />} />
            <Route path="/geography/living-world/topic/:id" element={<GeographyTopicView />} />
            <Route path="/geography/living-world/blurt/:id" element={<GeographyBlurtPractice />} />
            <Route path="/economics/chapters" element={<EconomicsChapters />} />
            <Route path="/economics/sections/:chapterId" element={<EconomicsSections />} />
            <Route path="/economics/topic/:chapterId/:moduleId/:subsectionId" element={<EconomicsTopicView />} />
            <Route path="/economics/blur-practice/:topicId/:moduleId/:subsectionId" element={<BlurPractice />} />
            <Route path="/blur-practice/:topicId/:subsectionId" element={<BlurPractice />} />
            <Route path="/biology" element={<BiologyDashboard />} />
            <Route path="/biology/:chapterId" element={<BiologySections />} />
            <Route path="/biology/:chapterId/:topicId" element={<BiologyTopicView />} />
            <Route path="/biology/blur-practice/:topicId/:moduleId/:subsectionId" element={<BlurPractice />} />
            <Route path="/biology/blur-practice/:topicId/:subsectionId" element={<BlurPractice />} />
            <Route path="/section/:id" element={<SectionReader />} />
            <Route path="/blur/:id" element={<BlurExercise />} />
            <Route path="/results/:id" element={<Results />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin/sections" element={<AdminSections />} />
            <Route path="/admin/import" element={<ImportPDF />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/review" element={<SpacedRepetition />} />
            <Route path="/help" element={<Help />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
