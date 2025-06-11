
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppButton } from "@/components/ui/app-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

// Expanded list of key people in the Bulgarian startup ecosystem
const keyPeople = [
  {
    name: "Svetozar Georgiev",
    title: "Co-founder & Managing Partner",
    organization: "LAUNCHub Ventures",
    bio: "Pioneer of Bulgarian VC ecosystem. Leading early-stage investments since 2012.",
    initials: "SG",
    linkedin: "https://www.linkedin.com/in/svetozar-georgiev/",
    image: "/key-people/Svetozar-Georgiev.avif"
  },
  {
    name: "Lyuben Belov",
    title: "Co-founder & Managing Partner",
    organization: "LAUNCHub Ventures",
    bio: "Early investor in many successful Bulgarian startups. Focused on seed and Series A investments.",
    initials: "LB",
    linkedin: "https://bg.linkedin.com/in/lyubenbelov",
    image: "/key-people/Lyuben-Belov.jpeg"
  },
  {
    name: "Daniel Tomov",
    title: "Managing Partner",
    organization: "Eleven Ventures",
    bio: "Leading early-stage investments across CEE. Focused on fintech and enterprise software.",
    initials: "DT",
    linkedin: "https://bg.linkedin.com/in/danieltomov",
    image: "/key-people/Daniel-Tomov.jpeg"
  },
  {
    name: "Ivaylo Simov",
    title: "Managing Partner",
    organization: "Eleven Ventures",
    bio: "Experienced investor with focus on B2B SaaS and marketplace startups in the region.",
    initials: "IS",
    linkedin: "https://bg.linkedin.com/in/ivaylo-simov-3785801",
    image: "/key-people/Ivaylo-Simov.jpeg"
  },
  {
    name: "Ivan Vachkov",
    title: "Co-founder",
    organization: "Eleven Ventures",
    bio: "Experienced investor with focus on B2B SaaS and marketplace startups in the region.",
    initials: "IV",
    linkedin: "https://bg.linkedin.com/in/ivachkov",
    image: "/key-people/Ivo-Vachkov.jpeg"
  },
  {
    name: "Hristo Hristov",
    title: "CEO & Co-founder",
    organization: "Payhawk",
    bio: "Built Bulgaria's first fintech unicorn. Previously at Telerik and Progress Software.",
    initials: "HH",
    linkedin: "https://bg.linkedin.com/in/hristohristov"
  },
  {
    name: "Boyko Karadzhov",
    title: "Co-founder & CTO",
    organization: "Payhawk",
    bio: "Technical leader behind Bulgaria's fastest-growing fintech.",
    initials: "BK",
    linkedin: "https://bg.linkedin.com/in/boyko-karadzhov-4386a879",
    image: "/key-people/Boyko-Karadzhov.jpeg"
  },
  {
    name: "Boyko Iaramov",
    title: "Co-founder & CEO",
    organization: "Campus X",
    bio: "Created Sofia's largest tech community hub. Former COO at Telerik Academy.",
    initials: "BI",
    linkedin: "https://bg.linkedin.com/in/boyko-yaramov",
    image: "/key-people/Boyko-Iaramov.avif"
  },
  {
    name: "Peter Brodsky",
    title: "Co-founder & CEO",
    organization: "Hyperscience",
    bio: "Built Bulgaria's largest AI company with over $250M in funding.",
    initials: "PB"
  },
  {
    name: "Martin Raychev",
    title: "Founder",
    organization: "Eleven Ventures",
    bio: "Former PayPal executive. Building the next generation of Bulgarian tech companies.",
    initials: "MR"
  },
  {
    name: "Lachezar Arabadzhiev",
    title: "CEO & Co-founder",
    organization: "ScaleFocus",
    bio: "Tech entrepreneur and angel investor. Active in mentoring startup founders.",
    initials: "LA"
  },
  {
    name: "Petya Raykovska",
    title: "Partner",
    organization: "LAUNCHub Ventures",
    bio: "Expert in fintech and SaaS investments. Driving diversity initiatives in tech.",
    initials: "PR",
    linkedin: ""
  },
  {
    name: "Vassil Terziev",
    title: "Co-founder",
    organization: "Telerik",
    bio: "Serial entrepreneur and investor. Built Bulgaria's first tech unicorn.",
    initials: "VT",
    linkedin: "",
    image: "/key-people/Vassil-Terziev.jpg"
  },
  {
    name: "Svilen Rangelov",
    title: "Co-founder & CEO",
    organization: "Dronamics",
    bio: "Pioneering cargo drone delivery. Raised over €50M in funding.",
    initials: "SR"
  },
  {
    name: "Konstantin Djengozov",
    title: "Co-founder & CEO",
    organization: "Gtmhub",
    bio: "Built leading OKR platform with over $140M in funding.",
    initials: "KD",
    linkedin: "https://bg.linkedin.com/in/konstantin-dzhengozov-21435a21",
    image: "/key-people/Konstantin-Dzhengozov.jpeg"
  },
  {
    name: "Hristo Borisov",
    title: "Co-founder & CEO",
    organization: "Payhawk",
    bio: "Built Bulgaria's fastest-growing fintech. Forbes 30 Under 30 Europe.",
    initials: "HB",
    linkedin: "https://bg.linkedin.com/in/hristoborisov",
    image: "/key-people/Hristo-Borisov.jpeg"
  },
  {
    name: "Elena Nikolova",
    title: "Community Manager",
    organization: "Bulgarian Angels Club",
    bio: "Building communities in the Bulgarian startup ecosystem.",
    initials: "EN",
    linkedin: "https://www.linkedin.com/in/elenakrnikolova/",
    image: "/key-people/Elena-Nikolova.jpeg"
  },
  {
    name: "Galina Antova",
    title: "Co-founder",
    organization: "Claroty",
    bio: "Cybersecurity expert and entrepreneur with global impact.",
    initials: "GA",
    linkedin: "",
    image: "/key-people/Galina-Antova.jpeg"
  },
  {
    name: "Stephane Gantchev",
    title: "Partner",
    organization: "LAUNCHub Ventures",
    bio: "Experienced investor with focus on deeptech and enterprise software.",
    initials: "SG",
    linkedin: "https://bg.linkedin.com/in/sgantchev",
    image: "/key-people/Stephane-Gantchev.jpeg"
  },
  {
    name: "George Brashnarov",
    title: "Board Member",
    organization: "Bulgarian Angels Club",
    bio: "Leading one of Bulgaria's most established software companies.",
    initials: "GB",
    linkedin: "https://bg.linkedin.com/in/georgebrashnarov",
    image: "/key-people/George-Brashnarov.jpeg"
  },
  {
    name: "Galin Stefanov",
    title: "Founder",
    organization: "Varnapreneurs",
    bio: "Building startup communities in Varna and beyond.",
    initials: "GS",
    linkedin: "https://www.linkedin.com/in/galinstefanov/",
    image: "/key-people/Galin-Stefanov.jpeg"
  },
  {
    name: "Ivo Evgeniev",
    title: "Co-founder",
    organization: "BULPROS & Angel Investor",
    bio: "Experienced entrepreneur and investor in the Bulgarian tech ecosystem.",
    initials: "IE",
    linkedin: "https://bg.linkedin.com/in/ivo-evgeniev-b22356",
    image: "/key-people/Ivo-Evgeniev.png"
  },
  {
    name: "Alexander Lefterov",
    title: "Angel Investor & Accelerator Founder",
    organization: "",
    bio: "Supporting early-stage startups in the Bulgarian ecosystem.",
    initials: "AL",
    linkedin: "https://bg.linkedin.com/in/alexander-lefterov-6308656",
    image: "/key-people/Alexander-Lefterov.jpeg"
  },
  {
    name: "Svetlin Nakov",
    title: "Co-founder",
    organization: "SoftUni",
    bio: "Leading tech education in Bulgaria. Trained thousands of software engineers.",
    initials: "SN",
    linkedin: "https://bg.linkedin.com/in/nakov",
    image: "/key-people/Svetlin-Nakov.jpeg"
  },
  {
    name: "Milen Ivanov",
    title: "Founder & CEO",
    organization: "Bulgarian Angels Club",
    bio: "Building angel investor networks in Bulgaria.",
    initials: "MI",
    linkedin: "https://bg.linkedin.com/in/milenivanov",
    image: "/key-people/Milen-Ivanov.jpeg"
  },
  {
    name: "Bogomil Balkansky",
    title: "Partner",
    organization: "Sequoia Capital",
    bio: "Bulgarian-born Silicon Valley VC supporting global tech innovation.",
    initials: "BB",
    linkedin: "",
    image: "/key-people/Bogomil-Balkansky.jpeg"
  },
  {
    name: "Natanail Stefanov",
    title: "Co-founder & CTO",
    organization: "Hyperscience",
    bio: "Technical leader behind Bulgaria's largest AI company.",
    initials: "NS",
    linkedin: "",
    image: "/key-people/Natanail-Stefanov.jpeg"
  },
  {
    name: "Ivan Ginev",
    title: "Founder & Creative Director",
    organization: "Cog Graphics",
    bio: "Leading creative design for Bulgarian tech companies.",
    initials: "IG",
    linkedin: "https://www.linkedin.com/posts/ivgin",
    image: "/key-people/Ivan-Ginev.jpeg"
  },
  {
    name: "Todor Breshkov",
    title: "Founding Partner",
    organization: "LAUNCHub Ventures",
    bio: "Venture capital investor focused on Series A and growth-stage companies.",
    initials: "TB",
    linkedin: "https://bg.linkedin.com/in/breshkov",
    image: "/key-people/Todor-Breshkov.jpeg"
  },
  {
    name: "Irina Dimitrova",
    title: "Partner & CFO",
    organization: "LAUNCHub Ventures",
    bio: "Financial expert supporting Bulgarian startups and scale-ups.",
    initials: "ID",
    linkedin: "https://cy.linkedin.com/in/irina-dimitrova-27a945216",
    image: "/key-people/Irina-Dimitrova.jpeg"
  },
  {
    name: "Max Gurvits",
    title: "Co-founder & Managing Partner",
    organization: "Vitosha Venture Partners",
    bio: "International investor supporting Bulgarian startups with global ambitions.",
    initials: "MG",
    linkedin: "https://bg.linkedin.com/in/maxgurvits",
    image: "/key-people/Max-Gurvits.jpeg"
  },
  {
    name: "Marin Iliev",
    title: "Managing Partner",
    organization: "Vitosha Venture Partners",
    bio: "Supporting early-stage Bulgarian startups with strategic investments.",
    initials: "MI",
    linkedin: "https://bg.linkedin.com/in/mariniliev",
    image: "/key-people/Marin-Iliev.jpeg"
  },
  {
    name: "Plamen Ivanov",
    title: "Co-founder & CEO",
    organization: "Imagga",
    bio: "Computer vision expert. Built AI image recognition used by Fortune 500 companies.",
    initials: "PI",
    linkedin: "",
    image: "/key-people/Plamen-Ivanov.jpeg"
  },
  {
    name: "Stoyan Nedin",
    title: "Managing Partner",
    organization: "Vitosha Venture Partners",
    bio: "Leading tech investments in Bulgaria's startup ecosystem.",
    initials: "SN",
    linkedin: "https://bg.linkedin.com/in/stoyan-nedin-736a492",
    image: "/key-people/Stoyan-Nedin.jpeg"
  },
  {
    name: "Daniel Dungyov",
    title: "Senior Product Design Manager",
    organization: "CleverTap",
    bio: "Product design expert from the Bulgarian tech ecosystem.",
    initials: "DD",
    linkedin: "https://bg.linkedin.com/in/daniel-dungyov",
    image: "/key-people/Daniel-Dungyov .jpeg"
  }
];

const KeyPeopleCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Show only top 5 people in the main view
  const topPeople = keyPeople.slice(0, 5);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Users className="h-5 w-5 text-primary" />
        <CardTitle className="font-roboto-slab">Key People</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {topPeople.map((person, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent">
              <Avatar className="h-12 w-12">
                {person.image && <AvatarImage src={person.image} alt={person.name} />}
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{person.name}</h4>
                  {person.linkedin ? (
                    <AppButton variant="secondary" size="sm" asChild>
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </AppButton>
                  ) : (
                    <AppButton variant="secondary" size="sm" disabled>
                      LinkedIn
                    </AppButton>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {person.title} at {person.organization}
                </p>
                <p className="text-sm">{person.bio}</p>
              </div>
            </div>
          ))}
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <AppButton variant="ghost" className="w-full">
                See All Key People
              </AppButton>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg mb-4">Key People</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {keyPeople.map((person, index) => (
                  <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
                    <div className="p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <Avatar className="h-12 w-12">
                          {person.image && <AvatarImage src={person.image} alt={person.name} />}
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {person.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-base font-semibold">{person.name}</h3>
                          <p className="text-xs text-muted-foreground">{person.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{person.organization}</p>
                      <p className="text-sm mt-2 mb-3">{person.bio}</p>
                      <div className="mt-auto">
                        {person.linkedin ? (
                          <AppButton variant="secondary" size="sm" asChild className="w-full">
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                              LinkedIn
                            </a>
                          </AppButton>
                        ) : (
                          <AppButton variant="secondary" size="sm" disabled className="w-full">
                            LinkedIn
                          </AppButton>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyPeopleCard;
