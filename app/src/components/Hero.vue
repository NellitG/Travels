<template>
<body class=" text-gray-800 font-sans">
  <div class="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
    <!-- Text Section -->
    <div>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        Discover the <br />
        World's <span class="text-orange-500 underline decoration-wavy underline-offset-4">Hidden</span> Wonders
      </h1>
      <p class="mt-4 text-gray-600">
        Find the unique moments and hidden gems that ignite unforgettable experiences.
        From rare encounters to remarkable destinations, we help you uncover the spark
        that turns every trip into a cherished story.
      </p>
      <button class="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition">
        Plan your trip
      </button>
    </div>

    <!-- Image Section -->
    <div class="relative flex justify-end items-center">
      <!-- Background Map -->
      <img src="https://img.freepik.com/premium-vector/map-world-white-background-geographical-banner_1113988-542.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&w=740"
           class="absolute opacity-50 mix-blend-multiply w-full h-full object-cover pointer-events-none" alt="World map"/>

      <div class="relative z-0 grid grid-cols-2 gap-4 h-full">
        <img src="https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232171.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&semt=ais_hybrid&w=740" class="rounded-xl h-72 object-cover" alt="Location 1" />
        <img src="https://img.freepik.com/free-photo/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&w=740" class="rounded-xl h-72 object-cover" alt="Location 2" />
        <img src="https://img.freepik.com/free-photo/view-castle-fortress_23-2150844377.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&semt=ais_hybrid&w=740" class="rounded-xl h-72 object-cover col-span-2" alt="Location 3" />
      </div>

      <!-- Decorative Airplane Icon -->
      <div class="absolute bottom-0 left-0 transform -translate-x-6 translate-y-8">
        <a href="https://www.vecteezy.com/vector-art/12027672-plane-and-track-icon-on-a-white-background"></a>
      </div>
    </div>
  </div>
</body>
</template>