import SideBar from "../../components/SideBar";
import scholarship from "../../assets/scholarship.jpg";
import { useState } from "react";
import GrievanceForm from "../../components/greivanceForm";
import NavBar from "../../components/Navbar";
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
            
        <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={scholarship} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">PG Scholarship</h5>
      <p class="text-gray-700 text-base mb-4">
      Scholarship is awarded to full time GATE/GPAT qualified students admitted to M.E./ M. Tech/ M. Arch and M.Pharma courses in AICTE approved Institutions/Colleges @Rs. 12,400/- PM/ student.
      </p>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>

</div>
        </div>
    </div>
</div>
       
    )
}