import React from 'react'

const Technicaltraining = () => {
  return (
    <>
    <section className='w-full bg-green-100 py-25'>
    <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
      <div className='md:w-1/2 space-y-6'>
      <h1 className='text-4xl md:text-5xl font-bold text-green-800 leading-tight'><span className='text-black'>Technical</span> Training <br />Programs</h1>
      <p className='text-gray-600 text-lg'>Comprehensive technical training designed for students, engineers, and professionals. Our programs include CAD/CAM, IT courses, core engineering modules, hands-on workshops, and certification-based skill development aligned with industry standards.</p>
      <div className='flex items-center space-x-4'>
        <button className='bg-green-700 hover:bg-green-800 rounded-lg text-white px-6 py-3 font-medium flex items-center gap-2'>Enroll Now →</button>
       
      </div>
      </div>
      <div>
        
      </div>
    </div>
   </section>
   <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">


    <div className="text-center mb-10">
       <h2 className="text-4xl font-semibold text-green-800">
        <span className="text-black">Training </span> 
       Domains
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
        Comprehensive technical training across multiple engineering and technology disciplines.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Civil Engineering</h3>
        <p className="text-gray-600 mb-3">
          Master construction techniques, structural design, project management, and site execution.
        </p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• AutoCAD & Revit</li>
          <li>• Structural Analysis</li>
          <li>• Project Planning</li>
          <li>• Site Management</li>
        </ul>
      </div>


      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Electrical Engineering</h3>
        <p className="text-gray-600 mb-3">
          Learn power systems, control systems, electronics, and electrical design fundamentals.
        </p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Power Systems</li>
          <li>• PLC Programming</li>
          <li>• Circuit Design</li>
          <li>• Industrial Automation</li>
        </ul>
      </div>

      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Mechanical Engineering</h3>
        <p className="text-gray-600 mb-3">
          Develop expertise in design, manufacturing, thermodynamics, and mechanical systems.
        </p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• CAD/CAM</li>
          <li>• Manufacturing Tech</li>
          <li>• Thermal Engineering</li>
          <li>• Machine Design</li>
        </ul>
      </div>

   
      <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">Software & IT</h3>
        <p className="text-gray-600 mb-3">
          Build modern software development skills, programming, databases, and cloud technologies.
        </p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Full-Stack Development</li>
          <li>• Cloud Computing</li>
          <li>• Data Science</li>
        </ul>
      </div>

    </div>

  </div>
</section>
</>
  )
}

export default Technicaltraining