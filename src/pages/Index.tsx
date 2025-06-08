
import HeroCard from "@/components/HeroCard";
import StatsGrid from "@/components/StatsGrid";
import TimelineCard from "@/components/TimelineCard";
import FundingChart from "@/components/FundingChart";
import KeyPeopleCard from "@/components/KeyPeopleCard";
import StartupsGrid from "@/components/StartupsGrid";
import TalentSnapshot from "@/components/TalentSnapshot";
import PolicyCard from "@/components/PolicyCard";
import DeepTechCard from "@/components/DeepTechCard";
import DiversityCard from "@/components/DiversityCard";
import RegionalHubs from "@/components/RegionalHubs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <HeroCard />
          </div>
          <div className="lg:col-span-2">
            <StatsGrid />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-8">
          <TimelineCard />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <FundingChart />
            <TalentSnapshot />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <KeyPeopleCard />
            <StartupsGrid />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <PolicyCard />
            <DeepTechCard />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <DiversityCard />
            <RegionalHubs />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
