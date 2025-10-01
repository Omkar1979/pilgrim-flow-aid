import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Download, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageBookings = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const bookings = [
    { id: "EP001", pilgrim: "Raj Kumar", temple: "Main Temple", slot: "2025-10-15 09:00", status: "confirmed", phone: "+91 98765 43210" },
    { id: "EP002", pilgrim: "Priya Singh", temple: "North Shrine", slot: "2025-10-15 10:30", status: "confirmed", phone: "+91 98765 43211" },
    { id: "EP003", pilgrim: "Amit Patel", temple: "South Pavilion", slot: "2025-10-15 11:00", status: "pending", phone: "+91 98765 43212" },
    { id: "EP004", pilgrim: "Sunita Sharma", temple: "East Complex", slot: "2025-10-15 14:00", status: "confirmed", phone: "+91 98765 43213" },
    { id: "EP005", pilgrim: "Vikram Mehta", temple: "Main Temple", slot: "2025-10-15 15:30", status: "cancelled", phone: "+91 98765 43214" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "confirmed": return "success";
      case "pending": return "warning";
      case "cancelled": return "destructive";
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
              <h1 className="text-2xl font-bold">E-Pass Management</h1>
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
        <Card className="shadow-card bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All E-Pass Bookings</CardTitle>
                <CardDescription>Manage and track pilgrim bookings</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by E-Pass ID, name, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>E-Pass ID</TableHead>
                    <TableHead>Pilgrim Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Temple</TableHead>
                    <TableHead>Slot Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>{booking.pilgrim}</TableCell>
                      <TableCell>{booking.phone}</TableCell>
                      <TableCell>{booking.temple}</TableCell>
                      <TableCell>{booking.slot}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(booking.status) as any}>
                          {booking.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">View</Button>
                          {booking.status === "pending" && (
                            <Button size="sm" variant="outline">Approve</Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ManageBookings;
