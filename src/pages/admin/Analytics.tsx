import { Link } from "react-router-dom";
import { Home, ArrowLeft, TrendingUp, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  const weeklyData = [
    { day: "Monday", footfall: 8234, avgWait: 38 },
    { day: "Tuesday", footfall: 7856, avgWait: 35 },
    { day: "Wednesday", footfall: 9123, avgWait: 45 },
    { day: "Thursday", footfall: 8567, avgWait: 40 },
    { day: "Friday", footfall: 9845, avgWait: 48 },
    { day: "Saturday", footfall: 12456, avgWait: 62 },
    { day: "Sunday", footfall: 14789, avgWait: 75 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-white shadow-elevated sticky top-0 z-50">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Home className="h-6 w-6 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            </div>
            <Link to="/admin">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-full px-6 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Footfall</p>
                  <p className="text-3xl font-bold">70,870</p>
                  <p className="text-xs text-success mt-1">+15% this week</p>
                </div>
                <Users className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Peak Day</p>
                  <p className="text-2xl font-bold">Sunday</p>
                  <p className="text-xs text-muted-foreground mt-1">14,789 visitors</p>
                </div>
                <Calendar className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Wait Time</p>
                  <p className="text-3xl font-bold">49 min</p>
                  <p className="text-xs text-danger mt-1">+8% from last week</p>
                </div>
                <Clock className="h-10 w-10 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-Passes Issued</p>
                  <p className="text-3xl font-bold">3,245</p>
                  <p className="text-xs text-success mt-1">+22% this week</p>
                </div>
                <TrendingUp className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trend */}
        <Card className="shadow-card bg-gradient-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle>Weekly Footfall Trend</CardTitle>
            <CardDescription>Daily visitor statistics for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center gap-4">
                  <div className="w-28 font-medium">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                        <div 
                          className="bg-gradient-primary h-full flex items-center justify-end pr-3 text-white text-sm font-medium"
                          style={{ width: `${(day.footfall / 15000) * 100}%` }}
                        >
                          {day.footfall.toLocaleString()}
                        </div>
                      </div>
                      <div className="w-24 text-sm text-muted-foreground">
                        {day.avgWait} min wait
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Temple-wise Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Temple-wise Distribution</CardTitle>
              <CardDescription>Visitor distribution across temples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Main Temple</span>
                    <span className="text-muted-foreground">45%</span>
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: "45%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">South Pavilion</span>
                    <span className="text-muted-foreground">30%</span>
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary h-full" style={{ width: "30%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">East Complex</span>
                    <span className="text-muted-foreground">18%</span>
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-warning h-full" style={{ width: "18%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">North Shrine</span>
                    <span className="text-muted-foreground">7%</span>
                  </div>
                  <div className="bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-success h-full" style={{ width: "7%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Peak Hours Analysis</CardTitle>
              <CardDescription>Busiest times of the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-danger">Critical</span>
                    <span className="text-2xl font-bold">9-11 AM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peak crowd density: 92%</p>
                </div>
                <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-warning">High</span>
                    <span className="text-2xl font-bold">5-7 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peak crowd density: 78%</p>
                </div>
                <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-success">Low</span>
                    <span className="text-2xl font-bold">2-4 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Peak crowd density: 42%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
