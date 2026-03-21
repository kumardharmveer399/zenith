import Image from "next/image";
import { Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  image: string;
  price: number;
  mentorName: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export function CourseCard({
  title,
  image,
  price,
  mentorName,
  rating,
  reviews,
  badge,
}: CourseCardProps) {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-purple-500 hover:scale-[1.03] transition-all duration-300">

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {badge && (
            <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs font-semibold rounded-full shadow">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-primary font-medium mt-1">
            Mentor: {mentorName}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-xs text-gray-500">
              ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">

            <span className="text-xl font-bold text-primary">
              ₹{price}
            </span>

            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
              Enroll
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}