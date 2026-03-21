'use client';

import Image from "next/image";
import { Star } from "lucide-react";

interface MentorCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

export function MentorCard({
  name,
  title,
  image,
  description,
  rating,
  reviews,
}: MentorCardProps) {
  return (
    <div className="group perspective">

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center transition-all duration-500 transform-gpu group-hover:rotate-x-3 group-hover:-rotate-y-3 hover:shadow-2xl">

        {/* Mentor Image */}
        <div className="relative w-24 h-24 mx-auto mb-4 transition-all duration-500 transform-gpu group-hover:scale-110 group-hover:-translate-y-2">

          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover shadow-lg"
          />

        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        {/* Title */}
        <p className="text-sm text-primary font-medium mb-2">
          {title}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm">
          <Star size={16} fill="currentColor" />
          <span className="font-medium text-gray-800">{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>

      </div>

    </div>
  );
}