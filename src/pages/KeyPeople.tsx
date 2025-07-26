import { AppButton } from "@/components/ui/app-button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";


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
    image: "/key-people/Vassil-Terziev.jpeg"
  },
  {
    name: "Konstantin Dzhengozov",
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
    linkedin: "https://bg.linkedin.com/in/george-brashnarov-b1a1b91",
    image: "/key-people/George-Brashnarov.jpeg"
  },
  {
    name: "Alexander Lefterov",
    title: "Angel Investor",
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
    linkedin: "https://bg.linkedin.com/in/todor-breshkov-5b8b4b1",
    image: "/key-people/Todor-Breshkov.jpeg"
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
  }
];

const KeyPeople = () => {
  return (
    <div className="min-h-screen bg-background">

      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Key People</h1>
          <p className="text-muted-foreground mt-1">Influential leaders shaping the Bulgarian startup ecosystem</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyPeople.map((person, index) => (
            <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-16 w-16 flex-shrink-0">
                    {person.image && <AvatarImage src={person.image} alt={person.name} />}
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{person.title}</p>
                    {person.organization && (
                      <p className="text-sm text-muted-foreground font-medium">{person.organization}</p>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {person.bio}
                </p>
                
                {person.linkedin ? (
                  <AppButton size="sm" variant="secondary" asChild className="w-full">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </AppButton>
                ) : (
                  <AppButton size="sm" variant="secondary" disabled className="w-full">
                    LinkedIn Profile
                  </AppButton>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyPeople;
