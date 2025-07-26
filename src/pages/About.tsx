import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Rocket, Users, Globe, FileText, AlertCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="min-h-screen bg-background">

      
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="my-12">
          <h1 className="text-3xl font-bold">About STARTUPBG</h1>
          <p className="text-muted-foreground mt-1">A simple way to see what's going on in the Bulgarian startup scene.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The Why */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">The Why</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I'm Bulgarian, but most of my work with startups has been outside Bulgaria. I realized I didn't know much about the local scene — so I built this to fix that. It's a personal project to learn more, map it out, and share what I find.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 2: Who It's For */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Who It's For</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Founders, investors, and anyone curious about tech in Bulgaria. If you want a quick sense of who's building what, this is for you.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 3: What's Inside */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">What's Inside</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A growing list of startups, investors, and key people. Focus is on tech and growth-stage companies, but I'm adding more as I go.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 4: About Me */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">About Me</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I'm Vasil Nedelchev. I've spent nearly 20 years designing and building b2b software products, mostly for companies outside of Bulgaria. This is my way of reconnecting with the local tech world.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 5: Data Sources */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Data Sources</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Everything comes from public info — company sites, news articles, social media, and reports. I try to cross-check whenever possible. Full source list is <Link to="/sources" className="text-blue-600 hover:underline">here</Link>.
              </p>
            </CardContent>
          </Card>
          
          {/* Card 6: Spot a Mistake */}
          <Card className="overflow-hidden border-muted hover:border-muted-foreground/20 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Spot a Mistake?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Let me know — just click the "Got ideas / fixes?" link above.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
