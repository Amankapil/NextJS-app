"use client";
import axios from "axios";
import React, { useState } from "react";

const Trainig = () => {
  const [loading, setLoading] = useState(false);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    setLoading(true);
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      setLoading(false);
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );

    // const data = await axios.post("/api/contact").then((t) => {
    //   console.log(t);
    // });
    console.log(data);
    var options = {
      key: "rzp_test_WjOtHCtWT76ZeX", // Enter the Key ID generated from the Dashboard
      name: "Name",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        setLoading(false);
      },
      prefill: {
        name: "Aman Kapil",
        email: "amankapil60@gmail.com",
        contact: "8103075691",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <section className="main-training py-28">
        <section className="abouttraining max-w-7xl mx-auto mb-20">
          <p className="text-[#175574] text-[32px] leading-[48px] text-justify max-md:p-4">
            We offer customized content that specifically targets your unique
            challenges and objectives, ensuring maximum impact and
            applicability. Third, we provide flexible delivery options,
            including in-person workshops, virtual training sessions, or blended
            learning formats, to accommodate diverse preferences and needs.
            Lastly, our proven track record speaks for itself, with hundreds of
            satisfied clients who have experienced tangible benefits and results
            from our tailored training solutions. Join us and discover how our
            expertise can propel you or your organization forward.
          </p>
        </section>
        <section className="w-full py-6 md:py-12">
          <div className="contaner px4 md:px6">
            <div className="flex flex-wrap justify-center items-center gap-10 ">
              <div className="card border-1 shadow-2xl p-12 border-[#062b43] max-w-[400px] bg-white">
                <div className="flex flex-col items-start py-3">
                  <h3 className="text-3xl font-bold">FrontEnd Developer</h3>
                  {/* <p className="text-[#062b43] darkxt-gray-400 mt-3">
                    <span className="text-3xl">6000rs</span>
                 
                  </p> */}
                </div>
                <div className="grid gap-4 py-6 card-content">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Perfect for individuals</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get started with essential features
                    </p>
                  </div>
                  <ul className="grid gap-4 text-[14px] ">
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span>
                        <span className="font-bold">HTML, CSS, REACTJS,</span>
                        NEXTJS, TAILWIND CSS
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span>
                        <span className="font-bold"> 75-Day </span>
                        Intensive Training Program
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Communication</span>
                      <span>Skills Workshop</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Professional Resume</span>
                      <span>Design Services</span>
                    </li>

                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Gap Year Support</span>
                      <span>Guidance and Program</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Remote </span>
                      <span>Opportunities: Learn from Home</span>
                    </li>
                  </ul>
                </div>

                <p className="text-[#2f1c6a] darkxt-gray-400 mt-3 flex gap-1 items-end">
                  <span className="text[0.416667em]">₹</span>
                  <span className="text-3xl font-bold">6000</span>
                  <span>/3mo</span>
                </p>
                <div className="flex justify-center py-6 w-full">
                  <button
                    onClick={makePayment}
                    disabled={loading}
                    className="lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE] text-white p-4 rounded-full w-full font-bold"
                  >
                    {loading ? "Loading..." : "Proceed"}
                  </button>
                </div>
              </div>

              <div className="card border-1 shadow-2xl p-12 border-[#062b43] max-w-[410px] bg-white">
                <div className="flex flex-col items-start py-3">
                  <h3 className="text-3xl font-bold">Application Developer</h3>
                </div>
                <div className="grid gap-4 py-6 card-content">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Perfect for individuals</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get started with essential features
                    </p>
                  </div>
                  <ul className="grid gap-4 text-[14px]">
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Java/Kotlin,</span>
                      <span> React Native,Swift</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span>
                        <span className="font-bold"> 75-Day </span>
                        Intensive Training Program
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Communication</span>
                      <span>Skills Workshop</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Professional Resume</span>
                      <span>Design Services</span>
                    </li>

                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Gap Year Support</span>
                      <span>Guidance and Program</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Remote </span>
                      <span>Opportunities: Learn from Home</span>
                    </li>
                  </ul>
                </div>
                <p className="text-[#2f1c6a] darkxt-gray-400 mt-3 flex gap-1 items-end">
                  <span className="text[0.416667em]">₹</span>
                  <span className="text-3xl font-bold">6000</span>
                  <span>/3mo</span>
                </p>
                <div className="flex justify-center py-6 w-full">
                  <button
                    onClick={makePayment}
                    disabled={loading}
                    className="lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE] text-white p-4 rounded-full w-full font-bold"
                  >
                    {loading ? "Loading..." : "Proceed"}
                  </button>
                </div>
              </div>

              <div className="card border-1 shadow-2xl p-12 border-[#062b43]  max-w-[400px] bg-white">
                <div className="flex flex-col items-start py-3">
                  <h3 className="text-3xl font-bold">Backend developer</h3>
                </div>
                <div className="grid gap-4 py-6 card-content">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Perfect for individuals</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get started with essential features
                    </p>
                  </div>
                  <ul className="grid gap-4 text-[14px]">
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">NODEJS,</span>
                      <span>EXPRESSJS, MONGODB</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span>
                        <span className="font-bold"> 75-Day </span>
                        Intensive Training Program
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Communication</span>
                      <span>Skills Workshop</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Professional Resume</span>
                      <span>Design Services</span>
                    </li>

                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Gap Year Support</span>
                      <span>Guidance and Program</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold">Remote </span>
                      <span>Opportunities: Learn from Home</span>
                    </li>
                  </ul>
                </div>
                <p className="text-[#2f1c6a] darkxt-gray-400 mt-3 flex gap-1 items-end">
                  <span className="text[0.416667em]">₹</span>
                  <span className="text-3xl font-bold">6000</span>
                  <span>/3mo</span>
                </p>
                <div className="flex justify-center py-6 w-full">
                  <button
                    onClick={makePayment}
                    disabled={loading}
                    className="lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE] text-white p-4 rounded-full w-full font-bold"
                  >
                    {loading ? "Loading..." : "Proceed"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Trainig;

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
