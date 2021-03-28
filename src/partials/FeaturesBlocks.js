import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white">Full list of features</h2>
            <p className="text-xl text-gray-600">Here is everything that NovaTab comes packed with that wasn't mentioned above.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Time and Date</h4>
              <p className="text-gray-600 text-center">Easily setup the time and date for your newtab or remove it if you dont want it.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Data Transfer</h4>
              <p className="text-gray-600 text-center">You can always save your NovaTab data to your desktop and import it to another device that runs the latest version of Chrome.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Search Bar</h4>
              <p className="text-gray-600 text-center">NovaTab comes with a searchbar that can search on many platforms such as Google and Youtube.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                           
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fast and Secure</h4>
              <p className="text-gray-600 text-center">NovaTab is built so that your experience on Chrome is easy and simple and NovaTab never stores your browsing data and instead its saved to your device's storage.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Icon Support</h4>
              <p className="text-gray-600 text-center">Bookmarks can be assigned icons for easy organization.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Free!</h4>
              <p className="text-gray-600 text-center">Yes, NovaTab is free and will be free forever.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
