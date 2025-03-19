import { useEffect, useState } from "react";
import TestimonialCard from "./components/Card/TestimonialCard";
import LoadingSpinner from "./components/Loading/LoadingSpinner";

interface Testimonial {
  theme: "purple" | "grey" | "white" | "dark";
  profileImage: string;
  name: string;
  title: string;
  highlightText: string;
  quoteText: string;
}

const App = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    handleFetch();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center min-h-screen px-[35px] py-[73px] md:px-[60px] md:py-[83px] xl:p-0">
      <div className="grid grid-cols-1 xl:grid-cols-[827px_1fr] gap-8 max-w-[1114px] w-full">
        <div className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_255px] gap-8">
            {testimonials[0] && <TestimonialCard {...testimonials[0]} />}
            <div className="hidden xl:block">
              {testimonials[1] && <TestimonialCard {...testimonials[1]} />}
            </div>
          </div>
          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials[1] && <TestimonialCard {...testimonials[1]} />}
            {testimonials[0] && <TestimonialCard {...testimonials[2]} />}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[255px_1fr] gap-8">
            <div className="hidden xl:block">
              {testimonials[0] && <TestimonialCard {...testimonials[2]} />}
            </div>
            {testimonials[1] && <TestimonialCard {...testimonials[3]} />}
          </div>
        </div>
        <div>{testimonials[4] && <TestimonialCard {...testimonials[4]} />}</div>
      </div>
    </main>
  );
};

export default App;
