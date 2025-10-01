import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, AlertTriangle, Filter, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const AllAlerts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const alerts = [
    { id: 1, type: "warning", location: "Main Temple", message: "Approaching 80% capacity", time: "5 mins ago", severity: "medium", status: "active" },
    { id: 2, type: "info", location: "Parking A", message: "95% occupied", time: "12 mins ago", severity: "low", status: "active" },
    { id: 3, type: "danger", location: "South Pavilion", message: "Exceeded safe capacity", time: "18 mins ago", severity: "high", status: "active" },
    { id: 4, type: "warning", location: "North Shrine", message: "Queue forming at entrance", time: "25 mins ago", severity: "medium", status: "resolved" },
    { id: 5, type: "info", location: "East Complex", message: "Lighting system maintenance", time: "1 hour ago", severity: "low", status: "resolved" },
    { id: 6, type: "danger", location: "Main Temple", message: "Medical emergency reported", time: "2 hours ago", severity: "high", status: "resolved" },
    { id: 7, type: "warning", location: "Parking B", message: "Traffic congestion detected", time: "3 hours ago", severity: "medium", status: "resolved" },
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "low": return "text-success border-success";
      case "medium": return "text-warning border-warning";
      case "high": return "text-danger border-danger";
      default: return "text-muted-foreground border-muted";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "default" : "secondary";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-white shadow-elevated sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Home className="h-6 w-6 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <h1 className="text-2xl font-bold">All Alerts</h1>
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Card className="shadow-card bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-danger" />
                  Alert History
                </CardTitle>
                <CardDescription>View and manage all system alerts</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Link to="/admin/alerts/create">
                  <Button className="bg-danger hover:bg-danger/90">
                    Create Alert
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alerts by location or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 bg-background rounded-lg border border-border hover:shadow-card transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <Badge variant={getStatusColor(alert.status) as any}>
                          {alert.status.toUpperCase()}
                        </Badge>
                        <span className="text-sm font-medium text-muted-foreground">{alert.location}</span>
                      </div>
                      <p className="font-medium mb-1">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="ghost" size="sm">View Details</Button>
                      {alert.status === "active" && (
                        <Button variant="outline" size="sm">Resolve</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AllAlerts;
