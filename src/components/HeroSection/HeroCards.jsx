import React from 'react';

function HeroCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12 px-4 md:px-10 lg:px-8 xl:px-20">
      <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Title</h3>
        <p className="text-sm text-border">
          Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Title</h3>
        <p className="text-sm text-border">
          Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Title</h3>
        <p className="text-sm text-border">
          Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
        </p>
      </div>
    </div>
  );
}

export default HeroCards;
