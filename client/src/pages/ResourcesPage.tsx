import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Users,
  ArrowRight,
  BookOpen,
  Award,
  Rocket,
  Globe,
  ExternalLink,
  Lightbulb,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ResourcesPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "Resources | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-primary py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Access valuable tools, guides, and materials to support your
            entrepreneurial journey and innovation projects.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <div className="text-sm font-medium mb-2">Search Resources</div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
                  <Input
                    placeholder="Search by keyword or topic..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Resource Type</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="guides">Guides & Toolkits</SelectItem>
                    <SelectItem value="templates">Templates</SelectItem>
                    <SelectItem value="articles">Articles</SelectItem>
                    <SelectItem value="videos">Videos</SelectItem>
                    <SelectItem value="publications">Publications</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Topic</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Topics" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    <SelectItem value="business">Business Planning</SelectItem>
                    <SelectItem value="funding">Funding</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="innovation">Innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Search Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories Section with Tabs */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Browse By Category
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Entrepreneurial Resources
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources designed to support
              entrepreneurs and innovators at every stage of their journey.
            </p>
          </div>

          <Tabs defaultValue="startup-toolkit" className="max-w-5xl mx-auto">
            <TabsList className="flex justify-center mb-8 bg-white p-1 rounded-lg border">
              <TabsTrigger
                value="startup-toolkit"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Startup Toolkit
              </TabsTrigger>
              <TabsTrigger
                value="business-plans"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Business Plans
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Funding Resources
              </TabsTrigger>
              <TabsTrigger
                value="publications"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Publications
              </TabsTrigger>
            </TabsList>

            {/* Startup Toolkit */}
            <TabsContent value="startup-toolkit" id="startup-toolkit">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Startup Toolkit
                  </h3>
                  <p className="text-neutral-600">
                    Essential resources and tools to help you launch and grow your startup.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Resource 1 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Lean Startup Methodology Guide
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            A comprehensive guide to implementing the Lean Startup methodology 
                            for building and validating your business model.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 28 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 2 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Market Research Toolkit
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Tools and templates for conducting effective market research 
                            to validate your business idea and target audience.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">ZIP, Multiple Files</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 3 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Customer Development Framework
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Step-by-step guide and templates for understanding your 
                            customers and validating your product-market fit.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 15 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 4 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Idea Validation Checklist
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            A practical checklist to evaluate and validate your business 
                            idea before investing significant time and resources.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 5 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="secondary">
                    View All Startup Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Business Plans */}
            <TabsContent value="business-plans" id="business-plans">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Business Plan Templates
                  </h3>
                  <p className="text-neutral-600">
                    Professional templates and guides to help you create effective business plans.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Resource 1 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Comprehensive Business Plan Template
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            A detailed template with guidance notes for creating a 
                            professional business plan suitable for investors and lenders.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">DOCX & PDF</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 2 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            One-Page Business Plan Template
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            A concise template for summarizing your business concept, 
                            ideal for early-stage startups and quick pitches.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">DOCX & PDF</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 3 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Financial Projections Template
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Excel spreadsheet with pre-built formulas for creating 
                            3-5 year financial projections for your business.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">XLSX</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 4 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Business Plan Writing Guide
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Step-by-step instructions and tips for creating an effective 
                            business plan that resonates with your target audience.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 20 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="secondary">
                    View All Business Plan Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Funding Resources */}
            <TabsContent value="funding" id="funding">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Funding Resources
                  </h3>
                  <p className="text-neutral-600">
                    Resources to help entrepreneurs find, apply for, and secure funding.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Resource 1 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Funding Options Guide
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Overview of different funding options available to startups 
                            in Kenya, including pros, cons, and best practices.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 25 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 2 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Pitch Deck Template
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Professional PowerPoint template with guidance for creating
                            an effective pitch deck for investors.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PPTX</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 3 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Kenya Funding Opportunities Database
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Curated list of active grant programs, investment funds, and 
                            competitions for startups in Kenya and East Africa.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">Online Database</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <ExternalLink className="h-3 w-3" /> Access
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resource 4 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Grant Application Guide
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Comprehensive guide to writing successful grant applications, 
                            with examples and templates.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 18 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="secondary">
                    View All Funding Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Publications */}
            <TabsContent value="publications" id="publications">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Research Publications
                  </h3>
                  <p className="text-neutral-600">
                    Academic papers, case studies, and reports on innovation and entrepreneurship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Publication 1 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            State of Entrepreneurship in Kenya 2023
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Annual report on the entrepreneurship ecosystem in Kenya, 
                            including trends, challenges, and opportunities.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 45 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Publication 2 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Innovation in East African Universities
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Research paper on fostering innovation within higher education 
                            institutions in East Africa.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 22 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Publication 3 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Social Entrepreneurship Case Studies
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Collection of case studies highlighting successful social 
                            enterprises in Kenya and their impact.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 35 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Publication 4 */}
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Technology Adoption in Kenyan SMEs
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">
                            Research on factors influencing technology adoption among 
                            small and medium enterprises in Kenya.
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">PDF, 28 pages</span>
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                              <Download className="h-3 w-3" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="secondary">
                    View All Publications <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              From Ideas to Impact
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Discover how students and faculty have transformed innovative ideas
              into successful ventures with support from our centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div id="farmsense" className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                  AgriTech
                </span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                  FarmSense Solutions
                </h3>
                <p className="text-neutral-600 mb-4">
                  A student-led startup developing affordable soil sensors and
                  analytics software to help small-scale farmers optimize crop
                  yields. The team participated in our incubation program and secured
                  $150,000 in seed funding.
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    alt="Founder"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-primary">Jane Mwangi</div>
                    <div className="text-sm text-neutral-500">
                      Computer Science, Class of 2019
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Success Story 2 */}
            <div id="learnconnect" className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                  EdTech
                </span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                  LearnConnect
                </h3>
                <p className="text-neutral-600 mb-4">
                  An educational platform connecting students with local tutors and
                  providing personalized learning resources tailored to the Kenyan
                  curriculum. The platform now has over 5,000 active users and 200
                  tutors.
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Founder"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-primary">David Kimani</div>
                    <div className="text-sm text-neutral-500">
                      Education, Class of 2020
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                  HealthTech
                </span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                  MediConnect
                </h3>
                <p className="text-neutral-600 mb-4">
                  A telemedicine platform that connects rural patients with healthcare 
                  professionals. The startup was developed by medical students at UEAB 
                  and has facilitated over 2,000 consultations.
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Founder"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-primary">Sarah Otieno</div>
                    <div className="text-sm text-neutral-500">
                      Medicine, Class of 2021
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Success Story 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1587613864521-85a9a6dddb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                  CleanTech
                </span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                  EcoWaste Solutions
                </h3>
                <p className="text-neutral-600 mb-4">
                  An innovative waste management company that converts organic waste 
                  into affordable, eco-friendly fertilizer for farmers. The company now 
                  processes 5 tons of waste daily.
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Founder"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-primary">John Omondi</div>
                    <div className="text-sm text-neutral-500">
                      Environmental Science, Class of 2018
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90">
              View All Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              External Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Partner Resources
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Access additional resources from our partners and affiliated organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Partner Resource 1 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">KENIA Startup Resources</CardTitle>
                <CardDescription>Kenya National Innovation Agency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://kenia.go.ke/wp-content/uploads/2021/01/cropped-KENIA-Blue-Logo-Only-1.png"
                    alt="KENIA"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-neutral-600 text-sm mb-4">
                  Access resources, funding opportunities, and support programs 
                  offered by the Kenya National Innovation Agency.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://kenia.go.ke/resources/" target="_blank" rel="noopener noreferrer">
                    Visit Resource Center <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Partner Resource 2 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">NACOSTI Research Database</CardTitle>
                <CardDescription>National Commission for Science, Technology and Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://nacosti.go.ke/wp-content/themes/nacosti-theme/images/logo-footer.png"
                    alt="NACOSTI"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-neutral-600 text-sm mb-4">
                  Repository of research papers, publications, and innovations 
                  registered with NACOSTI in Kenya.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://nacosti.go.ke/" target="_blank" rel="noopener noreferrer">
                    Access Database <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Partner Resource 3 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">iLab Africa Resources</CardTitle>
                <CardDescription>Strathmore University</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="https://strathmore.edu/wp-content/uploads/2018/03/Official-Strathmore-University-Logo-1.png"
                    alt="Strathmore University"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-neutral-600 text-sm mb-4">
                  Educational resources, research papers, and case studies from 
                  Strathmore University's innovation and entrepreneurship center.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://ilabafrica.strathmore.edu/resources/" target="_blank" rel="noopener noreferrer">
                    View Resources <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Request Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            If you're looking for specific resources or information that you couldn't 
            find on our website, our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                <a>Request Resources</a>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
              <Link href="/contact">
                <a>Contact Our Team</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
