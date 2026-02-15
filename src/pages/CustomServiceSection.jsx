import { useMemo, useState } from "react";
import {
  PlusCircle,
  MinusCircle,
  Trash2,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function CustomServiceSection() {
  
  const serviceCategories = {
    "Digital Marketing": [
      { id: 1, name: "Facebook Ads Setup", price: 2999 },
      { id: 2, name: "SEO Optimization", price: 3999 },
      { id: 3, name: "Social Media Management", price: 2499 },
    ],
    "Website Build": [
      { id: 4, name: "Portfolio Website", price: 7999 },
      { id: 5, name: "Business Website", price: 12999 },
      { id: 6, name: "E-commerce Website", price: 19999 },
    ],
    "Video Editing": [
      { id: 7, name: "Short Video Editing", price: 999 },
      { id: 8, name: "YouTube Video Editing", price: 1999 },
      { id: 9, name: "Promotional Video Editing", price: 3499 },
    ],
  };

  
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("services"); 
  
  const addService = (service) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === service.id);
      if (exists) {
        return prev.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  };

  const removeService = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInput = (e) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };

  
  const handlePayment = () => {
    alert("Redirecting to payment gateway...");
  };

  
  if (page === "services") {
    return (
      <section className="bg-gradient-to-b from-amber-50 to-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-200/70 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
              <ShieldCheck size={16} />
              Customize & Order
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3">
              Customize Your Service Package
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Pick only what you need. Build a package that matches your goal
              and budget.
            </p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-5">
                Select Your Services
              </h3>

              {Object.entries(serviceCategories).map(([category, services]) => (
                <div key={category} className="mb-7">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {category}
                    </h4>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      {services.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="group border border-slate-200 p-4 rounded-xl flex items-start justify-between gap-3 hover:shadow-md hover:border-blue-300 transition bg-white"
                      >
                        <div>
                          <h5 className="font-semibold text-slate-900">
                            {service.name}
                          </h5>
                          <p className="text-sm text-slate-600 mt-1">
                            Starting from
                          </p>
                          <p className="text-lg font-bold text-blue-600">
                            ৳{service.price}
                          </p>
                        </div>

                        <button
                          onClick={() => addService(service)}
                          className="shrink-0 bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-500 transition"
                        >
                          <PlusCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Add</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm lg:sticky lg:top-6">
                <div className="flex items-center gap-2 mb-5">
                  <ShoppingCart className="text-slate-900" />
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Your Cart
                  </h3>
                </div>

                {cart.length === 0 ? (
                  <div className="border border-dashed border-slate-300 rounded-xl p-6 text-center text-slate-500">
                    No services added yet.
                    <p className="text-sm mt-1">
                      Select services from the left side.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="border border-slate-200 p-4 rounded-xl flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-600">
                            ৳{item.price} × {item.quantity}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="p-1 rounded-md hover:bg-slate-100"
                            aria-label="decrease"
                          >
                            <MinusCircle className="w-5 h-5" />
                          </button>

                          <span className="font-bold w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="p-1 rounded-md hover:bg-slate-100"
                            aria-label="increase"
                          >
                            <PlusCircle className="w-5 h-5" />
                          </button>

                          <button
                            onClick={() => removeService(item.id)}
                            className="p-1 rounded-md hover:bg-red-50"
                            aria-label="remove"
                          >
                            <Trash2 className="w-5 h-5 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}

                    
                    <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-5 rounded-xl mt-4">
                      <p className="text-sm opacity-90">Total Amount</p>
                      <p className="text-3xl font-extrabold">৳{total}</p>
                    </div>

                    <button
                      onClick={() => setPage("checkout")}
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold mt-3 hover:bg-emerald-500 transition flex items-center justify-center gap-2"
                    >
                      Proceed to Checkout
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm font-semibold">
  <div className="rounded-xl py-4 text-white bg-gradient-to-r from-slate-900 to-slate-800 shadow-md">
    ✅ Expert-verified services
  </div>

  <div className="rounded-xl py-4 text-white bg-gradient-to-r from-blue-900 to-blue-700 shadow-md">
    ⚡ Fast delivery support
  </div>

  <div className="rounded-xl py-4 text-white bg-gradient-to-r from-emerald-900 to-emerald-700 shadow-md">
    💬 Dedicated help channel
  </div>
</div>

        </div>
      </section>
    );
  }

  
  // RENDER: CHECKOUT PAGE
  
  if (page === "checkout") {
    return (
      <section className="min-h-screen bg-slate-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="text-emerald-600" />
              <h2 className="text-2xl font-bold">Checkout</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={handleInput}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleInput}
              />
              <Input
                name="phone"
                type="text"
                placeholder="Phone Number"
                onChange={handleInput}
              />
              <Input
                name="address"
                type="text"
                placeholder="Address"
                onChange={handleInput}
              />
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-500 transition"
            >
              Pay Now (SSLCommerz / Stripe)
            </button>

            <button
              onClick={() => setPage("services")}
              className="w-full mt-3 bg-slate-100 py-3 rounded-xl font-semibold hover:bg-slate-200 transition flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Services
            </button>
          </div>

          
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm lg:sticky lg:top-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            {cart.length === 0 ? (
              <p className="text-slate-500 text-sm">No services selected.</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-slate-700">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold text-slate-900">
                      ৳{item.price * item.quantity}
                    </span>
                  </div>
                ))}

                <div className="border-t pt-3 mt-3 flex justify-between">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-2xl font-extrabold text-blue-600">
                    ৳{total}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mt-2">
                  By continuing, you agree to our service terms & policies.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return null;
}


function Input({ name, type, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl text-sm"
      required
    />
  );
}
