import React from 'react';

const ImageCard = ({ image, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-300 mb-2 line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors duration-300 line-clamp-2">
            {description}
          </p>
        )}

        {/* Action indicator */}
        <div className="mt-4 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-semibold">Xem chi tiết</span>
          <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default ImageCard;
