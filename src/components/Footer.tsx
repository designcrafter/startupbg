
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" size="sm" className="rounded-full">
              Full Source List
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Submit a Correction
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Data Methodology
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built by{" "}
            <Button variant="link" className="p-0 h-auto font-medium" asChild>
              <a href="#" className="text-primary hover:underline">
                Vasil Nedelchev
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>
            Last updated: December 2024 • Data sources: Public records, VC reports, 
            company websites, and industry surveys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
