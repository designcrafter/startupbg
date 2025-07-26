import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);
  
  return (
    <nav className="pt-2 pb-4 container mx-auto px-4">
      <div className="flex items-center justify-between gap-4">
        <div className="bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/spacecraft-logo.svg" alt="StartupBG Logo" className="h-5 w-5" />
            <span className="font-heading font-bold uppercase text-sm tracking-wider">
              STARTUPBG.COM<span className="text-gray-400"> / v0.1</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-2 flex items-center space-x-2">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-full",
                currentPath === "/" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              DASH
            </Link>
            <Link 
              to="/funds" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-full",
                currentPath === "/funds" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              VC FUNDS
            </Link>
            <Link 
              to="/key-people" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-full",
                currentPath === "/key-people" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              KEY PEOPLE
            </Link>
            <Link 
              to="/startups" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-full",
                currentPath === "/startups" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              STARTUPS
            </Link>
            
            <Link 
              to="/correction" 
              className="text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
            >
              <Mail className="h-4 w-4 mr-1" />
              GOT IDEAS/FIXES?
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden mt-2 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-2 absolute right-4 left-4 z-50"
        >
          <div className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-md",
                currentPath === "/" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              DASH
            </Link>
            <Link 
              to="/funds" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-md",
                currentPath === "/funds" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              VC FUNDS
            </Link>
            <Link 
              to="/key-people" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-md",
                currentPath === "/key-people" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              KEY PEOPLE
            </Link>
            <Link 
              to="/startups" 
              className={cn(
                "text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-md",
                currentPath === "/startups" 
                  ? "bg-gray-100 text-black" 
                  : "hover:text-primary"
              )}
            >
              STARTUPS
            </Link>
            
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link 
                to="/correction" 
                className="text-sm font-medium transition-colors px-4 py-2 flex items-center rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
              >
                <Mail className="h-4 w-4 mr-2" />
                GOT IDEAS/FIXES?
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
