import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Tag,
  ArrowRight,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const NewsPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "News & Updates | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-primary py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Stay informed with the latest news, articles, and announcements from
            the Innovation & Entrepreneurship Centre.
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
                <div className="text-sm font-medium mb-2">Search News</div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
                  <Input
                    placeholder="Search by keyword..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Category</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="announcements">Announcements</SelectItem>
                    <SelectItem value="events">Event Recaps</SelectItem>
                    <SelectItem value="success-stories">Success Stories</SelectItem>
                    <SelectItem value="insights">Industry Insights</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Time Frame</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Time</SelectItem>
                    <SelectItem value="last-week">Last Week</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Featured Articles
            </h2>
            <p className="text-neutral-600">
              Our most important and recent updates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Article 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <img
                  src="/src/assets/images/BTV08785.JPG"
                  alt="1st Baraton Innovation and Entrepreneurship Week"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Events
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> November 7, 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  1st Baraton Innovation and Entrepreneurship Week Concludes Successfully
                </h3>
                <p className="text-neutral-600 mb-4">
                  The first Baraton Innovation and Entrepreneurship Week (BIEW) featured collaboration 
                  with Microsoft, resulting in 8 innovative ideas and 16 prototypes being developed by students 
                  across various disciplines. The event has set a strong foundation for future innovation initiatives.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-neutral-500 mr-2" />
                    <span className="text-neutral-500 text-sm">By IEC Committee</span>
                  </div>
                  <Link href="/news/baraton-innovation-week-concludes">
                    <Button variant="link" className="p-0 h-auto text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Featured Article 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <img
                  src="/src/assets/images/BTV08537.JPG"
                  alt="MoU Signing with CBaaS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Partnerships
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> February 17, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  University Signs MoU with CBaaS to Accelerate Student Innovation
                </h3>
                <p className="text-neutral-600 mb-4">
                  The University of Eastern Africa, Baraton has signed a Memorandum of Understanding with CBaaS, 
                  a major step towards strengthening student entrepreneurship. This partnership will provide funding 
                  opportunities, incubation support, and access to venture capital networks.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-neutral-500 mr-2" />
                    <span className="text-neutral-500 text-sm">By IEC Committee</span>
                  </div>
                  <Link href="/news/cbaas-partnership">
                    <Button variant="link" className="p-0 h-auto text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-10 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Latest News
            </h2>
            <p className="text-neutral-600">
              Stay updated with our recent activities and announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Item 1 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="/src/assets/images/BTV08784.JPG"
                  alt="Presidential Innovation Award Finalists"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Recognition
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> March 5, 2025
                  </span>
                </div>
                <CardTitle className="text-lg">UEAB Students Shortlisted for Presidential Innovation Award</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  A group of students from the Innovation & Entrepreneurship Centre were shortlisted for the 
                  2024/2025 Presidential Innovation Award, marking a significant milestone in IEC's national recognition.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/presidential-award-shortlist">
                  <Button variant="link" className="p-0 h-auto text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* News Item 2 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Hackathon Winners"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Success Stories
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> July 22, 2023
                  </span>
                </div>
                <CardTitle className="text-lg">Health Innovation Hackathon Winners Announced</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  Team MediSolutions from UEAB wins the national Health Innovation
                  Hackathon with their mobile health diagnostic platform.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/hackathon-winners">
                  <a className="text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* News Item 3 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559686045-d1d8eeb76d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="New Funding"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Announcements
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> July 15, 2023
                  </span>
                </div>
                <CardTitle className="text-lg">New Funding Available for Student Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  The centre secures $100,000 in grant funding to support student-led
                  startups. Applications open on August 15, 2023.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/new-funding-available">
                  <a className="text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* News Item 4 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Industry Partnership"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Partnerships
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> July 10, 2023
                  </span>
                </div>
                <CardTitle className="text-lg">New Industry Partnership with Safaricom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  The Innovation Centre partners with Safaricom to provide students
                  with internship opportunities and access to tech resources.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/safaricom-partnership">
                  <a className="text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* News Item 5 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Mentor Program"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Programs
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> June 28, 2023
                  </span>
                </div>
                <CardTitle className="text-lg">Introducing Our New Mentor Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  The centre launches an expanded mentorship program connecting students
                  with industry professionals and successful entrepreneurs.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/new-mentor-program">
                  <a className="text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* News Item 6 */}
            <Card>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536009349192-c881b5fd93be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Alumni Success"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Success Stories
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> June 15, 2023
                  </span>
                </div>
                <CardTitle className="text-lg">Alumni Startup Secures $1M in Seed Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm">
                  FarmSense Solutions, founded by UEAB alumni and incubated at our centre,
                  has secured $1M in seed funding to expand operations.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href="/news/alumni-startup-funding">
                  <a className="text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Innovation Insights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Innovation Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Latest From Our Blog
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Insights, perspectives, and thought leadership on innovation and 
              entrepreneurship from our team and guest contributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1569078449082-26d12962b625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Innovation in Africa"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="py-6 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> August 10, 2023
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Innovation
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  The Rise of Innovation Hubs in Africa
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Exploring how innovation hubs are transforming entrepreneurship
                  across Africa and creating new opportunities for economic growth.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-neutral-500">By Dr. Sarah Kimani</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href="/blog/innovation-hubs-africa">
                  <a className="text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Post 2 */}
            <Card className="flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559497237-5c0546916b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Sustainable Entrepreneurship"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="py-6 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> July 25, 2023
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Sustainability
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Sustainable Entrepreneurship: Building Businesses That Matter
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  How entrepreneurs can integrate sustainability principles into 
                  their business models to create lasting impact and value.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-neutral-500">By David Nyangau</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href="/blog/sustainable-entrepreneurship">
                  <a className="text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* Blog Post 3 */}
            <Card className="flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Youth Entrepreneurship"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="py-6 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> July 12, 2023
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Education
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Fostering Youth Entrepreneurship Through Education
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  The importance of entrepreneurship education in schools and 
                  universities to prepare the next generation of innovators.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-neutral-500">By Grace Ochieng</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href="/blog/youth-entrepreneurship-education">
                  <a className="text-secondary font-semibold hover:text-secondary/80 transition-colors inline-flex items-center">
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90">
              View All Blog Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 text-neutral-100">
              Subscribe to our newsletter to receive the latest news, events, and
              opportunities from the Innovation & Entrepreneurship Centre.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-md text-neutral-900 bg-white flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 px-6 rounded-md transition duration-300 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="mt-4 text-sm text-neutral-300">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
