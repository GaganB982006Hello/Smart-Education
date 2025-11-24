import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, PlayCircle, FileText, Video, Lightbulb } from "lucide-react";

const Tutoring = () => {
  const lessons = [
    {
      id: 1,
      title: "Understanding Neural Networks",
      type: "video",
      duration: "15 min",
      difficulty: "Intermediate",
      recommended: true,
    },
    {
      id: 2,
      title: "Practice: Backpropagation",
      type: "exercise",
      duration: "30 min",
      difficulty: "Advanced",
      recommended: true,
    },
    {
      id: 3,
      title: "Deep Learning Fundamentals",
      type: "reading",
      duration: "10 min",
      difficulty: "Beginner",
      recommended: false,
    },
  ];

  const feedback = [
    { id: 1, topic: "Calculus", message: "Great progress! Try more practice problems.", type: "success" },
    { id: 2, topic: "Physics", message: "Review the concept of momentum.", type: "warning" },
  ];

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Intelligent Tutoring</h1>
          <p className="text-muted-foreground">AI-powered personalized learning recommendations</p>
        </div>

        {/* AI Feedback */}
        <Card className="glass border-primary/50 shadow-glow-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-warning animate-pulse" />
              Real-Time Learning Insights
            </CardTitle>
            <CardDescription>Your AI tutor has analyzed your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {feedback.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg ${
                  item.type === "success" ? "bg-success/10 border border-success/30" : "bg-warning/10 border border-warning/30"
                }`}
              >
                <h4 className="font-medium mb-1">{item.topic}</h4>
                <p className="text-sm">{item.message}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Lessons */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map((lesson) => (
              <Card key={lesson.id} className={`glass ${lesson.recommended ? "border-primary/50" : ""}`}>
                <CardHeader>
                  {lesson.recommended && (
                    <Badge className="w-fit mb-2 bg-gradient-cosmic">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Recommended
                    </Badge>
                  )}
                  <CardTitle className="text-lg">{lesson.title}</CardTitle>
                  <CardDescription>
                    {lesson.duration} • {lesson.difficulty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    {lesson.type === "video" && <Video className="w-4 h-4 text-primary" />}
                    {lesson.type === "exercise" && <Lightbulb className="w-4 h-4 text-warning" />}
                    {lesson.type === "reading" && <FileText className="w-4 h-4 text-secondary" />}
                    <span className="text-sm text-muted-foreground capitalize">{lesson.type}</span>
                  </div>
                  <Button variant="cosmic" className="w-full">
                    <PlayCircle className="w-4 h-4" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Study Plan */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Your Adaptive Study Plan</CardTitle>
            <CardDescription>Personalized based on your learning style and pace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Monday", topic: "Advanced Algebra", status: "completed" },
                { day: "Tuesday", topic: "Quantum Mechanics", status: "in-progress" },
                { day: "Wednesday", topic: "Data Structures", status: "upcoming" },
                { day: "Thursday", topic: "Machine Learning Basics", status: "upcoming" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{item.day}</p>
                    <p className="text-sm text-muted-foreground">{item.topic}</p>
                  </div>
                  <Badge
                    variant={
                      item.status === "completed"
                        ? "default"
                        : item.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Tutoring;
