import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import Footer from "@/components/Footer";
import InnerPageHeader from "@/components/InnerPageHeader";

const Sources = () => {
  // Sources organized by category
  const sourcesByCategory = [
    {
      category: "Startup Ecosystem Reports",
      sources: [
        {
          name: "Bulgarian Startup Association (BESCO) Annual Report",
          url: "https://www.besco.bg"
        },
        {
          name: "Startup Genome Global Startup Ecosystem Report",
          url: "https://startupgenome.com/reports"
        },
        {
          name: "EU Startup Monitor",
          url: "http://startupmonitor.eu"
        },
        {
          name: "Dealroom.co Bulgaria Ecosystem Report",
          url: "https://dealroom.co"
        }
      ]
    },
    {
      category: "Venture Capital Data",
      sources: [
        {
          name: "LAUNCHub Ventures Portfolio",
          url: "https://launchub.com"
        },
        {
          name: "Eleven Ventures Portfolio",
          url: "https://11.me"
        },
        {
          name: "Vitosha Venture Partners Portfolio",
          url: "https://vitosha.vc"
        },
        {
          name: "BrightCap Ventures Portfolio",
          url: "https://brightcap.vc"
        },
        {
          name: "Bulgarian Private Equity and Venture Capital Association (BVCA)",
          url: "https://bvca.bg/en"
        }
      ]
    },
    {
      category: "Government & Policy",
      sources: [
        {
          name: "Ministry of Economy of Bulgaria",
          url: "https://www.mi.government.bg/en"
        },
        {
          name: "Bulgarian Small and Medium Enterprises Promotion Agency",
          url: "https://www.sme.government.bg/en"
        },
        {
          name: "InvestBulgaria Agency",
          url: "https://www.investbg.government.bg/en"
        },
        {
          name: "Sofia Tech Park",
          url: "https://sofiatech.bg/en"
        }
      ]
    },
    {
      category: "Talent & Education",
      sources: [
        {
          name: "Bulgarian Association of Software Companies (BASSCOM)",
          url: "https://www.basscom.org"
        },
        {
          name: "Digital Jobs Bulgaria",
          url: "https://digitaljobs.bg"
        },
        {
          name: "Sofia University",
          url: "https://www.uni-sofia.bg/eng"
        },
        {
          name: "Technical University of Sofia",
          url: "https://tu-sofia.bg/eng"
        },
        {
          name: "Telerik Academy",
          url: "https://www.telerikacademy.com"
        },
        {
          name: "SoftUni",
          url: "https://softuni.bg"
        }
      ]
    },
    {
      category: "Startup Communities & Events",
      sources: [
        {
          name: "StartUP@Blagoevgrad",
          url: "https://www.startupfoundation.bg"
        },
        {
          name: "Start It Smart",
          url: "https://www.startitsmart.com"
        },
        {
          name: "DigitalK Conference",
          url: "https://digitalk.bg"
        },
        {
          name: "DEV.BG",
          url: "https://dev.bg"
        },
        {
          name: "Women in Tech Bulgaria",
          url: "https://womenintech.bg"
        }
      ]
    },
    {
      category: "Media & Research",
      sources: [
        {
          name: "Trending Topics CEE",
          url: "https://www.trendingtopics.eu"
        },
        {
          name: "The Recursive",
          url: "https://therecursive.com"
        },
        {
          name: "EU-Startups",
          url: "https://www.eu-startups.com"
        },
        {
          name: "Innovation.bg",
          url: "https://www.innovation.bg"
        }
      ]
    },
    {
      category: "Coworking Spaces & Accelerators",
      sources: [
        {
          name: "PUZL CowOrKing",
          url: "https://puzl.com"
        },
        {
          name: "Betahaus Sofia",
          url: "https://sofia.betahaus.com"
        },
        {
          name: "Campus X",
          url: "https://campusx.company"
        },
        {
          name: "Eleven Accelerator",
          url: "https://11.me"
        },
        {
          name: "Innovation Capital",
          url: "https://innovationcapital.bg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InnerPageHeader title="Sources & References" />
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-inter flex items-center gap-2">
              <Link className="h-5 w-5" />
              Sources & References
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-muted-foreground">
              The StartupBG Dashboard is built using data from a variety of reputable sources. 
              This page provides a comprehensive list of all sources used in the research and 
              creation of this dashboard. All data is as recent as possible at the time of publication.
            </p>

            {sourcesByCategory.map((category, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-lg font-semibold border-b pb-2">{category.category}</h2>
                <ul className="space-y-2">
                  {category.sources.map((source, sourceIndex) => (
                    <li key={sourceIndex} className="flex items-start">
                      <span className="text-muted-foreground mr-2">•</span>
                      {source.url ? (
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {source.name}
                        </a>
                      ) : (
                        <span>{source.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-8 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Note: This dashboard is for informational purposes only. While we strive for accuracy, 
                data may change over time. If you notice any inaccuracies or have suggestions for 
                additional sources, please use the "Submit a Correction" link in the footer.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sources;
