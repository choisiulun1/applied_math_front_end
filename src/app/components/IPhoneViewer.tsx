import React from "react";

type IPhoneViewerProps = {
    children: React.ReactNode;
};

const IPhoneViewer: React.FC<IPhoneViewerProps> = ({ children}) => {
    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen h-[812px] m-0 p-4">
            <div className="max-h-screen h-full aspect-[375/812] w-auto bg-white border-[16px] border-black rounded-[50px] shadow-xl relative overflow-hidden flex flex-col">
                <div className="w-[210px] h-[30px] bg-black rounded-b-[20px] absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>

                {children}
            </div>
        </div>
    );
};

export default IPhoneViewer;
