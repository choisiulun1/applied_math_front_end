import React from 'react';
import { Flame } from 'lucide-react';

const MacroOverview: React.FC = () => {
    // Example data for the macros
    const macros = [
        { label: 'Calories', icon: <Flame size={14} />, consumed: 1464, target: 1220, color: '#4285F4' },
        { label: 'P', consumed: 65, target: 77, color: '#EA4335' },
        { label: 'F', consumed: 64, target: 40, color: '#FBBC05' },
        { label: 'C', consumed: 140, target: 136, color: '#34A853' },
    ];

    return (
        <div className="flex flex-col items-center space-y-2">
            {/* Top row with macros */}
            <div className="flex justify-between w-full max-w-sm` ">
                {macros.map((macro, idx) => {
                    const ratio = Math.min(macro.consumed / macro.target, 1);
                    return (
                        <div key={idx} className="flex-1 flex flex-col items-center space-y-1">
                            <div className="flex items-center space-x-1">
                                {macro.icon && <span>{macro.icon}</span>}
                                <span className="text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-full shrink">
                                    {macro.label === 'Calories'
                                        ? `${macro.consumed} / ${macro.target}`
                                        : `${macro.label} ${macro.consumed} / ${macro.target}`}
                                </span>
                            </div>
                            <div className="w-full px-2">
                                <div className="relative h-1 bg-gray-200">
                                    <div
                                        className="absolute left-0 top-0 h-full"
                                        style={{ width: `${ratio * 100}%`, backgroundColor: macro.color }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Indicator dots (black + gray) */}
            <div className="flex space-x-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>
        </div>
    );
};

export default MacroOverview;