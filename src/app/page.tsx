"use client"
import { useEffect, useState, useRef } from 'react';
import Carousel from "@/app/components/Carousel";
import DashBoard from "@/app/dashboard/page";

export default function Home() {
    const items = ['🥦', '🍎', '🍗', '🍞', '🍣', '🥕', '🍌', '☕️'];
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = carouselRef.current;
        if (!container) return;
        const index = Math.round(container.scrollLeft / container.clientWidth);
        setActiveIndex(index);
    };

    return (
        <div className="p-4 w-full">
            <DashBoard/>
            {/*<div className="flex flex-wrap gap-4 w-full">*/}
            {/*    <div className="overflow-x-scroll snap-x snap-mandatory flex w-full no-scrollbar" ref={carouselRef} onScroll={handleScroll}>*/}
            {/*        {items.map((item, idx) => (*/}
            {/*            <div key={idx} className="min-w-full flex justify-center items-center snap-center text-4xl h-48 border rounded">*/}
            {/*                {item}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <div className="flex justify-center mt-4 gap-2">*/}
            {/*        {items.map((_, i) => (*/}
            {/*            <div key={i} className={`w-2 h-2 rounded-full ${i === activeIndex ? 'bg-black' : 'bg-gray-300'}`} />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Carousel>*/}
            {/*    {items.map((item, idx) => (*/}
            {/*        <div key={idx} className="min-w-full flex justify-center items-center snap-center text-4xl h-48 border rounded">*/}
            {/*            {item}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</Carousel>*/}
        </div>
    );
}