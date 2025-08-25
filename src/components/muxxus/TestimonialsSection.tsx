"use client";

import AboutBoldTestimonial from "@/components/testimonial/AboutBoldTestimonial";

type Props = {
  title: string;
  description: string;
  testimonials: {
    quote: string;
    icon: string;
    author: string;
    designation: string;
    avatar: string;
  }[];
  className?: string;
};

/**
 * TestimonialsSection - Composant de section des témoignages clients
 * 
 * Structure : Titre + Description + Composant de témoignages
 * 
 * @example
 * <TestimonialsSection 
 *   title="What Our Customers Say"
 *   description="Description of testimonials"
 *   testimonials={[
 *     { quote: "Great service", author: "John Doe", designation: "CEO", avatar: "/avatar.jpg" }
 *   ]}
 * />
 */
const TestimonialsSection = ({ 
  title, 
  description, 
  testimonials,
  className = ""
}: Props) => {
  // Debug: Log des données reçues
  console.log('TestimonialsSection props:', { title, description, testimonials });
  console.log('Testimonials array length:', testimonials?.length);

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container2">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-text-3 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <AboutBoldTestimonial testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
