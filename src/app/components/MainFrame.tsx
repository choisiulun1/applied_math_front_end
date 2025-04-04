import React from 'react';

interface MainFrameProps {
    children: React.ReactNode;
}

const MainFrame: React.FC<MainFrameProps> = ({ children }) => {
    return (
        <div className="pt-[20px] px-5 font-sans overflow-y-auto text-[20px] leading-relaxed flex-1 flex">
            {children}
        </div>
    );
};

export default MainFrame;