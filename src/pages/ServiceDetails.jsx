import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TestimonialsHero from "./TestimonialsHero";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/data/services.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.id === parseInt(id));
        setService(found);
      });
  }, [id]);

  if (!service) {
    return <p className="text-center py-20 text-xl">Loading service details...</p>;
  }

  return (
    <div>
      <section className="py-16 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
      <p className="text-gray-700 text-lg mb-6">{service.details}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">৳{service.price}</p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Hire Now</button>
      <Link to="/services" className="text-blue-600 underline">
        ← Back to Services
      </Link>
    </section>
    <TestimonialsHero></TestimonialsHero>
    </div>
  );
}
