import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, MapPin, Clock, Users, AlertCircle, CheckCircle, Home, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const UserDashboard = () => {
  const [activeAlerts] = useState([
    {
      id: 1,
      type: "info",
      title: "Peak Hours Alert",
      message: "High crowd expected between 8 AM - 11 AM today",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "success",
      title: "Best Darshan Time",
      message: "Low crowd expected from 2 PM - 4 PM",
      time: "5 mins ago"
    }
  ]);

  const temples = [
    {
      id: 1,
      name: "Main Temple",
      status: "moderate",
      waitTime: "45 mins",
      capacity: 65,
      currentCrowd: 850,
      maxCapacity: 1200
    },
    {
      id: 2,
      name: "North Shrine",
      status: "low",
      waitTime: "15 mins",
      capacity: 25,
      currentCrowd: 120,
      maxCapacity: 500
    },
    {
      id: 3,
      name: "South Pavilion",
      status: "high",
      waitTime: "90 mins",
      capacity: 85,
      currentCrowd: 1100,
      maxCapacity: 1300
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "low": return "success";
      case "moderate": return "warning";
      case "high": return "danger";
      default: return "muted";
    }
  };

  const getStatusGradient = (status: string) => {
    switch(status) {
      case "low": return "bg-gradient-status-safe";
      case "moderate": return "bg-gradient-status-moderate";
      case "high": return "bg-gradient-status-high";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white shadow-elevated sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <Home className="h-6 w-6 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <h1 className="text-2xl font-bold">Pilgrim Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/user/alerts">
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
                  <Bell className="h-5 w-5" />
                  {activeAlerts.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {activeAlerts.length}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/user/profile">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active E-Pass</p>
                  <p className="text-2xl font-bold text-success">1 Booking</p>
                </div>
                <div className="bg-gradient-status-safe p-3 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Slot</p>
                  <p className="text-2xl font-bold">Tomorrow 6 AM</p>
                </div>
                <div className="bg-gradient-hero p-3 rounded-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Recommended Time</p>
                  <p className="text-2xl font-bold">2 PM - 4 PM</p>
                </div>
                <div className="bg-secondary p-3 rounded-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        {activeAlerts.length > 0 && (
          <Card className="mb-8 shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <CardTitle>Active Alerts</CardTitle>
                </div>
                <Link to="/user/alerts">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeAlerts.slice(0, 2).map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                  <div className={`p-2 rounded-full ${alert.type === 'success' ? 'bg-success/10' : 'bg-warning/10'}`}>
                    {alert.type === 'success' ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-warning" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Live Temple Status */}
        <Card className="mb-8 shadow-card bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-danger rounded-full animate-pulse-slow" />
                  Live Temple Status
                </CardTitle>
                <CardDescription>Real-time crowd monitoring and wait times</CardDescription>
              </div>
              <Badge variant="outline" className="border-primary text-primary">
                Updated 2 mins ago
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {temples.map((temple) => (
                <Card key={temple.id} className="shadow-card border-border/50 hover:shadow-elevated transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{temple.name}</CardTitle>
                      <Badge 
                        variant="outline"
                        className={`border-${getStatusColor(temple.status)} text-${getStatusColor(temple.status)}`}
                      >
                        {temple.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Wait Time: <strong>{temple.waitTime}</strong></span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Capacity</span>
                          <span className="font-medium">{temple.currentCrowd} / {temple.maxCapacity}</span>
                        </div>
                        <Progress value={temple.capacity} className="h-2" />
                      </div>
                      
                      <div className={`p-3 rounded-lg ${getStatusGradient(temple.status)}`}>
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className="text-sm font-medium">Crowd Level</span>
                          </div>
                          <span className="text-sm font-bold">{temple.capacity}%</span>
                        </div>
                      </div>

                      <Link to="/user/booking">
                        <Button className="w-full bg-primary hover:bg-primary-dark">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book E-Pass
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/user/booking">
            <Card className="shadow-card bg-gradient-card border-border/50 hover:shadow-elevated transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-hero p-4 rounded-lg group-hover:scale-110 transition-transform">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Book E-Pass</h3>
                    <p className="text-sm text-muted-foreground">Reserve your darshan slot</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/user/map">
            <Card className="shadow-card bg-gradient-card border-border/50 hover:shadow-elevated transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-4 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Route & Parking</h3>
                    <p className="text-sm text-muted-foreground">Find directions and parking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
