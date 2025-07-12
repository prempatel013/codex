import React from "react";

interface ProductDetailCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  status: "Available" | "Swapped" | "Redeemed";
  uploaderName: string;
  uploaderAvatarUrl?: string;
  tags?: string[];
}

const statusColors: Record<string, string> = {
  Available: "bg-green-100 text-green-700",
  Swapped: "bg-yellow-100 text-yellow-700",
  Redeemed: "bg-gray-200 text-gray-600",
};

export default function ProductDetailCard({
  imageUrl,
  title,
  description,
  status,
  uploaderName,
  uploaderAvatarUrl,
  tags = [],
}: ProductDetailCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow p-6 w-full">
      {/* Image or carousel placeholder */}
      <div className="flex-shrink-0 w-full md:w-80 h-64 bg-gray-100 rounded flex items-center justify-center overflow-hidden mb-4 md:mb-0">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 17l6-6 4 4 8-8" />
          </svg>
        )}
      </div>
      {/* Details */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-gray-800 flex-1">{title}</h2>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>{status}</span>
        </div>
        <div className="text-gray-600 whitespace-pre-line mb-2">{description}</div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {uploaderAvatarUrl ? (
              <img src={uploaderAvatarUrl} alt={uploaderName} className="object-cover w-full h-full" />
            ) : (
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            )}
          </div>
          <span className="text-sm text-gray-700 font-medium">{uploaderName}</span>
        </div>
      </div>
    </div>
  );
} 