import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle2, Lock, PlayCircle, Clock } from "lucide-react";

const Learning = () => {
  const learningPath = [
    {
      id: 1,
      title: "Mathematics Fundamentals",
      modules: 12,
      completed: 12,
      status: "completed",
      locked: false,
    },
    {
      id: 2,
      title: "Advanced Calculus",
      modules: 15,
      completed: 8,
      status: "in-progress",
      locked: false,
    },
    {
      id: 3,
      title: "Linear Algebra",
      modules: 10,
      completed: 0,
      status: "upcoming",
      locked: false,
    },
    {
      id: 4,
      title: "Differential Equations",
      modules: 14,
      completed: 0,
      status: "locked",
      locked: true,
    },
  ];

  const currentCourse = {
    title: "Advanced Calculus",
    progress: 53,
    modules: [
      { id: 1, title: "Limits and Continuity", completed: true },
      { id: 2, title: "Derivatives", completed: true },
      { id: 3, title: "Integration Techniques", completed: false, current: true },
      { id: 4, title: "Series and Sequences", completed: false },
      { id: 5, title: "Multivariable Calculus", completed: false },
    ],
  };

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Personalized Learning Path</h1>
          <p className="text-muted-foreground">Your adaptive journey through education</p>
        </div>

        {/* Current Course */}
        <Card className="glass border-primary/50 shadow-glow-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{currentCourse.title}</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </div>
              <Badge variant="secondary">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Course Progress</span>
                <span className="font-bold">{currentCourse.progress}%</span>
              </div>
              <Progress value={currentCourse.progress} className="h-2" />
            </div>

            <div className="space-y-2">
              {currentCourse.modules.map((module) => (
                <div
                  key={module.id}
                  className={`p-3 rounded-lg flex items-center justify-between ${
                    module.current
                      ? "bg-primary/10 border border-primary/30"
                      : module.completed
                      ? "bg-muted/50"
                      : "bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        module.completed
                          ? "bg-success"
                          : module.current
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    >
                      {module.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-xs font-bold">{module.id}</span>
                      )}
                    </div>
                    <span className={module.current ? "font-medium" : ""}>{module.title}</span>
                  </div>
                  {module.current && (
                    <Button size="sm" variant="cosmic">
                      <PlayCircle className="w-4 h-4" />
                      Continue
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Complete Learning Path</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {learningPath.map((course) => (
              <Card
                key={course.id}
                className={`glass ${
                  course.status === "in-progress" ? "border-primary/50" : ""
                } ${course.locked ? "opacity-60" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {course.locked ? (
                          <Lock className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-primary" />
                        )}
                        {course.title}
                      </CardTitle>
                      <CardDescription>
                        {course.modules} modules • {course.completed}/{course.modules} completed
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        course.status === "completed"
                          ? "default"
                          : course.status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress
                    value={(course.completed / course.modules) * 100}
                    className="h-2"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant={course.status === "in-progress" ? "cosmic" : "outline"}
                      className="flex-1"
                      disabled={course.locked}
                    >
                      {course.locked ? (
                        <>
                          <Lock className="w-4 h-4" />
                          Locked
                        </>
                      ) : course.status === "completed" ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Review
                        </>
                      ) : course.status === "in-progress" ? (
                        <>
                          <PlayCircle className="w-4 h-4" />
                          Continue
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4" />
                          Start Course
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Next Steps */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recommended Next Steps</CardTitle>
            <CardDescription>Based on your learning pattern</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Complete Integration Techniques module",
                "Review Derivatives concepts",
                "Take practice quiz on Limits",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Learning;
