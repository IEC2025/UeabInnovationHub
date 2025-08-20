import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Calendar, BookOpen, Lightbulb } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to the Innovation & Entrepreneurship Centre
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Empowering students and entrepreneurs to turn innovative ideas into successful ventures
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={() => window.location.href = '/api/login'}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle>Mentorship Program</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with experienced mentors and grow your entrepreneurial skills
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Calendar className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle>Events & Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Join our community events and learn from industry experts
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle>Resource Library</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access our comprehensive collection of entrepreneurship resources
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lightbulb className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle>Innovation Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Collaborate in our state-of-the-art innovation workspace
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join our community of innovators and entrepreneurs</p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/api/login'}
          >
            Sign In to Continue
          </Button>
        </div>
      </div>
    </div>
  );
}