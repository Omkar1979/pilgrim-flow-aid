import { Link } from "react-router-dom";
import { Users, Shield, Bell, MapPin, Activity, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-temple.jpg";

const Index = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live crowd density tracking with AI-powered predictions"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Instant notifications for safety and queue updates"
    },
    {
      icon: MapPin,
      title: "Route Guidance",
      description: "Optimized pathways and parking assistance"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven forecasts for better crowd management"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Smart Pilgrimage
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Crowd Management
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow">
            AI-powered system for safe, efficient, and peaceful darshan experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/user">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white shadow-glow text-lg px-8 py-6 h-auto"
              >
                <Users className="mr-2 h-5 w-5" />
                Pilgrim Portal
              </Button>
            </Link>
            <Link to="/admin">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 h-auto shadow-elevated"
              >
                <Shield className="mr-2 h-5 w-5" />
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging AI, IoT, and real-time analytics for seamless crowd management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 border-border/50"
              >
                <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Live Monitoring</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">AI-Powered</div>
              <div className="text-xl opacity-90">Predictions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Real-Time</div>
              <div className="text-xl opacity-90">Alerts & Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            Smart Pilgrimage Crowd Management System | Built for Safety, Efficiency, and Peace
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Powered by AI, IoT, and Real-Time Analytics
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
