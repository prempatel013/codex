import React from "react";

interface CategoryCardProps {
  label: string;
  icon?: React.ReactNode;
}

export default function CategoryCard({ label, icon }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-lg p-4 cursor-pointer transition w-24 h-24">
      <div className="mb-2">
        {icon || (
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium text-blue-700 text-center">{label}</span>
    </div>
  );
} 