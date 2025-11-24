import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  BookOpen,
  Zap,
  Award,
  Calendar,
  Play
} from "lucide-react";

const StudentDashboard = () => {
  const upcomingLessons = [
    { id: 1, title: "Advanced Calculus", time: "Today, 2:00 PM", progress: 75 },
    { id: 2, title: "Quantum Physics", time: "Tomorrow, 10:00 AM", progress: 45 },
    { id: 3, title: "Data Structures", time: "Wed, 3:00 PM", progress: 60 },
  ];

  const recentTopics = [
    { id: 1, title: "Linear Algebra", mastery: 85, trend: "up" },
    { id: 2, title: "Machine Learning Basics", mastery: 72, trend: "up" },
    { id: 3, title: "Web Development", mastery: 90, trend: "stable" },
  ];

  const recommendations = [
    { id: 1, title: "Practice: Matrix Operations", type: "Exercise", difficulty: "Medium" },
    { id: 2, title: "Video: Neural Networks Intro", type: "Video", difficulty: "Easy" },
    { id: 3, title: "Quiz: Algorithm Complexity", type: "Assessment", difficulty: "Hard" },
  ];

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Your personalized learning journey continues</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <TrendingUp className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <Progress value={68} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <Zap className="w-4 h-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 Days</div>
              <p className="text-xs text-muted-foreground mt-2">Keep it up!</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Active</CardTitle>
              <BookOpen className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-2">3 near completion</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-2">2 new this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Lessons */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Lessons
              </CardTitle>
              <CardDescription>Your scheduled learning sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex-1">
                    <h4 className="font-medium">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.time}
                    </p>
                    <Progress value={lesson.progress} className="mt-2 h-1" />
                  </div>
                  <Button size="sm" variant="ghost">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-warning" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Personalized for your learning style</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{rec.title}</h4>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">{rec.type}</Badge>
                        <Badge 
                          variant={rec.difficulty === "Easy" ? "default" : rec.difficulty === "Medium" ? "secondary" : "destructive"}
                          className="text-xs"
                        >
                          {rec.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Topics */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Recently Reviewed Topics
            </CardTitle>
            <CardDescription>Track your mastery levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTopics.map((topic) => (
                <div key={topic.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{topic.title}</h4>
                    <span className="text-sm font-bold">{topic.mastery}%</span>
                  </div>
                  <Progress value={topic.mastery} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
