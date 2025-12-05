import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Beaker,
  Zap,
  Palette,
  BookOpen,
  Globe,
  TrendingUp,
  Clock,
  Settings,
  HelpCircle,
  LogOut,
  GraduationCap,
  Dna,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const subjects = [
  { name: "Chemistry", icon: Beaker, route: "/dashboard?subject=chemistry" },
  { name: "Physics", icon: Zap, route: "/dashboard?subject=physics" },
  { name: "Biology", icon: Dna, route: "/biology" },
  { name: "Product Design", icon: Palette, route: "/dashboard?subject=product-design" },
  { name: "English", icon: BookOpen, route: "/dashboard?subject=english" },
  { name: "Geography", icon: Globe, route: "/dashboard?subject=geography" },
  { name: "Economics", icon: TrendingUp, route: "/dashboard?subject=economics" },
];

const navigation = [
  { name: "Dashboard", icon: Home, route: "/dashboard" },
  { name: "Progress", icon: TrendingUp, route: "/progress" },
  { name: "History", icon: Clock, route: "/history" },
  { name: "Question Bank", icon: Star, route: "/question-bank" },
  { name: "Settings", icon: Settings, route: "/settings" },
  { name: "Help", icon: HelpCircle, route: "/help" },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { open } = useSidebar();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  const isActive = (route: string) => {
    if (route === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(route);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          {open && (
            <div className="flex flex-col animate-fade-in">
              <span className="font-bold text-sm">BlurtAI</span>
              <span className="text-xs text-muted-foreground">GCSE Revision</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.route);
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      onClick={() => navigate(item.route)}
                      isActive={active}
                      className="transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-2" />

        <SidebarGroup>
          <SidebarGroupLabel>Subjects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subjects.map((subject) => {
                const Icon = subject.icon;
                const active = location.search.includes(subject.name.toLowerCase().replace(" ", "-"));
                return (
                  <SidebarMenuItem key={subject.name}>
                    <SidebarMenuButton
                      onClick={() => navigate(subject.route)}
                      isActive={active}
                      className="transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{subject.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          {open && <span>Sign Out</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
