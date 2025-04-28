import { Link } from "wouter";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Successful Conclusion of the 1st Innovation and Entrepreneurship Week",
      category: "Events",
      date: "November 7, 2024",
      imageUrl: "/src/assets/images/BTV08785.JPG",
      summary: "The first Innovation and Entrepreneurship Week concluded successfully with over 300 participants, 25 exhibitors, and 10 keynote speakers discussing innovation and entrepreneurship trends."
    },
    {
      id: 2,
      title: "MoU Signing with Factor-Y CbaaS to Support Innovation",
      category: "Partnerships",
      date: "February 17, 2025",
      imageUrl: "/src/assets/images/BTV08537.JPG",
      summary: "The Innovation & Entrepreneurship Centre has signed a Memorandum of Understanding with Factor-Y CbaaS to provide incubation support for student startups."
    },
    {
      id: 3,
      title: "Innovative Solutions Showcased at Hackathon 2025",
      category: "Events",
      date: "March 17, 2025",
      imageUrl: "/src/assets/images/BTV08784.JPG",
      summary: "Students demonstrated their problem-solving skills at our annual hackathon with innovative solutions addressing real-world challenges faced by local communities."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            News & Announcements
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Stay updated with our recent activities, events, and success stories from the Innovation & Entrepreneurship Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg card-3d">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" /> {item.category}
                  </span>
                  <span className="text-neutral-500 text-xs py-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {item.date}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 text-sm line-clamp-3">
                  {item.summary}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href={`/news/${item.id}`} className="text-primary font-medium text-sm flex items-center hover:text-primary/80 transition-colors">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/news">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;