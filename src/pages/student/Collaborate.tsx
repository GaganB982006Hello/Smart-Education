import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, MessageSquare, Video, Plus, Search } from "lucide-react";

const Collaborate = () => {
  const activeRooms = [
    {
      id: 1,
      name: "Calculus Study Group",
      members: 8,
      topic: "Integration Techniques",
      active: true,
    },
    {
      id: 2,
      name: "Physics Lab Discussion",
      members: 5,
      topic: "Quantum Mechanics",
      active: true,
    },
    {
      id: 3,
      name: "Programming Challenge",
      members: 12,
      topic: "Algorithm Optimization",
      active: false,
    },
  ];

  const recentMessages = [
    {
      id: 1,
      room: "Calculus Study Group",
      user: "Sarah K.",
      message: "Can someone explain the u-substitution method?",
      time: "5 min ago",
    },
    {
      id: 2,
      room: "Physics Lab Discussion",
      user: "Mike T.",
      message: "I've uploaded the lab notes to shared workspace",
      time: "12 min ago",
    },
  ];

  const suggestedPeers = [
    { id: 1, name: "Emma Wilson", level: "Advanced", subjects: ["Math", "Physics"] },
    { id: 2, name: "James Lee", level: "Intermediate", subjects: ["Computer Science"] },
    { id: 3, name: "Lisa Chen", level: "Advanced", subjects: ["Chemistry", "Biology"] },
  ];

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Collaborative Learning</h1>
            <p className="text-muted-foreground">Connect and learn together</p>
          </div>
          <Button variant="cosmic">
            <Plus className="w-4 h-4" />
            Create Room
          </Button>
        </div>

        {/* Search */}
        <Card className="glass">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for study groups or topics..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Active Study Rooms */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Active Study Rooms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeRooms.map((room) => (
              <Card key={room.id} className="glass">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{room.name}</CardTitle>
                    {room.active && (
                      <Badge variant="default" className="bg-success">
                        Live
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{room.topic}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{room.members} members</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="cosmic" className="flex-1">
                      <MessageSquare className="w-4 h-4" />
                      Join Chat
                    </Button>
                    <Button variant="outline" size="icon">
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Messages */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Messages
              </CardTitle>
              <CardDescription>Latest from your study groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm mb-1">{msg.message}</p>
                  <Badge variant="outline" className="text-xs">
                    {msg.room}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Messages
              </Button>
            </CardContent>
          </Card>

          {/* Suggested Study Peers */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Suggested Study Peers
              </CardTitle>
              <CardDescription>Based on your courses and interests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestedPeers.map((peer) => (
                <div key={peer.id} className="p-3 rounded-lg bg-muted/50 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{peer.name}</h4>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {peer.level}
                      </Badge>
                      {peer.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Shared Problem Solving Workspace */}
        <Card className="glass border-primary/50">
          <CardHeader>
            <CardTitle>Shared Problem Solving Workspace</CardTitle>
            <CardDescription>Collaborate in real-time on challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Whiteboard and collaboration tools</p>
                <p className="text-sm text-muted-foreground">Join a room to start collaborating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Collaborate;
