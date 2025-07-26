import { AppButton } from "@/components/ui/app-button";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/about">
                About
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/correction">
                Submit Feedback
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/sources">
                Source List
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/funds">
                VC Funds
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/key-people">
                Key People
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/startups">
                Startups
              </RouterLink>
            </AppButton>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built by{" "}
            <AppButton variant="ghost" className="p-0 h-auto font-medium" asChild>
              <a href="https://www.linkedin.com/in/vasil-nedelchev/" className="text-primary hover:underline">
                Vasil Nedelchev
              </a>
            </AppButton>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>
            Last updated: June 2025 • Data sources: Public records, VC reports, 
            company websites, and industry surveys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
