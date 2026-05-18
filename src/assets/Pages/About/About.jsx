import React from "react";

const About = () => {
  return (
    <>
  
      <section className="w-full bg-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              <span className="text-black">About</span> Mindful <br />
              Adroit
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Bridging skills, knowledge, and real-world expertise to build
              confident professionals and future-ready organizations through
              impactful training, consulting, and strategic service solutions.
            </p>
          </div>

         


        </div>
      </section>
      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">


    <div className="text-center mb-14">
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our <span className="text-green-800">Team</span>
      </h2>

    
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-green-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-5xl font-bold text-black mb-3">
          50+
        </h3>

        <p className="text-xl font-semibold text-gray-800">
          Team Members
        </p>
      </div>

        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-5xl font-bold text-black mb-3">
          100+
        </h3>

        <p className="text-xl font-semibold text-gray-800">
          Expert Trainers
        </p>
      </div>


      <div className="bg-orange-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-5xl font-bold text-black mb-3">
          20+
        </h3>

        <p className="text-xl font-semibold text-gray-800">
          Years Experience
        </p>
      </div>

    </div>

  </div>
</section>


      <footer className="mt-10">

        <div className="bg-green-800 text-white py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">

            <h2 className="text-3xl font-bold mb-3">
           Ready to Build Skills That Create Impact?
            </h2>

            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
             Partner with Mindful Adroit Consultancy to deliver impactful training, empower teams, and manage professional journeys with confidence.
            </p>

            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
             Schedule a Consultation
            </button>

          </div>
        </div>

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
                  Pankaj Villa Kanlog, Shimla 171001, Himachal Pradesh
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

export default About;