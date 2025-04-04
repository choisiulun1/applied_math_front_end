import Image from "next/image";
import SearchBar from "@/app/components/SearchBar";
import HeaderBar from "@/app/components/HeaderBar";
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import CircularTracker from "@/app/components/CircularTracker";
import {NutrientBarWidget} from "@/app/components/NutritionBar";

export default function DashBoard() {
    return (
        <>
            <div className="flex flex-1 flex-col space-y-4 w-full">
                <CircularTracker/>
                <NutrientBarWidget/>
                {/* Scrollable dashboard content */}


                {/* Stick search bar at the bottom of scrollable area */}

            </div>
        </>
    )
        ;
}
