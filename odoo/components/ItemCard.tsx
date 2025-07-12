import React from "react";

interface ItemCardProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
}

export default function ItemCard({ imageUrl, title, subtitle }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center w-40 min-w-[9rem]">
      <div className="w-28 h-28 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 17l6-6 4 4 8-8" />
          </svg>
        )}
      </div>
      <div className="text-sm font-semibold text-gray-800 text-center truncate w-full">{title}</div>
      {subtitle && <div className="text-xs text-gray-500 text-center truncate w-full">{subtitle}</div>}
    </div>
  );
} 