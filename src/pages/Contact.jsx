import { useState } from "react";
import { ChevronDown, HelpCircle, Send } from "lucide-react";
import { saveContactMessage } from "../api/contact.api"; // ✅ add this

const faqs = [
  {
    q: "How can I enroll in a course?",
    a: "Go to the Courses page, click Enroll, fill in your details, and submit. You'll instantly be enrolled for free courses.",
  },
  {
    q: "Do I need any prior experience?",
    a: "Most of our beginner tracks require no prior experience. We start from the basics and guide you step-by-step.",
  },
  {
    q: "How long do I get access to the course?",
    a: "You get lifetime access to recorded content and community support based on the course type.",
  },
  {
    q: "Will I get mentor support?",
    a: "Yes. Live batches include Q&A sessions and private community support from mentors.",
  },
  {
    q: "How can I get a service from Zero Idea Academy?",
    a: "Visit Services, customize your package, proceed to checkout, and submit your info. Our team will contact you.",
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(0);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveContactMessage(formData);
      alert("✅ Message sent successfully!");

      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Contact Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Need help choosing a course or service? Check quick answers below or send us a message.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 grid place-items-center">
                  <HelpCircle className="text-blue-700" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Quick FAQs
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 transition"
                      >
                        <span className="font-semibold text-slate-900 text-sm sm:text-base">
                          {item.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 py-3 text-sm sm:text-base text-slate-600 bg-white">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-slate-500 mt-5">
                Didn’t find your answer? Send a message from the form.
              </p>
            </div>
          </div>

          
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}  
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-slate-200 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
                  required
                />
              </div>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (optional)"
                className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={6}
                className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              <p className="text-xs text-slate-500 text-center">
                We usually respond within a few hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
