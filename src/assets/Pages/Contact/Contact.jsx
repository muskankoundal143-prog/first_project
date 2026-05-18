import React from "react";

const Contact = () => {
  return (
    <>
  
      <section className="w-full bg-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          
    
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              <span className="text-black">Contact</span> <br />
              Mindful Adroit
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Reach out to discuss corporate training, technical skill
              development, or professional travel management. Our team responds
              promptly with tailored and practical solutions.
            </p>
          </div>

         
       </div>
      </section>
      <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4">

  

  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


      <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-100">
     

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Expert Guidance
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Consult with experienced professionals who understand real-world
          challenges and provide practical, industry-focused solutions.
        </p>
      </div>


      <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-100">
        
     
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Tailored Solutions
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Customized training and travel solutions carefully designed around
          your goals, requirements, and organizational needs.
        </p>
      </div>

     
      <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300 border border-gray-100">
        
       

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Response
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We value your time and ensure prompt communication, efficient support,
          and timely follow-ups for every inquiry.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
        Contact Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Let’s Start a Conversation
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        You can also email us anytime, and we'll route your question to the
        person best suited to help you.
      </p>
    </div>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">


      <div className="h-full">
        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center">

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Phone
              </h3>
              <a href="tel:+919816712345" className="text-gray-600 hover:text-green-700">
                +91 9816712345
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Email
              </h3>
              <a href="mailto:info@mindfuladroit.com" className="text-gray-600 hover:text-blue-700">
                info@mindfuladroit.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Location
              </h3>
              <p className="text-gray-600">
                India (Serving Nationwide)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Mon – Fri | 9:00 AM – 6:00 PM
              </p>
            </div>

          </div>
        </div>
      </div>

   
      <div className="h-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 h-full">

          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Send Us a Message
          </h3>

          <form className="space-y-6">

            <input className="w-full px-4 py-3 border rounded-xl" placeholder="Full Name" />
            <input className="w-full px-4 py-3 border rounded-xl" placeholder="Email Address" />
            <input className="w-full px-4 py-3 border rounded-xl" placeholder="Phone Number" />

            <select className="w-full px-4 py-3 border rounded-xl">
              <option>Select a service</option>
              <option>Corporate Training</option>
              <option>Technical Training</option>
              <option>Travel Services</option>
              <option>Event Management</option>
            </select>

            <textarea
              rows="5"
              className="w-full px-4 py-3 border rounded-xl"
              placeholder="Tell us about your requirements"
            />

            <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold">
              Send Message
            </button>

          </form>
        </div>
      </div>

    </div>
  </div>
</section>
 <footer className="mt-10">
 <div className="bg-black text-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

       
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Mindful Adroit Consultancy
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Empowering professionals, building skills, and managing journeys
                with excellence and integrity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Services
              </h3>

              <ul className="space-y-2">
                <li>Corporate Training</li>
                <li>Technical Training</li>
                <li>Travel Services</li>
              </ul>
            </div>

       
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Company
              </h3>

              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>

       
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Get in Touch
              </h3>

              <div className="space-y-2">
                <p>
                  Pankaj Villa Kanlog, Shimla 171001,
                  Himachal Pradesh
                </p>

                <p>+91 9816712345</p>

                <p>info@mindfuladroit.com</p>
              </div>
            </div>

          </div>
        </div>


        <div className="bg-black text-gray-500 text-center pt-6 pb-8 border-t border-gray-800">
          <p>
            © 2026 Mindful Adroit Consultancy. All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
};

export default Contact;