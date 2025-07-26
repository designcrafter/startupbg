
import { Card, CardContent } from "@/components/ui/card";

const HeroCard = () => {
  return (
    <Card className="h-full bg-blue-800 text-white">
      <CardContent className="p-8 h-full flex flex-col justify-center">
        <h1 className="text-xl lg:text-2xl mb-6 opacity-90 uppercase">
        WHAT'S GOING ON IN THE BULGARIAN STARTUP SCENE?
        </h1>
        <div className="space-y-2 text-sm opacity-80">
          <p>Collected and build with AI, for fun. Static snapshot for now — updates maybe later.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20">
          <a 
            href="https://www.linkedin.com/in/vasil-nedelchev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white text-xs py-2 px-6 rounded-full transition-colors"
          >
            Built by Vasil Nedelchev
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
