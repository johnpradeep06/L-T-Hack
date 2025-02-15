import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DivideIcon as LucideIcon } from "lucide-react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

export function NavLink({ to, children, icon: Icon }: NavLinkProps) {
  const isActive = window.location.pathname === to;

  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start gap-2", {
        "bg-secondary": isActive,
      })}
      onClick={() => window.history.pushState({}, "", to)}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Button>
  );
}