import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@shared/schema";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Mock data for now - will connect to API later
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Innovation in East Africa",
      slug: "future-of-innovation-east-africa",
      content: "Full article content here...",
      excerpt: "Exploring the emerging trends and opportunities shaping innovation across East African universities and startup ecosystems.",
      imageUrl: "/src/assets/images/innovation-week-team.jpg",
      authorName: "Dr. Jade Abuga",
      authorImage: "/src/assets/images/BTV08418.JPG",
      category: "Innovation",
      tags: ["East Africa", "Innovation", "Universities"],
      isPublished: true,
      publishedAt: new Date("2024-01-15"),
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-15"),
    },
    {
      id: 2,
      title: "Building Sustainable Startups: Lessons from UEAB",
      slug: "building-sustainable-startups",
      content: "Full article content here...",
      excerpt: "Key insights and practical strategies for creating environmentally conscious and financially sustainable startups.",
      imageUrl: "/src/assets/images/BTV03925_1756133531727.jpg",
      authorName: "Mr. Andrew Omambia",
      authorImage: "/src/assets/images/BTV08426.JPG",
      category: "Entrepreneurship",
      tags: ["Startups", "Sustainability", "Business Strategy"],
      isPublished: true,
      publishedAt: new Date("2024-01-20"),
      createdAt: new Date("2024-01-18"),
      updatedAt: new Date("2024-01-20"),
    },
    {
      id: 3,
      title: "Digital Transformation in African Agriculture",
      slug: "digital-transformation-agriculture",
      content: "Full article content here...",
      excerpt: "How technology is revolutionizing farming practices and creating new opportunities for agricultural innovation.",
      imageUrl: "/src/assets/images/kiw-image2.jpg",
      authorName: "Prof. Francis Ramesh",
      authorImage: "/src/assets/images/BTV08537.JPG",
      category: "Technology",
      tags: ["Agriculture", "Digital Transformation", "Africa"],
      isPublished: true,
      publishedAt: new Date("2024-01-25"),
      createdAt: new Date("2024-01-22"),
      updatedAt: new Date("2024-01-25"),
    }
  ];

  const categories = ["all", "Innovation", "Entrepreneurship", "Technology", "Research"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Insights, stories, and updates from the Innovation & Entrepreneurship Centre.
              Stay informed about the latest trends in innovation and entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-articles"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40" data-testid="select-category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-testid={`card-blog-post-${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl || "/api/placeholder/600/400"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt!)}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage || "/api/placeholder/32/32"}
                        alt={post.authorName}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">{post.authorName}</p>
                        <p className="text-xs text-gray-500">Author</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" asChild className="w-full justify-between group">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights on innovation and entrepreneurship.
          </p>
          <Button asChild variant="secondary" size="lg" data-testid="button-subscribe-newsletter">
            <Link href="/contact#newsletter">
              Subscribe to Newsletter
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;