import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Calendar } from "lucide-react";

const ProgressPage = () => {
  const skills = [
    { name: "Mathematics", level: 85, trend: "+5%", color: "bg-primary" },
    { name: "Physics", level: 72, trend: "+3%", color: "bg-secondary" },
    { name: "Computer Science", level: 90, trend: "+8%", color: "bg-accent" },
    { name: "Chemistry", level: 68, trend: "+2%", color: "bg-success" },
  ];

  const achievements = [
    { id: 1, title: "Fast Learner", description: "Complete 10 lessons in a week", unlocked: true },
    { id: 2, title: "Perfect Score", description: "Get 100% on 5 assessments", unlocked: true },
    { id: 3, title: "Study Streak", description: "Study for 30 days straight", unlocked: false },
  ];

  const weeklyStats = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.0 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 2.8 },
    { day: "Fri", hours: 3.2 },
    { day: "Sat", hours: 1.0 },
    { day: "Sun", hours: 2.0 },
  ];

  const maxHours = Math.max(...weeklyStats.map(s => s.hours));

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
          <p className="text-muted-foreground">Monitor your learning journey and achievements</p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Calendar className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127.5</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
              <TrendingUp className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.8%</div>
              <p className="text-xs text-muted-foreground mt-1">+4.5% this week</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24/50</div>
              <p className="text-xs text-muted-foreground mt-1">Keep going!</p>
            </CardContent>
          </Card>
        </div>

        {/* Skill Heatmap */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Skill Mastery Levels
            </CardTitle>
            <CardDescription>Track your progress across different subjects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{skill.name}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-success">
                      {skill.trend}
                    </Badge>
                    <span className="text-sm font-bold">{skill.level}%</span>
                  </div>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Activity */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Weekly Study Activity</CardTitle>
              <CardDescription>Hours spent learning this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyStats.map((stat) => (
                  <div key={stat.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative" style={{ height: "100%" }}>
                      <div
                        className="w-full bg-gradient-cosmic rounded-t-lg absolute bottom-0 transition-all"
                        style={{ height: `${(stat.hours / maxHours) * 100}%` }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium">{stat.day}</p>
                      <p className="text-xs text-muted-foreground">{stat.hours}h</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg ${
                    achievement.unlocked ? "bg-gradient-cosmic/10 border border-primary/30" : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.unlocked ? "bg-gradient-cosmic" : "bg-muted"
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.unlocked && (
                        <Badge className="mt-2 bg-success">Unlocked!</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProgressPage;
