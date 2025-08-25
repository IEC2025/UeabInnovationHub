import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Clock, ExternalLink, Filter } from "lucide-react";
import { Link } from "wouter";
import type { Event } from "@shared/schema";

const CalendarPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedEventType, setSelectedEventType] = useState<string>("all");

  // Mock events data - will connect to API later
  const events: Event[] = [
    {
      id: 1,
      title: "Kenya Innovation Week 2025",
      description: "Annual innovation showcase featuring student projects, startup pitches, and industry partnerships. A week-long celebration of innovation and entrepreneurship.",
      startDate: new Date("2025-03-15T09:00:00"),
      endDate: new Date("2025-03-21T17:00:00"),
      location: "UEAB Main Campus, Baraton",
      eventType: "Conference",
      imageUrl: "/src/assets/images/INNOVATION WEEK ROLL UP 1.jpg",
      registrationUrl: "https://docs.google.com/forms/d/e/innovation-week-2025",
      maxAttendees: 500,
      currentAttendees: 234,
      isPublished: true,
      createdAt: new Date("2024-12-01"),
      updatedAt: new Date("2024-12-01"),
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      description: "Monthly competition where student entrepreneurs present their business ideas to a panel of industry experts and investors.",
      startDate: new Date("2025-02-20T14:00:00"),
      endDate: new Date("2025-02-20T17:00:00"),
      location: "IEC Innovation Hub",
      eventType: "Competition",
      imageUrl: "/src/assets/images/456214878_980492593875523_3420111680875412655_n_1756133729214.jpg",
      registrationUrl: "https://docs.google.com/forms/d/e/startup-pitch-feb",
      maxAttendees: 100,
      currentAttendees: 67,
      isPublished: true,
      createdAt: new Date("2024-12-15"),
      updatedAt: new Date("2024-12-15"),
    },
    {
      id: 3,
      title: "Entrepreneurship Masterclass: Digital Marketing",
      description: "Learn essential digital marketing strategies for startups. Practical workshop covering social media, content marketing, and customer acquisition.",
      startDate: new Date("2025-02-28T10:00:00"),
      endDate: new Date("2025-02-28T15:00:00"),
      location: "IEC Conference Room",
      eventType: "Workshop",
      imageUrl: "/src/assets/images/448210884_938755978049185_4727530625639529934_n (1)_1756133531727.jpg",
      registrationUrl: "https://docs.google.com/forms/d/e/digital-marketing-workshop",
      maxAttendees: 50,
      currentAttendees: 23,
      isPublished: true,
      createdAt: new Date("2024-12-20"),
      updatedAt: new Date("2024-12-20"),
    },
    {
      id: 4,
      title: "Innovation Hackathon: AgriTech Solutions",
      description: "48-hour hackathon focused on developing technology solutions for agricultural challenges in Kenya. Teams will compete for cash prizes and mentorship opportunities.",
      startDate: new Date("2025-04-10T18:00:00"),
      endDate: new Date("2025-04-12T18:00:00"),
      location: "UEAB Computer Science Building",
      eventType: "Hackathon",
      imageUrl: "/src/assets/images/kiw-image3.jpg",
      registrationUrl: "https://docs.google.com/forms/d/e/agritech-hackathon",
      maxAttendees: 120,
      currentAttendees: 89,
      isPublished: true,
      createdAt: new Date("2025-01-05"),
      updatedAt: new Date("2025-01-05"),
    }
  ];

  const eventTypes = ["all", "Conference", "Workshop", "Competition", "Hackathon", "Seminar"];
  const months = ["all", "February", "March", "April", "May", "June"];

  const filteredEvents = events.filter(event => {
    const eventMonth = event.startDate.toLocaleDateString('en-US', { month: 'long' });
    const matchesMonth = selectedMonth === "all" || eventMonth === selectedMonth;
    const matchesType = selectedEventType === "all" || event.eventType === selectedEventType;
    return matchesMonth && matchesType;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'Conference': return 'bg-blue-100 text-blue-800';
      case 'Workshop': return 'bg-green-100 text-green-800';
      case 'Competition': return 'bg-red-100 text-red-800';
      case 'Hackathon': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event Calendar
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover upcoming innovation and entrepreneurship events at UEAB. 
              Join workshops, competitions, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Events:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40" data-testid="select-month">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month} value={month}>
                      {month === "all" ? "All Months" : month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedEventType} onValueChange={setSelectedEventType}>
                <SelectTrigger className="w-40" data-testid="select-event-type">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No events found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more events.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid={`card-event-${event.id}`}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.imageUrl || "/api/placeholder/400/300"}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className={getEventTypeColor(event.eventType)}>
                            {event.eventType}
                          </Badge>
                          {event.currentAttendees && event.currentAttendees >= (event.maxAttendees! * 0.8) && (
                            <Badge variant="outline" className="text-orange-600 border-orange-600">
                              Almost Full
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl md:text-2xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <div className="font-medium">{formatDate(event.startDate)}</div>
                              {event.startDate.toDateString() !== event.endDate.toDateString() && (
                                <div className="text-gray-500">to {formatDate(event.endDate)}</div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <div>
                              <div className="font-medium">
                                {formatTime(event.startDate)} - {formatTime(event.endDate)}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          
                          {event.maxAttendees && (
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="font-medium">
                                {event.currentAttendees}/{event.maxAttendees} registered
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      
                      <div className="p-6 pt-0">
                        {event.registrationUrl && (
                          <Button asChild className="w-full md:w-auto" data-testid={`button-register-${event.id}`}>
                            <a 
                              href={event.registrationUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Register Now <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Have an innovative event idea? Partner with the Innovation & Entrepreneurship Centre 
            to bring your vision to life.
          </p>
          <Button asChild variant="secondary" size="lg" data-testid="button-contact-events">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;