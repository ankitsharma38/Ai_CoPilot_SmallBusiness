import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, TrendingUp, Mail, Image, Star, ArrowRight } from "lucide-react";

const aiTools = [
  {
    id: 1,
    name: "Smart Chatbot",
    description: "AI-powered customer service that never sleeps. Handle inquiries, bookings, and support automatically.",
    category: "Customer Service",
    rating: 4.9,
    price: "$29/month",
    icon: MessageSquare,
    features: ["24/7 Support", "Multi-language", "CRM Integration"],
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Sentiment Analyzer",
    description: "Understand customer emotions from reviews, emails, and social media. Get actionable insights instantly.",
    category: "Analytics",
    rating: 4.8,
    price: "$19/month",
    icon: TrendingUp,
    features: ["Real-time Analysis", "Emotion Detection", "Custom Reports"],
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Email Assistant",
    description: "Write professional emails, newsletters, and marketing content with AI. Boost engagement by 40%.",
    category: "Marketing",
    rating: 4.7,
    price: "$39/month",
    icon: Mail,
    features: ["Template Library", "A/B Testing", "Analytics Dashboard"],
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Visual Content Creator",
    description: "Generate professional images, logos, and marketing materials. No design skills needed.",
    category: "Design",
    rating: 4.9,
    price: "$49/month",
    icon: Image,
    features: ["HD Images", "Brand Guidelines", "Bulk Generation"],
    color: "bg-orange-500"
  }
];

const FeaturedTools = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured AI Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful AI solutions designed specifically for small businesses. 
            Each tool comes with simple APIs and comprehensive documentation.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{tool.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                    <span className="font-semibold text-primary">{tool.price}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Get API Key
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All AI Tools
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;