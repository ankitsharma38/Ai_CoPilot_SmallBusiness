import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, TrendingUp, Mail, Image, Star, Search, Filter } from "lucide-react";

const allTools = [
  {
    id: 1,
    name: "Smart Chatbot",
    description: "AI-powered customer service that never sleeps. Handle inquiries, bookings, and support automatically with advanced natural language processing.",
    category: "Customer Service",
    rating: 4.9,
    reviews: 234,
    price: "$29/month",
    icon: MessageSquare,
    features: ["24/7 Support", "Multi-language", "CRM Integration", "Analytics Dashboard"],
    color: "bg-blue-500",
    popular: true
  },
  {
    id: 2,
    name: "Sentiment Analyzer",
    description: "Understand customer emotions from reviews, emails, and social media. Get actionable insights instantly with real-time analysis.",
    category: "Analytics",
    rating: 4.8,
    reviews: 156,
    price: "$19/month",
    icon: TrendingUp,
    features: ["Real-time Analysis", "Emotion Detection", "Custom Reports", "API Integration"],
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Email Assistant",
    description: "Write professional emails, newsletters, and marketing content with AI. Boost engagement by 40% with personalized content.",
    category: "Marketing",
    rating: 4.7,
    reviews: 189,
    price: "$39/month",
    icon: Mail,
    features: ["Template Library", "A/B Testing", "Analytics Dashboard", "Personalization"],
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Visual Content Creator",
    description: "Generate professional images, logos, and marketing materials. No design skills needed - just describe what you want.",
    category: "Design",
    rating: 4.9,
    reviews: 298,
    price: "$49/month",
    icon: Image,
    features: ["HD Images", "Brand Guidelines", "Bulk Generation", "Commercial License"],
    color: "bg-orange-500",
    popular: true
  },
  {
    id: 5,
    name: "Text Summarizer",
    description: "Automatically summarize long documents, articles, and reports. Save hours of reading with intelligent content extraction.",
    category: "Productivity",
    rating: 4.6,
    reviews: 145,
    price: "$15/month",
    icon: MessageSquare,
    features: ["Multiple Formats", "Key Points", "Custom Length", "Batch Processing"],
    color: "bg-cyan-500"
  },
  {
    id: 6,
    name: "Voice Translator",
    description: "Real-time voice translation for customer calls and meetings. Support for 50+ languages with high accuracy.",
    category: "Communication",
    rating: 4.8,
    reviews: 167,
    price: "$35/month",
    icon: MessageSquare,
    features: ["50+ Languages", "Real-time", "Call Recording", "Transcription"],
    color: "bg-red-500"
  }
];

const categories = ["All", "Customer Service", "Analytics", "Marketing", "Design", "Productivity", "Communication"];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Tools <span className="bg-gradient-hero bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover powerful AI solutions designed for small businesses. 
              Each tool comes with simple APIs, documentation, and dedicated support.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search AI tools..." 
                  className="pl-10 h-12"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48 h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 relative overflow-hidden">
                  {tool.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl mb-3">{tool.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{tool.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({tool.reviews} reviews)</span>
                      </div>
                      <span className="font-bold text-lg text-primary">{tool.price}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                      {tool.features.length > 3 && (
                        <div className="text-xs text-muted-foreground ml-4">
                          +{tool.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="w-full"
                      >
                        Get API Key
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-xs"
                      >
                        View Details & Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;