import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaQuoteLeft, FaStar, FaBuilding, FaGlobe, FaUsers, FaIndustry } from "react-icons/fa";

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: "Sarah Chen",
      position: "CFO",
      company: "TechFlow Solutions",
      industry: "Technology",
      rating: 5,
      testimonial: "Muxxus has transformed our global financial operations. The multi-currency accounts and real-time FX rates have saved us significant costs and streamlined our international payments.",
      avatar: "/images/testimonials/sarah-chen.jpg",
      results: ["40% reduction in FX costs", "Streamlined 15+ country operations", "Real-time financial visibility"]
    },
    {
      name: "Marcus Rodriguez",
      position: "Head of Finance",
      company: "Global Retail Group",
      industry: "Retail",
      rating: 5,
      testimonial: "The platform's ease of use and comprehensive compliance features made our expansion into European markets seamless. Our team can now manage finances across borders effortlessly.",
      avatar: "/images/testimonials/marcus-rodriguez.jpg",
      results: ["Expanded to 8 new markets", "50% faster payment processing", "Improved compliance reporting"]
    },
    {
      name: "Dr. Emily Watson",
      position: "CEO",
      company: "InnovateHealth",
      industry: "Healthcare",
      rating: 5,
      testimonial: "As a healthcare startup, we needed a financial partner that understood our unique compliance requirements. Muxxus delivered beyond our expectations with their tailored solutions.",
      avatar: "/images/testimonials/emily-watson.jpg",
      results: ["HIPAA compliant operations", "Reduced administrative overhead", "Faster patient reimbursements"]
    }
  ];

  const industryTestimonials = [
    {
      industry: "Technology",
      count: "150+ companies",
      description: "Tech companies trust Muxxus for global expansion",
      icon: FaIndustry,
      color: "from-blue-50 to-blue-100"
    },
    {
      industry: "E-commerce",
      count: "200+ companies",
      description: "E-commerce leaders rely on our payment solutions",
      icon: FaGlobe,
      color: "from-green-50 to-green-100"
    },
    {
      industry: "Manufacturing",
      count: "100+ companies",
      description: "Manufacturers choose us for supply chain finance",
      icon: FaBuilding,
      color: "from-purple-50 to-purple-100"
    },
    {
      industry: "Healthcare",
      count: "75+ companies",
      description: "Healthcare providers trust our compliance features",
      icon: FaUsers,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const customerStats = [
    {
      metric: "10,000+",
      label: "Active Customers",
      description: "Businesses worldwide trust Muxxus"
    },
    {
      metric: "150+",
      label: "Countries Supported",
      description: "Global reach with local expertise"
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on"
    },
    {
      metric: "4.9/5",
      label: "Customer Rating",
      description: "Based on thousands of reviews"
    }
  ];

  const videoTestimonials = [
    {
      title: "How TechFlow Scaled Globally",
      company: "TechFlow Solutions",
      duration: "3:45",
      thumbnail: "/images/testimonials/video-1.jpg"
    },
    {
      title: "E-commerce Success Story",
      company: "Global Retail Group",
      duration: "4:12",
      thumbnail: "/images/testimonials/video-2.jpg"
    },
    {
      title: "Healthcare Innovation Journey",
      company: "InnovateHealth",
      duration: "5:30",
      thumbnail: "/images/testimonials/video-3.jpg"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Testimonials", href: "/testimonials", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how businesses worldwide are transforming their global operations 
              with Muxxus financial solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="Read Stories" 
                href="#featured-testimonials"
                className="bg-teal-600 hover:bg-teal-700"
              />
              <CircleFillButton 
                text="Share Your Story" 
                href="/contact"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section id="featured-testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Featured Customer Stories"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <div className="mb-6">
                  <FaQuoteLeft className="w-8 h-8 text-teal-200 mb-4" />
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-semibold text-teal-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-teal-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Across Industries</h2>
            <p className="text-lg text-gray-600">See how different industries benefit from Muxxus solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryTestimonials.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <industry.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.industry}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-teal-600 font-semibold">{industry.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600">Hear directly from our customers about their success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative">
                  <div className="text-6xl">🎥</div>
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-teal-600 font-medium mb-4">{video.company}</p>
                  <CircleFillButton 
                    text="Watch Video" 
                    href="#"
                    className="bg-teal-600 hover:bg-teal-700 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your journey with Muxxus and become part of our growing community of successful businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Get Started Today" 
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700"
            />
            <CircleFillButton 
              text="Schedule a Demo" 
              href="/contact"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
