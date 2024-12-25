import React from "react";

const posters = [
  {
    id: 1,
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34a17917926931.562c0f7f02c94.jpg", // Replace with your poster image
    alt: "Poster 1",
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/originals/b9/4c/f5/b94cf5b442a2f5798fd39d852067a60a.jpg", // Replace with your poster image
    alt: "Poster 2",
  },
  {
    id: 3,
    imageUrl: "https://images.template.net/wp-content/uploads/2017/03/28083438/Product-Marketing-Advertising-Poster.jpg", // Replace with your poster image
    alt: "Poster 3",
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/originals/b4/74/35/b4743532bcdb67c6e636fdf0ac2a492a.jpg", // Replace with your poster image
    alt: "Poster 4",
  },
  {
    id: 5,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/013/660/410/original/digital-marketing-agency-or-services-flyer-or-poster-template-vector.jpg", // Replace with your poster image
    alt: "Poster 5",
  },
  {
    id: 6,
    imageUrl: "https://s3.amazonaws.com/thumbnails.venngage.com/template/d275b40f-3003-4b81-90c2-2943fd0b0c1d.png", // Replace with your poster image
    alt: "Poster 6",
  },
];

const PosterGallery = () => {
  return (
    <section className="w-full py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Poster Gallery
        </h2> */}

        {/* Poster Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="relative group overflow-hidden rounded-lg shadow-lg "
            >
              {/* Poster Image */}
              <img
                src={poster.imageUrl}
                alt={poster.alt}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}

              {/* Hover Text */}
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;
