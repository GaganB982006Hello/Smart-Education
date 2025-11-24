import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Brain, Users, TrendingUp, Sparkles, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Space education" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-float">
              <Sparkles className="w-16 h-16 text-primary mb-4 mx-auto" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Smart Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Where Learning Meets Innovation
            </p>
            
            <p className="text-lg text-foreground/80 max-w-xl mx-auto">
              Experience AI-powered personalized learning. Adaptive courses, intelligent tutoring, and collaborative spaces designed for the future of education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="cosmic" className="text-lg">
                <Link to="/auth?role=student">
                  <GraduationCap className="w-5 h-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass" className="text-lg">
                <Link to="/auth?role=teacher">
                  <Users className="w-5 h-5" />
                  I'm a Teacher
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Powered by AI</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Intelligent Tutoring",
                description: "AI-powered personalized learning paths adapt to your unique style and pace"
              },
              {
                icon: TrendingUp,
                title: "Smart Analytics",
                description: "Real-time progress tracking with predictive insights for optimal learning"
              },
              {
                icon: Users,
                title: "Collaborative Spaces",
                description: "Connect with peers in interactive group learning environments"
              },
              {
                icon: Rocket,
                title: "Adaptive Assessment",
                description: "Dynamic quizzes that adjust difficulty based on your performance"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl hover:bg-card/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students and educators already experiencing the future of education
            </p>
            <Button asChild size="lg" variant="cosmic">
              <Link to="/auth">
                Get Started Free
                <Sparkles className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Smart Education - Team: Cosmo Hunters</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
