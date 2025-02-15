import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BarChart,
  Users,
  ShoppingCart,
  Mail,
  Settings,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const handleNavigation = (path: string) => {
    window.history.pushState({}, "", path);
    // Dispatch a custom event to notify the app of navigation
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const isCurrentPath = (path: string) => window.location.pathname === path;

  return (
    <div className={cn("pb-12 border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button
              variant={isCurrentPath("/") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={isCurrentPath("/analytics") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/analytics")}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button
              variant={isCurrentPath("/customers") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/customers")}
            >
              <Users className="mr-2 h-4 w-4" />
              Customers
            </Button>
            <Button
              variant={isCurrentPath("/orders") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/orders")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <Button
              variant={isCurrentPath("/messages") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/messages")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button
              variant={isCurrentPath("/settings") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}