import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  Search, 
  Download,
  CheckCircle,
  Clock,
  UserCheck
} from 'lucide-react';

interface Registration {
  id: number;
  registrationType: string;
  fullName: string;
  organizationName: string;
  position: string;
  email: string;
  phone: string;
  category: string;
  participantCount?: string;
  boothRequirements?: string;
  specialRequirements?: string;
  paymentPreference?: string;
  additionalInfo?: string;
  submittedAt: string;
  status: string;
}

const AdminPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const { data: registrations = [], isLoading } = useQuery<Registration[]>({
    queryKey: ['/api/admin/biew-registrations'],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number, status: string }) => {
      const response = await apiRequest('PATCH', `/api/admin/biew-registrations/${id}/status`, { status });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/biew-registrations'] });
      toast({ title: "Status updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update status", variant: "destructive" });
    },
  });

  const filteredRegistrations = (registrations as Registration[]).filter((reg: Registration) => {
    const matchesSearch = reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.organizationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || reg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'contacted':
        return <Badge variant="default"><UserCheck className="h-3 w-3 mr-1" />Contacted</Badge>;
      case 'completed':
        return <Badge variant="secondary"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const exportToCSV = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const currentTime = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    // Professional letterhead and header
    const letterhead = [
      '='.repeat(120),
      '                    UNIVERSITY OF EASTERN AFRICA, BARATON (UEAB)',
      '                       INNOVATION & ENTREPRENEURSHIP CENTRE',
      '                     BARATON INNOVATION & ENTREPRENEURSHIP WEEK 2025',
      '                               OFFICIAL REGISTRATION REPORT',
      '',
      `Report Generated: ${currentDate} at ${currentTime}`,
      `Total Registrations: ${filteredRegistrations.length}`,
      `Delegations: ${filteredRegistrations.filter(r => r.registrationType === 'delegation').length} | Exhibitions: ${filteredRegistrations.filter(r => r.registrationType === 'exhibition').length}`,
      '='.repeat(120),
      '',
      'REGISTRATION DETAILS:',
      '-'.repeat(120),
      ''
    ];
    
    // Professional column headers
    const headers = [
      'Registration ID',
      'Registration Type', 
      'Full Name',
      'Organization/Company',
      'Position/Title',
      'Email Address',
      'Phone Number',
      'Category',
      'Participant Count',
      'Booth Requirements',
      'Special Requirements',
      'Payment Preference',
      'Additional Information',
      'Current Status',
      'Registration Date',
      'Registration Time'
    ];
    
    // Format registration data professionally
    const csvData = filteredRegistrations.map((reg: Registration) => {
      const submissionDate = new Date(reg.submittedAt);
      return [
        `REG-${String(reg.id).padStart(4, '0')}`,
        reg.registrationType.toUpperCase(),
        reg.fullName,
        reg.organizationName,
        reg.position,
        reg.email,
        reg.phone,
        reg.category.toUpperCase(),
        reg.participantCount || 'N/A',
        reg.boothRequirements || 'N/A',
        reg.specialRequirements || 'None',
        reg.paymentPreference || 'Not Specified',
        reg.additionalInfo || 'None',
        reg.status.toUpperCase(),
        submissionDate.toLocaleDateString('en-US'),
        submissionDate.toLocaleTimeString('en-US')
      ];
    });
    
    // Professional footer
    const footer = [
      '',
      '-'.repeat(120),
      'SUMMARY STATISTICS:',
      `• Total Registrations: ${filteredRegistrations.length}`,
      `• Delegation Registrations: ${filteredRegistrations.filter(r => r.registrationType === 'delegation').length} (Fee: KSH 25,000 each)`,
      `• Exhibition Registrations: ${filteredRegistrations.filter(r => r.registrationType === 'exhibition').length} (Fee: KSH 15,000 each)`,
      `• Pending Reviews: ${filteredRegistrations.filter(r => r.status === 'pending').length}`,
      `• Contacted: ${filteredRegistrations.filter(r => r.status === 'contacted').length}`,
      `• Completed: ${filteredRegistrations.filter(r => r.status === 'completed').length}`,
      '',
      'CONTACT INFORMATION:',
      '• Email: iec@ueab.ac.ke',
      '• Phone: +254 [Contact Number]',
      '• Website: https://ueab.ac.ke',
      '',
      '='.repeat(120),
      '                    © 2025 University of Eastern Africa, Baraton',
      '                        Innovation & Entrepreneurship Centre',
      '                              CONFIDENTIAL DOCUMENT',
      '='.repeat(120)
    ];
    
    // Combine all parts
    const fullContent = [
      ...letterhead,
      headers.map(header => `"${header}"`).join(','),
      ...csvData.map((row: any[]) => row.map((field: any) => `"${String(field).replace(/"/g, '""')}"`).join(',')),
      ...footer
    ].join('\n');
    
    const blob = new Blob([fullContent], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BIEW2025_Official_Registration_Report_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const delegationCount = (registrations as Registration[]).filter((r: Registration) => r.registrationType === 'delegation').length;
  const exhibitionCount = (registrations as Registration[]).filter((r: Registration) => r.registrationType === 'exhibition').length;
  const pendingCount = (registrations as Registration[]).filter((r: Registration) => r.status === 'pending').length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">BIEW 2025 Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage registration submissions and track participant status</p>
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={exportToCSV}
                variant="outline"
                className="flex items-center"
                data-testid="button-export-csv"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                  <p className="text-2xl font-bold text-gray-900">{(registrations as Registration[]).length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Delegations</p>
                  <p className="text-2xl font-bold text-gray-900">{delegationCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Exhibitions</p>
                  <p className="text-2xl font-bold text-gray-900">{exhibitionCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, organization, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-registrations"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger data-testid="select-status-filter">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registrations List */}
        <Card>
          <CardHeader>
            <CardTitle>Registrations ({filteredRegistrations.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredRegistrations.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No registrations found matching your criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRegistrations.map((registration: Registration) => (
                  <div key={registration.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left Column - Basic Info */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{registration.fullName}</h3>
                          <Badge variant={registration.registrationType === 'delegation' ? 'default' : 'secondary'}>
                            {registration.registrationType.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            {registration.organizationName}
                          </div>
                          <div className="flex items-center">
                            <UserCheck className="h-4 w-4 mr-2" />
                            {registration.position}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            <a href={`mailto:${registration.email}`} className="text-blue-600 hover:underline">
                              {registration.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            <a href={`tel:${registration.phone}`} className="text-blue-600 hover:underline">
                              {registration.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Middle Column - Details */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Registration Details</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div><strong>Category:</strong> {registration.category}</div>
                          {registration.participantCount && (
                            <div><strong>Participants:</strong> {registration.participantCount}</div>
                          )}
                          {registration.boothRequirements && (
                            <div><strong>Booth Requirements:</strong> {registration.boothRequirements}</div>
                          )}
                          {registration.specialRequirements && (
                            <div><strong>Special Requirements:</strong> {registration.specialRequirements}</div>
                          )}
                          {registration.paymentPreference && (
                            <div><strong>Payment Preference:</strong> {registration.paymentPreference}</div>
                          )}
                          {registration.additionalInfo && (
                            <div><strong>Additional Info:</strong> {registration.additionalInfo}</div>
                          )}
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(registration.submittedAt).toLocaleDateString()} at {new Date(registration.submittedAt).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Status & Actions */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Status & Actions</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                            {getStatusBadge(registration.status)}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Update Status</label>
                            <Select
                              value={registration.status}
                              onValueChange={(status) => updateStatusMutation.mutate({ id: registration.id, status })}
                              disabled={updateStatusMutation.isPending}
                            >
                              <SelectTrigger data-testid={`select-status-${registration.id}`}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="text-xs text-gray-500">
                            Registration ID: #{registration.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;