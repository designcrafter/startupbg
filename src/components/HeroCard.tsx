import { Card, CardContent } from "@/components/ui/card";
const HeroCard = () => {
  return <Card className="h-full bg-gradient-to-br from-primary to-gray-800 text-primary-foreground">
      <CardContent className="p-8 h-full flex flex-col justify-center">
        <h1 className="font-pixelify text-4xl font-bold mb-4 leading-tight lg:text-2xl">
          StartupBG.com
        </h1>
        <p className="font-roboto-slab text-xl lg:text-2xl mb-6 opacity-90">
          The State of the Bulgarian Startup Ecosystem
        </p>
        <div className="space-y-2 text-sm opacity-80">
          <p>Comprehensive data and insights</p>
          <p>Updated regularly with the latest metrics</p>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-xs opacity-70">
            Built by <span className="font-medium">Vasil Nedelchev</span>
          </p>
        </div>
      </CardContent>
    </Card>;
};
export default HeroCard;