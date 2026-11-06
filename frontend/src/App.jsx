import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Dashboard from "@/pages/Dashboard";

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* En-tête */}
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <h1 className="text-lg font-semibold">Tableau de bord</h1>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        {/* Contenu */}
        <main className="flex-1 p-4 md:p-6">
          <Dashboard />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
