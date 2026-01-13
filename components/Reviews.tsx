import React from "react";
import { REVIEWS } from "../constants";

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#fff9f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Clients Say 💬
          </h2>
          <div className="w-24 h-1 bg-[#96d18c] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-[2rem] shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff9c9c] rounded-full flex items-center justify-center text-white font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.author}</h4>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
