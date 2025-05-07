import FallbackImage from './FallbackImage';

export default function PolaroidGallery() {
  const top: string[] = ['20px', '20px', '270px', '270px', '140px'];
  const left: string[] = ['20px', '250px', '20px', '250px', '140px'];
  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      <div className="relative w-[450px] h-[500px]">
        {['/rose.jpg', '/abProfile.jpg', '/flower2.jpg', '/owlPuzzle.jpg', '/abProfile.jpg'].map(
          (src, index) => (
            <div
              key={index}
              className={`absolute w-40 h-48 bg-white p-2 shadow-lg border border-gray-300 
                          transition-transform duration-300 hover:scale-110 hover:z-10`}
              style={{
                top: top[index],
                left: left[index],
                rotate: `${[-13, 10, -5, 15, 5][index % 5]}deg`, // Randomized rotation
                zIndex: index,
              }}
            >
              <FallbackImage
                src={src}
                alt={`Polaroid ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-600">
                Caption {index + 1}
              </div> */}
            </div>
          )
        )}
      </div>
    </div>
  );
}
