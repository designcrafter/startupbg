import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AppButton } from "@/components/ui/app-button";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Footer from "@/components/Footer";


// FORMSPREE SETUP INSTRUCTIONS:
// 1. Go to https://formspree.io and sign up for a free account
// 2. Create a new form and get your form ID (it will look like "xrgjaezb")
// 3. Replace "YOUR_FORM_ID" in the formspreeEndpoint below with your actual form ID
// 4. Formspree free tier allows 50 submissions per month, which should be enough for most small projects
// 5. You'll receive form submissions directly to your email without any server setup

const Correction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    section: "",
    correction: ""
  });
  
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.correction) {
      setFormState("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    
    setFormState("submitting");
    
    try {
      // Use Formspree to handle the form submission
      const formspreeEndpoint = "https://formspree.io/f/meokgzjq";
      
      const formspreeData = {
        name: formData.name,
        email: formData.email,
        section: formData.section || 'General',
        correction: formData.correction,
        _subject: `StartupBG Dashboard Correction: ${formData.section || 'General'}`
      };
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formspreeData)
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
      
      setFormState("success");
    } catch (error) {
      setFormState("error");
      setErrorMessage("There was an error submitting your correction. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };
  
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      section: "",
      correction: ""
    });
    setFormState("idle");
  };
  
  const dashboardSections = [
    { value: "general", label: "General Information" },
    { value: "funding", label: "Funding Overview" },
    { value: "talent", label: "Tech Talent" },
    { value: "keyPeople", label: "Key People" },
    { value: "startups", label: "Startups" },
    { value: "policy", label: "Policy & Regulation" },
    { value: "deepTech", label: "Deep Tech" },
    { value: "diversity", label: "Diversity" },
    { value: "regionalHubs", label: "Regional Hubs" },
    { value: "challenges", label: "Challenges (Red Flags)" },
    { value: "advantages", label: "Advantages" }
  ];
  
  return (
    <div className="min-h-screen bg-background">

      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Got ideas/fixes?</h1>
          <p className="text-muted-foreground mt-1">Help me improve the dashboard by submitting idea or fix</p>
        </div>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardContent>
            {formState === "success" ? (
              <div className="space-y-4">
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Thank you for your submission!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your idea/fix has been sent to our team. We appreciate your contribution to making the StartupBG Dashboard more accurate.
                  </AlertDescription>
                </Alert>
                <div className="flex justify-center mt-6">
                  <AppButton onClick={resetForm}>Submit Another Correction</AppButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formState === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="section">Dashboard Section</Label>
                  <select 
                    id="section" 
                    name="section" 
                    value={formData.section} 
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a section (optional)</option>
                    {dashboardSections.map((section) => (
                      <option key={section.value} value={section.value}>
                        {section.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="correction">Idea/fix Details <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="correction" 
                    name="correction" 
                    value={formData.correction} 
                    onChange={handleChange} 
                    placeholder="Please describe the correction or update needed. Include as much detail as possible."
                    rows={6}
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <AppButton 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className="flex items-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send
                      </>
                    )}
                  </AppButton>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Correction;
