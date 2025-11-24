import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  BookOpen,
  BarChart3
} from "lucide-react";

const TeacherDashboard = () => {
  const classes = [
    { id: 1, name: "Advanced Mathematics", students: 32, avgScore: 85, atRisk: 3 },
    { id: 2, name: "Physics 101", students: 28, avgScore: 78, atRisk: 5 },
    { id: 3, name: "Computer Science", students: 35, avgScore: 92, atRisk: 1 },
  ];

  const atRiskStudents = [
    { id: 1, name: "Alex Johnson", class: "Physics 101", score: 58, trend: "declining" },
    { id: 2, name: "Sarah Davis", class: "Advanced Mathematics", score: 62, trend: "stable" },
    { id: 3, name: "Mike Chen", class: "Physics 101", score: 55, trend: "declining" },
  ];

  const recentActivity = [
    { id: 1, action: "Graded 15 assignments", time: "2 hours ago", type: "grading" },
    { id: 2, action: "Created new quiz", time: "5 hours ago", type: "content" },
    { id: 3, action: "Student feedback received", time: "1 day ago", type: "feedback" },
  ];

  return (
    <Layout role="teacher">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Manage your classes and track student progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95</div>
              <p className="text-xs text-muted-foreground mt-2">Across 3 classes</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Performance</CardTitle>
              <TrendingUp className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground mt-2">+3% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
              <AlertTriangle className="w-4 h-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
              <p className="text-xs text-muted-foreground mt-2">Needs attention</p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
              <Clock className="w-4 h-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground mt-2">Assignments</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Class Overview */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Class Overview
              </CardTitle>
              <CardDescription>Your active classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {classes.map((cls) => (
                <div key={cls.id} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{cls.name}</h4>
                      <p className="text-sm text-muted-foreground">{cls.students} students</p>
                    </div>
                    <Badge variant={cls.atRisk > 0 ? "destructive" : "default"}>
                      {cls.atRisk > 0 ? `${cls.atRisk} at risk` : "All good"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Score:</span>
                    <span className="font-bold">{cls.avgScore}%</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* At-Risk Students */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                At-Risk Students
              </CardTitle>
              <CardDescription>Students needing additional support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {atRiskStudents.map((student) => (
                <div key={student.id} className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.class}</p>
                    </div>
                    <Badge variant="destructive">{student.score}%</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Trend:</span>
                    <Badge variant={student.trend === "declining" ? "destructive" : "secondary"}>
                      {student.trend}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    Send Message
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="outline">{activity.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
