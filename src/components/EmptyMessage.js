"use client";

export default function EmptyMessage({message ="No items Found."}){
    return (
        <div className="text-center text-gray-500 py-10 text-lg">
            {message}
        </div>
    );
}