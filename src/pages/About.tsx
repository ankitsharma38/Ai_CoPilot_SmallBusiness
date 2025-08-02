import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Accessibility First",
      description: "We believe powerful AI should be accessible to every business owner, regardless of technical background."
    },
    {
      icon: Target,
      title: "Business-Focused",
      description: "Every tool is designed with real business needs in mind, delivering measurable value from day one."
    },
    {
      icon: Lightbulb,
      title: "Innovation Made Simple",
      description: "We take complex AI technology and make it as simple as using any other business tool."
    }
  ];

  const features = [
    "No-code API integration",
    "24/7 customer support",
    "Enterprise-grade security",
    "Comprehensive documentation",
    "Scalable pricing plans",
    "Regular tool updates"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              About SmallAI Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Democratizing AI for 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Small Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to level the playing field by giving small businesses 
              access to the same AI capabilities that large corporations use, 
              without the complexity or massive budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Small businesses are the backbone of the economy, yet they often lack access 
                to cutting-edge technology that could transform their operations. We bridge 
                that gap by providing enterprise-level AI tools through simple, 
                affordable APIs.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a restaurant owner who wants to automate customer service, 
                a retailer looking to understand customer sentiment, or a service provider 
                needing better marketing content, we have the AI tools to help you compete 
                and thrive in today's digital economy.
              </p>
              <Button variant="hero" size="lg">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every tool we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-0 shadow-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Problem We're Solving
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-destructive">
                  Before SmallAI Hub
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 shrink-0"></div>
                    <span>Small businesses couldn't afford custom AI development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 shrink-0"></div>
                    <span>Complex technical setup required developers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 shrink-0"></div>
                    <span>No unified platform for multiple AI needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 shrink-0"></div>
                    <span>Limited support and documentation</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-success">
                  With SmallAI Hub
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
                    <span>Affordable monthly subscriptions for any budget</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
                    <span>Simple API keys - no technical expertise needed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
                    <span>One platform for all your AI tool needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
                    <span>Comprehensive guides and 24/7 support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of small businesses already using AI to grow, 
              automate, and compete in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Explore AI Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;