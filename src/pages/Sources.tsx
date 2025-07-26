import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, FileText } from "lucide-react";
import Footer from "@/components/Footer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="my-12">
          <h1 className="text-3xl font-bold">Source List</h1>
          <p className="text-muted-foreground mt-1">Data sources and methodology behind the dashboard</p>
        </div>
        <Card>
        <CardHeader></CardHeader>
          <CardContent>
            <Tabs defaultValue="sources" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="sources">Source List</TabsTrigger>
                <TabsTrigger value="methodology">Data Methodology</TabsTrigger>
              </TabsList>             
              <TabsContent value="sources" className="space-y-8">
                <p className="text-muted-foreground mb-8">
                  The StartupBG Dashboard is built using data from a variety of reputable sources. 
                  This page provides a comprehensive list of all sources used in the research and 
                  creation of this dashboard. All data is as recent as possible at the time of publication.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sourcesByCategory.map((category, index) => (
                    <div key={index} className="space-y-4 border rounded-lg p-4 h-full">
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
                </div>
              </TabsContent>
              
              <TabsContent value="methodology" className="space-y-6">
                <div className="flex items-start gap-3 mb-6">
                  <div>
                    <p className="text-muted-foreground">
                      Our dashboard presents data collected through a rigorous methodology designed to ensure accuracy and relevance.
                      Below we outline our approach to data collection, verification, and presentation.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-5 space-y-3">
                    <h3 className="font-medium border-b pb-2">Data Sources</h3>
                    <p className="text-muted-foreground">
                      We collect data from multiple sources including official government reports, industry associations, 
                      venture capital disclosures, company websites, and trusted media publications. All sources are 
                      listed in the Source List tab for transparency.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-5 space-y-3">
                    <h3 className="font-medium border-b pb-2">Data Verification Process</h3>
                    <p className="text-muted-foreground">
                      Each data point undergoes a three-step verification process:
                    </p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>Initial collection from primary sources when available</li>
                      <li>Cross-reference with at least one secondary source</li>
                      <li>Expert review by industry professionals</li>
                    </ol>
                  </div>
                  
                  <div className="border rounded-lg p-5 space-y-3">
                    <h3 className="font-medium border-b pb-2">Data Categorization</h3>
                    <p className="text-muted-foreground">
                      Startups are categorized based on:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                      <li>Industry sector (following standard industry classification)</li>
                      <li>Funding stage (pre-seed, seed, Series A, B, C+)</li>
                      <li>Geographic location (by city/region)</li>
                      <li>Year founded</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-5 space-y-3">
                    <h3 className="font-medium border-b pb-2">Funding Data</h3>
                    <p className="text-muted-foreground">
                      Funding amounts are reported in EUR and represent disclosed investment rounds. 
                      Undisclosed rounds are noted but not included in total calculations. 
                      Valuations are based on the most recent funding round or publicly available information.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-5 space-y-3 md:col-span-2">
                    <h3 className="font-medium border-b pb-2">Updates and Corrections</h3>
                    <p className="text-muted-foreground">
                      The dashboard is updated quarterly with new data. Corrections are made on an ongoing basis 
                      as new information becomes available. The last update date is displayed in the footer of each page.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Note: This dashboard is for informational purposes only. While we strive for accuracy, 
                data may change over time. If you notice any inaccuracies or have suggestions for 
                additional sources, please use the "Submit Feedback" link in the navigation.
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
