import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  FileText, 
  Mail,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  // Simple admin access - no authentication required for now

  // Update to use working BIEW registration endpoint
  const { data: biewRegistrations } = useQuery({
    queryKey: ["/api/admin/biew-registrations"],
  });

  // Mock data for non-implemented features
  const contactMessages = [];
  const events = [];
  const newsletterSubscriptions = [];
  const newsletterCampaigns = [];

  // Event form
  const eventForm = useForm();
  const createEventMutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/admin/events", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      setActiveDialog(null);
      eventForm.reset();
      toast({ title: "Event created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create event", variant: "destructive" });
    },
  });

  // Newsletter campaign form
  const campaignForm = useForm();
  const createCampaignMutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/admin/newsletter-campaigns", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/newsletter-campaigns"] });
      setActiveDialog(null);
      campaignForm.reset();
      toast({ title: "Campaign created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create campaign", variant: "destructive" });
    },
  });

  // Mark contact message as read
  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("PATCH", `/api/admin/contact-messages/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contact-messages"] });
      toast({ title: "Message marked as read" });
    },
  });

  const handleEventSubmit = (data: any) => {
    createEventMutation.mutate({
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      maxAttendees: parseInt(data.maxAttendees),
      isPublished: data.isPublished === "true",
    });
  };

  const handleCampaignSubmit = (data: any) => {
    createCampaignMutation.mutate(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your innovation centre</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contactMessages.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                0 unread
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{events.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                0 published
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{newsletterSubscriptions.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                0 active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaigns</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{newsletterCampaigns.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                newsletter campaigns
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="biew" className="space-y-4">
          <TabsList>
            <TabsTrigger value="biew">BIEW Registrations</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
          </TabsList>

          <TabsContent value="biew" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>BIEW 2025 Registrations</CardTitle>
                <CardDescription>Manage Baraton Innovation & Entrepreneurship Week registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {biewRegistrations?.map((registration: any) => (
                      <TableRow key={registration.id}>
                        <TableCell className="font-medium">{registration.fullName}</TableCell>
                        <TableCell>{registration.email}</TableCell>
                        <TableCell>{registration.organizationName}</TableCell>
                        <TableCell>
                          <Badge variant={registration.registrationType === 'delegation' ? 'default' : 'secondary'}>
                            {registration.registrationType}
                          </Badge>
                        </TableCell>
                        <TableCell>{registration.category}</TableCell>
                        <TableCell>
                          <Badge variant={registration.status === 'confirmed' ? 'default' : 'secondary'}>
                            {registration.status || 'pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(registration.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    )) || (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center text-muted-foreground">
                          No BIEW registrations yet
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>Manage incoming contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactMessages.length > 0 ? contactMessages.map((message: any) => (
                      <TableRow key={message.id}>
                        <TableCell>{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.subject}</TableCell>
                        <TableCell>{message.enquiryType}</TableCell>
                        <TableCell>{new Date(message.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {message.isRead ? (
                            <Badge variant="outline">Read</Badge>
                          ) : (
                            <Badge variant="destructive">Unread</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {!message.isRead && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => markAsReadMutation.mutate(message.id)}
                            >
                              Mark Read
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Events Management</h2>
              <Dialog open={activeDialog === "create-event"} onOpenChange={(open) => setActiveDialog(open ? "create-event" : null)}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Event</DialogTitle>
                    <DialogDescription>Add a new event to the calendar</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={eventForm.handleSubmit(handleEventSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input {...eventForm.register("title", { required: true })} />
                      </div>
                      <div>
                        <Label htmlFor="eventType">Event Type</Label>
                        <Select onValueChange={(value) => eventForm.setValue("eventType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="seminar">Seminar</SelectItem>
                            <SelectItem value="networking">Networking</SelectItem>
                            <SelectItem value="competition">Competition</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea {...eventForm.register("description", { required: true })} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input type="datetime-local" {...eventForm.register("startDate", { required: true })} />
                      </div>
                      <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input type="datetime-local" {...eventForm.register("endDate", { required: true })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input {...eventForm.register("location", { required: true })} />
                      </div>
                      <div>
                        <Label htmlFor="maxAttendees">Max Attendees</Label>
                        <Input type="number" {...eventForm.register("maxAttendees")} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="isPublished">Status</Label>
                      <Select onValueChange={(value) => eventForm.setValue("isPublished", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="false">Draft</SelectItem>
                          <SelectItem value="true">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setActiveDialog(null)}>
                        Cancel
                      </Button>
                      <Button type="submit" disabled={createEventMutation.isPending}>
                        Create Event
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Attendees</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events?.map((event: any) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.eventType}</TableCell>
                        <TableCell>{new Date(event.startDate).toLocaleDateString()}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          {event.currentAttendees}/{event.maxAttendees || '∞'}
                        </TableCell>
                        <TableCell>
                          {event.isPublished ? (
                            <Badge>Published</Badge>
                          ) : (
                            <Badge variant="secondary">Draft</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="newsletter" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Newsletter Management</h2>
              <Dialog open={activeDialog === "create-campaign"} onOpenChange={(open) => setActiveDialog(open ? "create-campaign" : null)}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create Newsletter Campaign</DialogTitle>
                    <DialogDescription>Send a newsletter to your subscribers</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={campaignForm.handleSubmit(handleCampaignSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Campaign Title</Label>
                      <Input {...campaignForm.register("title", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="subject">Email Subject</Label>
                      <Input {...campaignForm.register("subject", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea rows={10} {...campaignForm.register("content", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="segment">Target Segment</Label>
                      <Select onValueChange={(value) => campaignForm.setValue("segment", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select segment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Subscribers</SelectItem>
                          <SelectItem value="students">Students</SelectItem>
                          <SelectItem value="mentors">Mentors</SelectItem>
                          <SelectItem value="alumni">Alumni</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setActiveDialog(null)}>
                        Cancel
                      </Button>
                      <Button type="submit" disabled={createCampaignMutation.isPending}>
                        Create Campaign
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscribers</CardTitle>
                  <CardDescription>Manage newsletter subscriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {newsletterSubscriptions?.slice(0, 10).map((sub: any) => (
                      <div key={sub.id} className="flex justify-between items-center">
                        <span>{sub.email}</span>
                        <Badge variant={sub.isActive ? "default" : "secondary"}>
                          {sub.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>View sent newsletter campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {newsletterCampaigns?.slice(0, 5).map((campaign: any) => (
                      <div key={campaign.id} className="border rounded p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{campaign.title}</p>
                            <p className="text-sm text-gray-600">{campaign.subject}</p>
                          </div>
                          <Badge variant="outline">{campaign.segment}</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {campaign.sentAt ? `Sent ${new Date(campaign.sentAt).toLocaleDateString()}` : 'Draft'}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <h2 className="text-2xl font-bold">Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    News Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Article
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resource
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Write Post
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}