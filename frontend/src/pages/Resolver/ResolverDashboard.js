import ResolverSideBar from "./ResolverSideBar";
import NavBar from "../../components/Navbar";
import ChartLine from "../../components/ChartLine";
export default function ResolverDashboard(){
    return(
        <div>
            <div className="flex flex-row">
            <ResolverSideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
    <NavBar currentMenu="Dashboard"/>
    <div class="px-6 pt-6 2xl:container">
       <ChartLine/>


</div>
        </div>
    </div>
</div>
        
    )
}