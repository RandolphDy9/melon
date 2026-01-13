import React from "react";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1699730164892-d7c433524ff3?q=80&w=800&auto=format&fit=crop",
    caption: "Magic Moments",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1727892349129-118c3a74823f?q=80&w=800&auto=format&fit=crop",
    caption: "Fun Photo Booth",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1614113036347-9f60df80730a?q=80&w=800&auto=format&fit=crop",
    caption: "Excited Kids",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    caption: "Party Setup",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    caption: "Live DJ",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    caption: "Entertainment",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800&auto=format&fit=crop",
    caption: "Celebration",
    span: "md:col-span-1 md:row-span-1",
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Magic in Motion 📸
          </h2>
          <div className="w-24 h-1 bg-[#ff9c9c] mx-auto mb-4"></div>
          <p className="text-gray-500">
            Glimpses of the unforgettable memories we create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-fr">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-[2rem] shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                <span className="text-white font-bold text-base md:text-lg">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
