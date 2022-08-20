import SideBar from "../../components/SideBar";
import scholarship from "../../assets/pgScholarship.png";
import ADF from "../../assets/phd.png";
import Pragati from "../../assets/pragati.png";
import Saksham from "../../assets/saksham.png";
import PMSSS from "../../assets/pgmss.png";
import Internship from "../../assets/intern.png";
import JKInternship from "../../assets/jkintern.png";
import FITIndia from "../../assets/fitIndia.png";
import SLA from "../../assets/sla.png";
import Other from "../../assets/anyOther.png";
import { useState } from "react";
import GrievanceForm from "../../components/greivanceForm";
import NavBar from "../../components/Navbar";
import { Link } from 'react-router-dom';
export default function UserDashboard(){
    const [category, setCategory] = useState(0)

    if(category ==1) {
      
        return <GrievanceForm/>
    }

    return(
        <div className="flex flex-row">
            <SideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
    <NavBar currentMenu="Dashboard"/>
    <div class="px-6 pt-6 2xl:container">
       
       <div className="grid md:grid-cols-2 gap-5 ">
            
        <div class="flex justify-center ">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={scholarship} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">PG Scholarship</h5>
      <p class="text-gray-700 text-base mb-4">
      Scholarship is awarded to full time GATE/GPAT qualified students admitted to M.E./ M. Tech/ M. Arch and M.Pharma courses in AICTE approved Institutions/Colleges @Rs. 12,400/- PM/ student.
      </p>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ADF} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">ADF</h5>
      <p class="text-gray-700 text-base mb-4">
      Admitting full time meritorious research scholars by providing research fellowship who wants to seek admission to Ph.D. in AICTE approved Technical Institutes/University Departments for carrying out research in thrust areas.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Pragati} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Pragati</h5>
      <p class="text-gray-700 text-base mb-4">
      Scholarship/Contingency is awarded to meritorious girls taking admission in AICTE approved Technical institution at Degree/ Diploma. Total 10000 scholarship are given @ Rs 50000 as incidentals each year.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Saksham} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Saksham</h5>
      <p class="text-gray-700 text-base mb-4">
      Scholarship/Contingency is awarded to Differently abled students taking admission in AICTE approved Technical institution at Degree/ Diploma. Scholarship given @ Rs 50000 as incidentals each year.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={PMSSS} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">PMSSS</h5>
      <p class="text-gray-700 text-base mb-4">
      J & K Cell deals with Implementation of Prime Ministers Special Scholarship Scheme to J&K Students to pursue undergraduate studies outside the State of Jammu and Kashmir. The J & K cell is responsible for proper implementation of the scheme to fulfil the objectives of Prime Ministers Special Scholarship.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Internship} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Internship</h5>
      <p class="text-gray-700 text-base mb-4">
      AICTE Internships help INDIAN STUDENTS find internships they love and ORGANIZATIONS find best Interns on PAN India basis.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={JKInternship} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">J & K Internship</h5>
      <p class="text-gray-700 text-base mb-4">
      The objective of this scheme is to provide exposure to Jammu & Kashmir and Ladakh youth to academic culture at Institutions of Higher learning. It is expected that they will be working on cutting edge research in the field of science and technology under the guidance of faculties from the IITs and IISERs.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={FITIndia} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">FIT India Initiative</h5>
      <p class="text-gray-700 text-base mb-4">
      The objective of this scheme is to foster and inculcate the habit of physical fitness among faculty and students of AICTE approved Institutions as well as AICTE officials and to recognise and honour them through this challenge.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={SLA} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">SLA</h5>
      <p class="text-gray-700 text-base mb-4">
      The AICTE-SLA project is designed to measure the benchmark levels and gains in academic and aptitude skills by the students in technical programs and to understand the various factors that affect skill development of students in Technical Institutes across India.
      </p>
     
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col transition ease-in-out delay-150 hover:-translate-y-0.4 hover:scale-110 duration-300 md:flex-row md:max-w-md rounded-lg bg-white shadow-lg" onClick={()=>{setCategory(1)}}>
    <img class=" w-full md:h-50 md:h-auto md:object-fit md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Other} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Other</h5>
      <p class="text-gray-700 text-base mb-4">
      General Grievances related to any Application/Bureau/Cell
      </p>
     
    </div>
  </div>
</div>





</div>
        </div>
    </div>
</div>
       
    )
}