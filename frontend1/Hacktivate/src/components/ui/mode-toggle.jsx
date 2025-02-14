import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ui/theme-provider"
import { useEffect } from "react"

export function ModeToggle() {

  const { setTheme } = useTheme()

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();
        setTheme("dark"); // Ensure setTheme is properly defined
      }
      if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        setTheme("light");
      }
    };
  
    document.addEventListener('keydown', handleKeydown);
  
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [setTheme]);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dark:border-slate-400" asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:text-white dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
