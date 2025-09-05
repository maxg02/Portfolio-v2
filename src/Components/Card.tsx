import React from "react";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={className}>
            <div className="border-neutral-600 border-4 border-b-0 p-5 flex flex-col gap-y-4 rounded-t-md">
                {children}
            </div>
            <div className="w-full h-3.5 bg-custom-red"></div>
        </div>
    );
}

export default Card;
