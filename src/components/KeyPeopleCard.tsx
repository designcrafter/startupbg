
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const keyPeople = [
  {
    name: "Svetozar Georgiev",
    title: "Co-founder & Managing Partner",
    organization: "LAUNCHub Ventures",
    bio: "Pioneer of Bulgarian VC ecosystem. Leading early-stage investments since 2012.",
    initials: "SG"
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
    initials: "PR"
  }
];

const KeyPeopleCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-roboto-slab">Key People</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {keyPeople.map((person, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {person.title} at {person.organization}
                </p>
                <p className="text-sm">{person.bio}</p>
                <Button variant="outline" size="sm" className="rounded-full mt-2">
                  View on LinkedIn
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyPeopleCard;
