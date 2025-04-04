import {
    LayoutDashboard,
    Utensils,
    Newspaper,
    ClipboardList,
    MoreHorizontal,
} from 'lucide-react';
import Link from 'next/link';

type BottomNavItem = {
    icon: React.ElementType;
    text: string;
    size: string;
    link: string;
};

const BottomNav: React.FC<{ items: BottomNavItem[] }> = ({ items }) => (

    <div className="bg-blue-600">
        <div className="flex justify-around text-white pb-[2vh]">
            {items.map((item, idx) => {
                const Icon = item.icon;
                return  (
                    <Link href={item.link} key={idx} className={"flex-1"}>
                        <button className="flex-1 flex flex-col items-center justify-center w-full">
                            <Icon size={20} color="white" className="mb-[0.5vh]" />
                            <span style={{ fontSize: item.size }}>{item.text}</span>
                        </button>
                    </Link>
                ) ;
            })}
        </div>
    </div>
);

export default BottomNav;