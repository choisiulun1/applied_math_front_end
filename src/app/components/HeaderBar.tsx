import { Bell } from 'lucide-react';

interface HeaderBarProps {
    className?: string;
}


const HeaderBar: React.FC<HeaderBarProps> = ({className}) => {
    return (
        <div className={`flex items-center justify-between px-4 py-3 ${className}` }>
            {/* Avatar */}
            <div className="w-9 h-9 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">👤</span>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col items-center leading-tight">
                <span className="text-blue-600 font-bold text-[18px]">Food Nutrition</span>
                <div className="text-xs font-semibold flex items-center gap-1">
                    <span className={"text-black"}>PREMIUM</span>
                    <span className="text-black">👑</span>
                </div>
            </div>

            {/* Notification Icon */}
            <Bell className="w-6 h-6 text-black" />
        </div>
    );
};

export default HeaderBar;