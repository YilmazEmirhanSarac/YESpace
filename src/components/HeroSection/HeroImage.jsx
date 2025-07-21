import React from 'react';

function HeroImage() {
  return (
    <div className="w-full flex justify-center mt-12">
      <img
        src="https://picsum.photos/700/400"
        alt="Hero placeholder"
        className="rounded-lg shadow-md"
      />
    </div>
  );
}

export default HeroImage;
