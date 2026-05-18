import React from "react";

const Ourservices = () => {
  return (
    <>

      <section className="w-full bg-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-black">
                Web <br />
                Development
              </span>
              <br />
              <span className="text-green-800">Services</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8">
              We build scalable, high-performance and SEO-optimized websites
              using MERN stack, Next.js and WordPress for businesses,
              startups and institutions.
            </p>

            <div className="flex items-center space-x-4">
              <button className="bg-green-700 hover:bg-green-800 transition duration-300 rounded-lg text-white px-6 py-3 font-medium">
                Get Free Consultation
              </button>
            </div>
          </div>


          <div className="md:w-1/2 flex justify-center">
           
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Development <span className="text-green-800">Expertise</span>
            </h2>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="bg-white rounded-2xl p-8 shadow-lg  hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                MERN Stack Development
              </h3>
              <p className="text-gray-600 leading-7">
                We build scalable, full-stack web applications using MongoDB,
                Express.js, React, and Node.js with seamless user experiences.
              </p>
            </div>

   
            <div className="bg-white rounded-2xl p-8 shadow-lg  hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semiboldmb-4">
                Next.js Development
              </h3>
              <p className="text-gray-600 leading-7">
                Fast, SEO-optimized web applications built with Next.js for
                performance, scalability, and improved search visibility.
              </p>
            </div>


            <div className="bg-white rounded-2xl p-8 shadow-lg  hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                WordPress Development
              </h3>
              <p className="text-gray-600 leading-7">
                Dynamic WordPress websites with custom themes, plugin
                development, and performance-focused solutions tailored to
                your business.
              </p>
            </div>

    
            <div className="bg-white rounded-2xl p-8 shadow-lg  hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold  mb-4">
                Responsive Web Design
              </h3>
              <p className="text-gray-600 leading-7">
                Mobile-first, fully responsive website designs ensuring
                seamless experiences across desktops, tablets, and smartphones.
              </p>
            </div>

          </div>
        </div>
      </section>
      <footer className="mt-10">
  <div className="bg-black text-gray-400 py-15">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
        <h2 className="text-xl font-bold text-white mb-3">
          Mindful Adroit Consultancy
        </h2>
        <p className="text-gray-400">
          Empowering professionals, building skills, and managing journeys with excellence and integrity.
        </p>
      </div>

   
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
        <ul className="space-y-2">
          <li>Corporate Training</li>
          <li>Technical Training</li>
          <li>Travel Services</li>
        </ul>
      </div>

   
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
        <ul className="space-y-2">
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>

        <p>Pankaj Villa Kanlog, Shimla 171001, Himachal Pradesh</p>
        <p className="mt-2">+91 9816712345</p>
        <p>info@mindfuladroit.com</p>
      </div>

    </div>
  </div>


 <div className="bg-black text-gray-500 text-center pt-6 pb-14 border-t border-gray-800">
  <p>© 2026 Mindful Adroit  Consultancy. All Rights Reserved.</p>
</div>

</footer>
    </>
  );
};

export default Ourservices;