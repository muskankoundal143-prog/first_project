import React from 'react'

const Home = () => {
  return (
    <>

      <section className='w-full bg-green-100 py-25'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
          
          <div className='md:w-1/2 space-y-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-green-800 leading-tight'>
              Multi-Service <br /> Powerhouse
            </h1>

            <p className='text-black text-2xl'>
              Training | Events | Travel
            </p>

            <div className='flex items-center space-x-4'>
              <button className='bg-green-700 hover:bg-green-800 rounded-lg text-white px-6 py-3 font-medium flex items-center gap-2'>
                Get in Touch →
              </button>

              <button className='text-black font-medium hover:text-green-800 hover:border-2 border-green-800 py-3 px-6 rounded-lg'>
                Explore Services
              </button>
            </div>
          </div>

          <div>
         
          </div>
        </div>
      </section>

  
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">


    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-green-800">
        <span className="text-black">Our</span> Services
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
        Mindful Adroit Consultancy delivers corporate training, technical skill development, and professional travel solutions for organizations and institutions across India.
      </p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


      <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">


        <h3 className="text-2xl font-semibold text-black hover:text-green-800 mb-3">
          Corporate Training
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Empower your workforce with professional development programs focused on leadership, communication, and workplace effectiveness.
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">
     

        <h3 className="text-2xl font-semibold text-black hover:text-green-800 mb-3">
          Technical Training
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Industry-oriented technical training programs bridging academic knowledge and real-world professional requirements.
        </p>
      </div>

   
      <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition duration-300">


        <h3 className="text-2xl font-semibold text-black hover:text-green-800 mb-3">
          Travel Services
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Comprehensive travel planning and management solutions for corporate, institutional, and group travel needs.
        </p>
      </div>

    </div>
  </div>
</section>
  <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-green-800">
        <span className="text-black">Why Choose</span> Mindful Adroit
      </h2>

      <p className="text-gray-600 mt-4">
        A trusted partner focused on professional excellence and long-term value.
      </p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4"></div>

        <h3 className="text-xl font-semibold text-black mb-3">
          20+ Years of Experience
        </h3>

        <p className="text-gray-600">
        Two decades of expertise delivering high-impact corporate training programs and professional travel solutions across industries.
        </p>
      </div>


      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4"></div>

        <h3 className="text-xl font-semibold text-black mb-3">
          Industry-Aligned Approach
        </h3>

        <p className="text-gray-600">
        Programs designed in alignment with real-world industry standards and in sync with latest technology available.
        </p>
      </div>
    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4"></div>

        <h3 className="text-xl font-semibold text-black mb-3">
          Expert-Led Delivery
        </h3>

        <p className="text-gray-600">
         Engagements facilitated by seasoned professionals with strong industry and practical exposure.
        </p>
      </div>


      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4"></div>

        <h3 className="text-xl font-semibold text-black mb-3">
          Structured Execution
        </h3>

        <p className="text-gray-600">
          Well-defined planning and execution frameworks ensuring consistency, quality, and reliability.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-16 bg-green-50">
  <div className="max-w-7xl mx-auto px-4">


    <div className="text-center mb-12">
     <h2 className="text-4xl font-bold text-green-800">
        <span className="text-black">What Our</span> Clients Say
      </h2>

      <p className="text-gray-600 mt-4">
      Trusted by professionals, students, and organizations who value quality, reliability, and measurable results.
      </p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        

        <div className="flex mb-4 text-green-800 text-xl">
      ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <p className="text-gray-600 mb-6">
          “Mindful Adroit delivered exceptional training programs with great professionalism and clarity.”
        </p>

        <div>
          <h3 className="text-lg font-semibold text-black">Rahul Sharma</h3>
          <p className="text-sm text-gray-500">HR Manager</p>
        </div>
      </div>

   
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

 
        <div className="flex mb-4 text-green-800 text-xl">
    ⭐ ⭐ ⭐ ⭐
        </div>

        <p className="text-gray-600 mb-6">
          “Their structured approach and expert-led sessions created real value for our organization.”
        </p>

        <div>
          <h3 className="text-lg font-semibold text-black">Priya Verma</h3>
          <p className="text-sm text-gray-500">Corporate Trainer</p>
        </div>
      </div>


      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

    
        <div className="flex mb-4 text-green-800 text-xl">
 ⭐ ⭐ ⭐ ⭐
        </div>

        <p className="text-gray-600 mb-6">
          “Reliable, professional, and highly experienced team. We truly enjoyed working with them.”
        </p>

        <div>
          <h3 className="text-lg font-semibold text-black">Amit Kapoor</h3>
          <p className="text-sm text-gray-500">Business Consultant</p>
        </div>
      </div>

    </div>
  </div>
</section>

<footer className="mt-10">


  <div className="bg-green-800 text-white py-28">

    <div className="max-w-7xl mx-auto px-4 text-center">

      <h2 className="text-5xl font-bold mb-5">
        Ready to Get Started?
      </h2>

      <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
        Transform your organization with our professional training programs or let us manage your next journey. Connect with our team today.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold">
          Request Consultation →
        </button>

        <button className="border border-white text-white px-6 py-3 rounded-lg">
          Call Us Now
        </button>
      </div>

    </div>
  </div>

  <div className="bg-black text-gray-400 py-12">

    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <h2 className="text-2xl font-bold text-white">
  Mindful Adroit Consultancy
        </h2>
        <p className="mt-2">
         Empowering professionals, building skills, and managing journeys with excellence and integrity.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Quick Links
        </h3>
        <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Contact
        </h3>
        <p>info@mindfuladroit.com</p>
        <p>+91 98765 43210</p>
      </div>

    </div>
  </div>


  <div className="bg-black text-gray-500 text-center pt-6 pb-14 border-t border-gray-800">
  <p>© 2026 Mindful Adroit. All Rights Reserved.</p>
</div>
</footer>
    </>
  )
}

export default Home