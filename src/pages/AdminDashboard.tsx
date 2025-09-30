import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, Users, Activity, AlertTriangle, Camera, TrendingUp, 
  Bell, Settings, BarChart3, Map, Clock, Shield
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const [liveStats] = useState({
    totalCrowd: 2870,
    peakCapacity: 75,
    activeAlerts: 2,
    cctvActive: 24,
    avgWaitTime: "42 mins"
  });

  const temples = [
    { name: "Main Temple", crowd: 850, capacity: 1200, status: "moderate", cctv: 8 },
    { name: "North Shrine", crowd: 120, capacity: 500, status: "low", cctv: 4 },
    { name: "South Pavilion", crowd: 1100, capacity: 1300, status: "high", cctv: 6 },
    { name: "East Complex", crowd: 800, capacity: 1000, status: "moderate", cctv: 6 }
  ];

  const recentAlerts = [
    { id: 1, type: "warning", location: "Main Temple", message: "Approaching 80% capacity", time: "5 mins ago", severity: "medium" },
    { id: 2, type: "info", location: "Parking A", message: "95% occupied", time: "12 mins ago", severity: "low" },
    { id: 3, type: "danger", location: "South Pavilion", message: "Exceeded safe capacity", time: "18 mins ago", severity: "high" }
  ];

  const cctvFeeds = [
    { id: 1, location: "Main Temple - Entrance", status: "active", density: 82 },
    { id: 2, location: "North Shrine - Queue", status: "active", density: 35 },
    { id: 3, location: "South Pavilion - Hall", status: "active", density: 91 },
    { id: 4, location: "Parking Area - A", status: "active", density: 68 }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "low": return "success";
      case "moderate": return "warning";
      case "high": return "danger";
      default: return "muted";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "low": return "text-success border-success";
      case "medium": return "text-warning border-warning";
      case "high": return "text-danger border-danger";
      default: return "text-muted-foreground border-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-white shadow-elevated sticky top-0 z-50">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Home className="h-6 w-6 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <div className="flex items-center gap-3">
                <Shield className="h-7 w-7" />
                <h1 className="text-2xl font-bold">Admin Control Center</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-white/30 text-white">
                <div className="h-2 w-2 bg-success rounded-full mr-2 animate-pulse-slow" />
                System Online
              </Badge>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-full px-6 py-8">
        {/* Live Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Crowd</p>
                  <p className="text-3xl font-bold">{liveStats.totalCrowd}</p>
                </div>
                <Users className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Peak Capacity</p>
                  <p className="text-3xl font-bold text-warning">{liveStats.peakCapacity}%</p>
                </div>
                <Activity className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Alerts</p>
                  <p className="text-3xl font-bold text-danger">{liveStats.activeAlerts}</p>
                </div>
                <AlertTriangle className="h-10 w-10 text-danger" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">CCTV Active</p>
                  <p className="text-3xl font-bold text-success">{liveStats.cctvActive}</p>
                </div>
                <Camera className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Wait Time</p>
                  <p className="text-2xl font-bold">{liveStats.avgWaitTime}</p>
                </div>
                <Clock className="h-10 w-10 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Alerts */}
          <Card className="lg:col-span-2 shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-danger" />
                  Recent Alerts
                </CardTitle>
                <Link to="/admin/alerts">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
              <CardDescription>Real-time safety and capacity alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 bg-background rounded-lg border border-border hover:shadow-card transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">{alert.location}</span>
                        </div>
                        <p className="font-medium mb-1">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">Resolve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage system operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin/alerts/create">
                <Button className="w-full justify-start bg-danger hover:bg-danger/90">
                  <Bell className="mr-2 h-4 w-4" />
                  Broadcast Alert
                </Button>
              </Link>
              <Link to="/admin/booking">
                <Button className="w-full justify-start bg-primary hover:bg-primary-dark">
                  <Users className="mr-2 h-4 w-4" />
                  Manage E-Passes
                </Button>
              </Link>
              <Link to="/admin/analytics">
                <Button className="w-full justify-start bg-secondary hover:bg-secondary/90">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </Link>
              <Link to="/admin/map">
                <Button className="w-full justify-start" variant="outline">
                  <Map className="mr-2 h-4 w-4" />
                  Traffic Heatmap
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="temples" className="space-y-6">
          <TabsList className="bg-card border border-border shadow-card">
            <TabsTrigger value="temples">Temple Status</TabsTrigger>
            <TabsTrigger value="cctv">CCTV Monitoring</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="temples">
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Live Temple Monitoring</CardTitle>
                <CardDescription>Real-time crowd density across all locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {temples.map((temple, index) => (
                    <Card key={index} className="shadow-card border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-base">{temple.name}</CardTitle>
                          <Badge variant="outline" className={`border-${getStatusColor(temple.status)} text-${getStatusColor(temple.status)}`}>
                            {temple.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Camera className="h-3 w-3" />
                          <span>{temple.cctv} cameras active</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Current / Max</span>
                              <span className="font-medium">{temple.crowd} / {temple.capacity}</span>
                            </div>
                            <Progress value={(temple.crowd / temple.capacity) * 100} className="h-2" />
                          </div>
                          <div className="text-center text-2xl font-bold">
                            {Math.round((temple.crowd / temple.capacity) * 100)}%
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cctv">
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  CCTV Feed Monitoring
                </CardTitle>
                <CardDescription>AI-powered crowd density analysis from live feeds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cctvFeeds.map((feed) => (
                    <Card key={feed.id} className="shadow-card border-border/50">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                          <Camera className="h-16 w-16 text-muted-foreground/30 relative z-10" />
                          <Badge className="absolute top-3 right-3 bg-success">
                            <div className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse-slow" />
                            {feed.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-3">{feed.location}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Crowd Density</span>
                              <span className="font-medium">{feed.density}%</span>
                            </div>
                            <Progress value={feed.density} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>AI-powered insights and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="text-base">Today's Footfall</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">8,452</div>
                      <div className="text-sm text-success flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        +12% from yesterday
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="text-base">Peak Hour Prediction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">9-11 AM</div>
                      <div className="text-sm text-warning">Expected surge: High</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="text-base">Avg. Wait Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">42 mins</div>
                      <div className="text-sm text-muted-foreground">Across all temples</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
