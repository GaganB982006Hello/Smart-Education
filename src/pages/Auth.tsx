import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roleParam = searchParams.get("role") || "student";
  const [role, setRole] = useState<"student" | "teacher">(roleParam as "student" | "teacher");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Logging in as ${role}...`);
    // For now, redirect to the appropriate dashboard
    setTimeout(() => {
      navigate(role === "student" ? "/student/dashboard" : "/teacher/dashboard");
    }, 500);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Creating ${role} account...`);
    setTimeout(() => {
      navigate(role === "student" ? "/student/dashboard" : "/teacher/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <Card className="glass border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gradient">
              Smart Education
            </CardTitle>
            <CardDescription>
              Join the future of learning
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="flex gap-2">
              <Button
                variant={role === "student" ? "cosmic" : "glass"}
                className="flex-1"
                onClick={() => setRole("student")}
              >
                <GraduationCap className="w-4 h-4" />
                Student
              </Button>
              <Button
                variant={role === "teacher" ? "cosmic" : "glass"}
                className="flex-1"
                onClick={() => setRole("teacher")}
              >
                <Users className="w-4 h-4" />
                Teacher
              </Button>
            </div>

            {/* Login/Signup Tabs */}
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 glass">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <Button type="submit" variant="cosmic" className="w-full">
                    Login as {role}
                  </Button>
                  <Link to="/auth/forgot" className="text-sm text-primary hover:underline block text-center">
                    Forgot password?
                  </Link>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <Button type="submit" variant="cosmic" className="w-full">
                    Create {role} Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
