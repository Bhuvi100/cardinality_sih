import AdminSideBar from "./AdminSidebar";
import NavBar from "../../components/Navbar";
import ChartLine from "../../components/ChartLine";
export default function AdminDashboard(){

    
    return(
        <div>
            <div className="flex flex-row">
            <AdminSideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
    <NavBar currentMenu="Admin Dashboard"/>
    <div class="px-6 pt-6 2xl:container">
       
    <ChartLine/>
          
</div>
        </div>
    </div>
</div>
        
    )
}