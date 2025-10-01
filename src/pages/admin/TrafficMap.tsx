import { Link } from "react-router-dom";
import { Home, ArrowLeft, MapPin, Navigation, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TrafficMap = () => {
  const parkingLots = [
    { id: "P1", name: "Parking Lot A", capacity: 200, occupied: 185, status: "high" },
    { id: "P2", name: "Parking Lot B", capacity: 150, occupied: 95, status: "moderate" },
    { id: "P3", name: "Parking Lot C", capacity: 180, occupied: 54, status: "low" },
    { id: "P4", name: "VIP Parking", capacity: 50, occupied: 42, status: "moderate" },
  ];

  const trafficZones = [
    { zone: "Main Entrance Road", congestion: "high", vehicles: 145 },
    { zone: "North Gate Access", congestion: "low", vehicles: 32 },
    { zone: "South Exit Route", congestion: "moderate", vehicles: 78 },
    { zone: "East Service Road", congestion: "low", vehicles: 28 },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "low": return "success";
      case "moderate": return "warning";
      case "high": return "danger";
      default: return "muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-white shadow-elevated sticky top-0 z-50">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Home className="h-6 w-6 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <h1 className="text-2xl font-bold">Traffic & Parking Heatmap</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map Placeholder */}
          <Card className="lg:col-span-2 shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Live Traffic Heatmap
              </CardTitle>
              <CardDescription>Real-time traffic and parking status visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-warning/10 to-danger/10" />
                <div className="relative z-10 text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">Interactive Map Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">Google Maps integration would display here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Heatmap Legend</CardTitle>
              <CardDescription>Traffic density indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded" />
                <div>
                  <p className="font-medium">Low Density</p>
                  <p className="text-xs text-muted-foreground">0-30% congestion</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warning rounded" />
                <div>
                  <p className="font-medium">Moderate Density</p>
                  <p className="text-xs text-muted-foreground">31-70% congestion</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-danger rounded" />
                <div>
                  <p className="font-medium">High Density</p>
                  <p className="text-xs text-muted-foreground">71-100% congestion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Parking Lots */}
        <Card className="shadow-card bg-gradient-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              Parking Lot Status
            </CardTitle>
            <CardDescription>Real-time parking availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {parkingLots.map((lot) => (
                <Card key={lot.id} className="shadow-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{lot.id}</p>
                        <p className="font-semibold">{lot.name}</p>
                      </div>
                      <Badge variant={getStatusColor(lot.status) as any}>
                        {lot.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Occupied</span>
                        <span className="font-medium">{lot.occupied} / {lot.capacity}</span>
                      </div>
                      <div className="bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-${getStatusColor(lot.status)}`}
                          style={{ width: `${(lot.occupied / lot.capacity) * 100}%` }}
                        />
                      </div>
                      <p className="text-center text-xl font-bold">
                        {Math.round((lot.occupied / lot.capacity) * 100)}%
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Zones */}
        <Card className="shadow-card bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              Traffic Zone Status
            </CardTitle>
            <CardDescription>Current congestion levels by zone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficZones.map((zone, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium">{zone.zone}</p>
                      <p className="text-sm text-muted-foreground">{zone.vehicles} vehicles detected</p>
                    </div>
                    <Badge variant={getStatusColor(zone.congestion) as any} className="ml-4">
                      {zone.congestion.toUpperCase()}
                    </Badge>
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

export default TrafficMap;
