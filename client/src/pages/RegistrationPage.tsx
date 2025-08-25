import React, { useState } from 'react';
import { ArrowRight, Users, Building, Award, MapPin, Calendar, CheckCircle, Globe, Lightbulb, Target, Shield, Crown, Medal, Star, Sprout, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { isUnauthorizedError } from '@/lib/authUtils';

const RegistrationPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState<'overview' | 'registration'>('overview');
  const [formData, setFormData] = useState({
    registrationType: '',
    organizationName: '',
    contactPerson: '',
    email: (user as any)?.email || '',
    phone: '',
    participantCount: '',
    boothRequirements: '',
    specialRequirements: ''
  });

  const handleRegistrationClick = () => {
    if (!isAuthenticated) {
      window.location.href = '/api/login';
    } else {
      setCurrentStep('registration');
    }
  };

  const registrationMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/biew-registration', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Successful!",
        description: `Your ${formData.registrationType} registration has been submitted successfully. You will receive a confirmation email shortly.`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/biew-registrations'] });
      // Reset form and go back to overview
      setFormData({
        registrationType: '',
        organizationName: '',
        contactPerson: '',
        email: (user as any)?.email || '',
        phone: '',
        participantCount: '',
        boothRequirements: '',
        specialRequirements: ''
      });
      setCurrentStep('overview');
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registrationMutation.mutate(formData);
  };

  if (currentStep === 'registration') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/src/assets/images/iec-logo.png"
                  alt="IEC Logo"
                  className="h-12"
                />
                <div>
                  <h1 className="text-2xl font-bold">BIEW 2025 Registration</h1>
                  <p className="text-primary-50">Complete your registration to join us</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => setCurrentStep('overview')}
              >
                Back to Overview
              </Button>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">Registration Details</h2>
                
                {/* Registration Type */}
                <div className="space-y-4 mb-6">
                  <Label className="text-lg font-semibold">Select Registration Type</Label>
                  <RadioGroup 
                    value={formData.registrationType} 
                    onValueChange={(value) => setFormData({...formData, registrationType: value})}
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="delegation" id="delegation" />
                      <Label htmlFor="delegation" className="flex-1">
                        <div className="font-semibold">Delegation Registration - KSH 25,000</div>
                        <div className="text-sm text-gray-600">Full 4-day access to all sessions, VIP networking, meals & delegate kit</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="exhibition" id="exhibition" />
                      <Label htmlFor="exhibition" className="flex-1">
                        <div className="font-semibold">Exhibition Registration - KSH 15,000</div>
                        <div className="text-sm text-gray-600">Dedicated exhibition space, setup support, branding opportunities</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Organization Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Delegation Specific */}
                {formData.registrationType === 'delegation' && (
                  <div className="mb-6">
                    <Label htmlFor="participantCount">Number of Participants</Label>
                    <Select value={formData.participantCount} onValueChange={(value) => setFormData({...formData, participantCount: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of participants" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 participants</SelectItem>
                        <SelectItem value="6-10">6-10 participants</SelectItem>
                        <SelectItem value="11-20">11-20 participants</SelectItem>
                        <SelectItem value="21-50">21-50 participants</SelectItem>
                        <SelectItem value="50+">50+ participants</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Exhibition Specific */}
                {formData.registrationType === 'exhibition' && (
                  <div className="mb-6">
                    <Label htmlFor="boothRequirements">Booth Requirements</Label>
                    <Textarea
                      id="boothRequirements"
                      value={formData.boothRequirements}
                      onChange={(e) => setFormData({...formData, boothRequirements: e.target.value})}
                      placeholder="Describe your booth setup requirements..."
                    />
                  </div>
                )}

                {/* Special Requirements */}
                <div className="mb-6">
                  <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
                    placeholder="Any special requirements or dietary restrictions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-white py-3 text-lg"
                  disabled={!formData.registrationType || !formData.organizationName || !formData.contactPerson || !formData.email || !formData.phone || registrationMutation.isPending}
                  data-testid="button-submit-registration"
                >
                  {registrationMutation.isPending ? 'Submitting...' : 'Complete Registration'}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - CEIL Style */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="/src/assets/images/iec-logo.png"
                alt="IEC Logo"
                className="h-20"
              />
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              Welcome! to BIEW 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">
              2nd Annual Baraton Innovation & Entrepreneurship Week
            </h1>
            <p className="text-xl mb-4 opacity-90">
              "Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design Thinking and Cognitive Mastery"
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                September 29 - October 2, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Innovation Arena, UEAB Campus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Guests Section - CEIL Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Distinguished Speakers
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Meet Our Event Guests</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Crown className="h-16 w-16 text-white" />
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                CHIEF GUEST
              </div>
              <h4 className="font-bold text-primary text-lg">Prof. Tony Omwansa</h4>
              <p className="text-sm text-gray-600 mb-2">CEO, KeNIA</p>
              <p className="text-xs text-gray-500">Innovation Policy & Strategy</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h4 className="font-bold text-primary text-lg">Prof. Msafiri Jackson</h4>
              <p className="text-sm text-gray-600 mb-2">Vice Chancellor, UEAB</p>
              <p className="text-xs text-gray-500">Academic Leadership</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="h-16 w-16 text-secondary" />
              </div>
              <h4 className="font-bold text-primary text-lg">Esther Masese</h4>
              <p className="text-sm text-gray-600 mb-2">CFO, Safaricom</p>
              <p className="text-xs text-gray-500">Corporate Finance & Strategy</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <h4 className="font-bold text-primary text-lg">Dr. Benard Chitunga</h4>
              <p className="text-sm text-gray-600 mb-2">Innovation Expert</p>
              <p className="text-xs text-gray-500">Research & Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Options - CEIL Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Registration
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Choose Your Registration Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for the most comprehensive innovation and entrepreneurship gathering in East Africa. Register now to secure your spot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Delegation Registration */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="p-8 text-center">
                <img 
                  src="/src/assets/images/ueab-campus-flags.jpg" 
                  alt="Delegation Registration" 
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Delegation Registration</h3>
                <div className="text-4xl font-bold text-secondary mb-6">KSH 25,000</div>
                <div className="text-sm text-gray-500 mb-6">per delegation</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Full 4-day access</strong> to all sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>VIP networking sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exhibition booth visits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meals, refreshments & delegate kit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Panel discussion participation</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  onClick={handleRegistrationClick}
                  data-testid="button-register-delegation"
                >
                  {isAuthenticated ? 'Register Now' : 'Login to Register'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Exhibition Registration */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="p-8 text-center">
                <img 
                  src="/src/assets/images/innovation-week-group.jpg" 
                  alt="Exhibition Registration" 
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Exhibition Registration</h3>
                <div className="text-4xl font-bold text-secondary mb-6">KSH 15,000</div>
                <div className="text-sm text-gray-500 mb-6">per booth</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Dedicated exhibition</strong> space</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Setup & teardown support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Branding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 complimentary passes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Digital marketing inclusion</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  onClick={handleRegistrationClick}
                  data-testid="button-register-exhibition"
                >
                  {isAuthenticated ? 'Register Now' : 'Login to Register'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Login Prompt */}
          {!isAuthenticated && !isLoading && (
            <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg max-w-2xl mx-auto">
              <User className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-gray-700 mb-3">
                Please log in to your account to complete the registration process
              </p>
              <Button
                onClick={() => window.location.href = '/api/login'}
                className="bg-primary text-white px-6 py-2"
                data-testid="button-login"
              >
                Login to Continue
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sponsorship Packages - CEIL Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Partnership Opportunities
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Sponsorship Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partner with us to drive innovation and entrepreneurship across Africa. Choose the sponsorship package that aligns with your organization's goals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Title Sponsor */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-8 relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-4 right-4">
                <Crown className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="mb-4">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">🏆 Title Sponsor</h3>
                <div className="text-3xl font-bold mb-2">KSH 3,000,000</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Exclusive naming rights</li>
                <li>• Premium logo placement</li>
                <li>• Keynote speaking slot</li>
                <li>• 2 prime exhibition booths</li>
                <li>• 10 complimentary delegate passes</li>
                <li>• Recognition as sole Title Sponsor</li>
              </ul>
              <Button
                className="w-full bg-white text-yellow-600 font-semibold hover:bg-yellow-50"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Title Sponsor Package - BIEW 2025', '_blank')}
                data-testid="button-sponsor-title"
              >
                Become Title Sponsor
              </Button>
            </div>

            {/* Platinum Sponsor */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-500 text-white rounded-lg p-8 relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-4 right-4">
                <Medal className="h-8 w-8 text-gray-200" />
              </div>
              <div className="mb-4">
                <Award className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">🥇 Platinum Sponsor</h3>
                <div className="text-3xl font-bold mb-2">KSH 2,000,000</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Prominent logo placement</li>
                <li>• Panel speaking opportunity</li>
                <li>• 1 prime exhibition booth</li>
                <li>• 7 complimentary passes</li>
                <li>• Opening/closing recognition</li>
                <li>• Press release inclusion</li>
              </ul>
              <Button
                className="w-full bg-white text-gray-600 font-semibold hover:bg-gray-50"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Platinum Sponsor Package - BIEW 2025', '_blank')}
                data-testid="button-sponsor-platinum"
              >
                Become Platinum Sponsor
              </Button>
            </div>

            {/* Gold Sponsor */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white rounded-lg p-8 relative overflow-hidden transform hover:scale-105 transition-transform">
              <div className="absolute top-4 right-4">
                <Star className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="mb-4">
                <Target className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">🥈 Gold Sponsor</h3>
                <div className="text-3xl font-bold mb-2">KSH 1,000,000</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Logo on website & program</li>
                <li>• 1 exhibition booth</li>
                <li>• 5 complimentary passes</li>
                <li>• Media mentions</li>
                <li>• Closing ceremony mention</li>
                <li>• Digital marketing inclusion</li>
              </ul>
              <Button
                className="w-full bg-white text-yellow-600 font-semibold hover:bg-yellow-50"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Gold Sponsor Package - BIEW 2025', '_blank')}
                data-testid="button-sponsor-gold"
              >
                Become Gold Sponsor
              </Button>
            </div>
          </div>

          {/* Silver & Bronze Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Medal className="h-8 w-8 text-gray-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-primary">🥉 Silver Sponsor</h3>
                  <div className="text-2xl font-bold text-secondary">KSH 750,000</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Logo on website and banners</li>
                <li>• 1 standard exhibition booth</li>
                <li>• 3 complimentary passes</li>
                <li>• Program booklet recognition</li>
                <li>• Side session mentions</li>
              </ul>
              <Button
                className="w-full bg-secondary text-white"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Silver Sponsor Package - BIEW 2025', '_blank')}
                data-testid="button-sponsor-silver"
              >
                Become Silver Sponsor
              </Button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Sprout className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-primary">🌱 Bronze Sponsor</h3>
                  <div className="text-2xl font-bold text-secondary">KSH 500,000</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Logo on sponsors page</li>
                <li>• 2 complimentary passes</li>
                <li>• Closing remarks recognition</li>
                <li>• Digital acknowledgment</li>
                <li>• Certificate of partnership</li>
              </ul>
              <Button
                className="w-full bg-primary text-white"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Bronze Sponsor Package - BIEW 2025', '_blank')}
                data-testid="button-sponsor-bronze"
              >
                Become Bronze Sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Africa's Innovation Landscape?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join us for the most comprehensive innovation and entrepreneurship gathering in East Africa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Venue</h3>
              <p className="text-white/80">
                Innovation Arena<br />
                UEAB Main Campus<br />
                Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Duration</h3>
              <p className="text-white/80">
                September 29 - October 2, 2025<br />
                4 Days of Innovation<br />
                Full Schedule Available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-white/80">
                <Mail className="inline h-4 w-4 mr-1" />
                info@ueab.ac.ke<br />
                Director: Mr. Albert Wakoli<br />
                Innovation & Entrepreneurship Centre
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mr-4"
              onClick={handleRegistrationClick}
              data-testid="button-register-main"
            >
              {isAuthenticated ? 'Register Now' : 'Login to Register'} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-sm text-white/70 mt-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 underline"
                data-testid="link-innovation-submission"
              >
                Have an innovation to showcase? Submit your innovation here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 BIEW all rights reserved. Designed by Innovation & Entrepreneurship Centre, UEAB.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;