import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, BookOpen, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const { user, isLoading } = useAuth();

  const { data: upcomingEvents = [] } = useQuery({
    queryKey: ["/api/events/upcoming"],
  });

  const { data: notifications = [] } = useQuery({
    queryKey: ["/api/my/notifications"],
    enabled: !!user,
  });

  const { data: mentorshipSessions = [] } = useQuery({
    queryKey: ["/api/my/mentorship-sessions"],
    enabled: !!user,
  });

  const { data: eventRegistrations = [] } = useQuery({
    queryKey: ["/api/my/event-registrations"],
    enabled: !!user,
  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  const unreadNotifications = (notifications as any[])?.filter((n: any) => !n.isRead) || [];
  const upcomingSessions = (mentorshipSessions as any[])?.filter((s: any) => 
    new Date(s.sessionDate) > new Date() && s.status === 'scheduled'
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {(user as any)?.firstName || 'User'}!</h1>
            <p className="text-gray-600">Here's what's happening in your innovation journey</p>
          </div>
          <Button onClick={() => window.location.href = '/api/logout'}>
            Sign Out
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(upcomingEvents as any[])?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                events this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notifications</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{unreadNotifications.length}</div>
              <p className="text-xs text-muted-foreground">
                unread notifications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mentorship Sessions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingSessions.length}</div>
              <p className="text-xs text-muted-foreground">
                upcoming sessions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Registrations</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(eventRegistrations as any[])?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                registered events
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(upcomingEvents as any[])?.slice(0, 3).map((event: any) => (
                  <div key={event.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(event.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline">{event.eventType}</Badge>
                  </div>
                ))}
                <Link href="/events">
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(notifications as any[])?.slice(0, 3).map((notification: any) => (
                  <div key={notification.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                    {!notification.isRead && (
                      <Badge variant="destructive" className="ml-2">New</Badge>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with these common actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/mentors">
                <Button variant="outline" className="h-20 flex flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  Find a Mentor
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="h-20 flex flex-col">
                  <Calendar className="h-6 w-6 mb-2" />
                  Browse Events
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="h-20 flex flex-col">
                  <BookOpen className="h-6 w-6 mb-2" />
                  Explore Resources
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="h-20 flex flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}