import Image from "next/image";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { FaCalendar, FaMapMarkerAlt, FaClock, FaUsers, FaVideo, FaGlobe, FaTicketAlt, FaStar } from "react-icons/fa";

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "Muxxus Global Summit 2024",
      date: "March 15-17, 2024",
      location: "San Francisco, CA",
      type: "Conference",
      attendees: "500+",
      description: "Join industry leaders and innovators for three days of insights, networking, and the future of global finance",
      image: "/images/events/global-summit.jpg",
      featured: true
    },
    {
      title: "Digital Banking Innovation Workshop",
      date: "April 8, 2024",
      location: "London, UK",
      type: "Workshop",
      attendees: "100",
      description: "Hands-on workshop exploring the latest innovations in digital banking and fintech",
      image: "/images/events/innovation-workshop.jpg",
      featured: false
    },
    {
      title: "Asia-Pacific Fintech Forum",
      date: "May 12-13, 2024",
      location: "Singapore",
      type: "Forum",
      attendees: "300+",
      description: "Connect with fintech leaders across the Asia-Pacific region",
      image: "/images/events/asia-pacific-forum.jpg",
      featured: false
    }
  ];

  const eventCategories = [
    {
      name: "Conferences",
      description: "Large-scale events with industry leaders and networking opportunities",
      count: "8 events",
      icon: FaGlobe,
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Workshops",
      description: "Hands-on learning sessions with practical applications",
      count: "15 events",
      icon: FaUsers,
      color: "from-green-50 to-green-100"
    },
    {
      name: "Webinars",
      description: "Online events covering trending topics and best practices",
      count: "25+ events",
      icon: FaVideo,
      color: "from-purple-50 to-purple-100"
    },
    {
      name: "Networking",
      description: "Meet industry peers and potential partners",
      count: "12 events",
      icon: FaUsers,
      color: "from-orange-50 to-orange-100"
    }
  ];

  const pastEvents = [
    {
      title: "Muxxus Connect 2023",
      date: "November 2023",
      location: "New York, NY",
      attendees: "400+",
      highlights: ["Keynote from industry leaders", "Product announcements", "Networking sessions"]
    },
    {
      title: "European Fintech Symposium",
      date: "October 2023",
      location: "Berlin, Germany",
      attendees: "250+",
      highlights: ["Panel discussions", "Startup showcase", "Regulatory insights"]
    },
    {
      title: "Digital Transformation Summit",
      date: "September 2023",
      location: "Sydney, Australia",
      attendees: "300+",
      highlights: ["Case studies", "Technology demos", "Expert roundtables"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "Events", href: "/events", isActive: true }
              ]} 
            />
            <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-6">
              Join Us at Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with industry leaders, learn from experts, and discover the future 
              of global financial services at our events worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton 
                text="View Upcoming Events" 
                href="#upcoming-events"
                className="bg-orange-600 hover:bg-orange-700"
              />
              <CircleFillButton 
                text="Register for Events" 
                href="#"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Event</h2>
            <p className="text-lg text-gray-600">Don&apos;t miss our biggest event of the year</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-600 font-semibold">Featured Event</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Muxxus Global Summit 2024</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Join industry leaders and innovators for three days of insights, networking, 
                  and the future of global finance. Experience cutting-edge technology demos, 
                  expert panels, and exclusive networking opportunities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaCalendar className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">March 15-17, 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">500+ attendees expected</span>
                  </div>
                </div>
                <CircleFillButton 
                  text="Register Now" 
                  href="#"
                  className="bg-orange-600 hover:bg-orange-700"
                />
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-8 text-center">
                <div className="text-8xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Early Bird Pricing</h4>
                <p className="text-gray-600">Save 20% when you register before January 31st</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle 
            title="Upcoming Events"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <div className="text-6xl">📅</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="w-4 h-4" />
                      {event.attendees}
                    </div>
                  </div>
                  <CircleFillButton 
                    text="Learn More" 
                    href="#"
                    className="bg-orange-600 hover:bg-orange-700 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Types</h2>
            <p className="text-lg text-gray-600">Find the perfect event for your interests and schedule</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-orange-600 font-semibold">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600">Relive the highlights from our previous events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="w-4 h-4" />
                    {event.attendees}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <CircleFillButton 
                  text="View Recap" 
                  href="#"
                  className="bg-gray-600 hover:bg-gray-700 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get notified about upcoming events and exclusive opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CircleFillButton 
              text="Subscribe to Updates" 
              href="#"
              className="bg-orange-600 hover:bg-orange-700"
            />
            <CircleFillButton 
              text="Contact Events Team" 
              href="/contact"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
