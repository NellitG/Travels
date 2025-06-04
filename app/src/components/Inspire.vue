<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <header
        class="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        data-aos="fade-down"
      >
        <!-- <p class="mb-3 font-semibold md:mb-4">Portfolio</p> -->
        <h2 class="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
          Learn Fun Facts About Countries
        </h2>
        <p class="md:text-md">Discover the different country cultures and diversity</p>
      </header>

      <div class="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="0">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/neolithic-period-lifestyle_23-2151786521.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">Rwanda</a></h3>
          <p>
            Rwanda is known as the 'Land of a Thousand Hills' and is one of the cleanest countries in Africa.
            Rwandans participate in a national community cleanup day where everyone contributes to cleaning and improving their communities.
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="100">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/premium-photo/illuminated-buildings-by-city-against-sky-dusk_1048944-9196149.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">Australia</a></h3>
          <p>
            Australia is home to more than 10,000 beaches— so many that if you visited a new one every day, it would take over 27 years to see them all!
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="200">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823136.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">India</a></h3>
          <p>
            India has the world's highest cricket ground, located in Himachal Pradesh!
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="300">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/view-quiver-trees-forest-with-beautiful-sky-sunset-twilight-sky-scene-keetmanshoop-namibia_1150-21606.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">South Africa</a></h3>
          <p>
            South Africa is unique for having three capital cities: Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial).
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="400">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/premium-photo/giraffe-standing-land-against-mountain-sunset_1048944-10151247.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">Kenya</a></h3>
          <p>
            Kenya is the birthplace of the modern safari and is home to the Great Wildebeest Migration, one of the Seven New Wonders of the World.
          </p>
        </article>

        <article class="mb-8 break-inside-avoid" data-aos="fade-up" data-aos-delay="500">
          <div class="mb-5 md:mb-6">
            <a href="#">
              <img
                src="https://img.freepik.com/free-photo/great-wall_1359-1016.jpg?uid=R141465363&ga=GA1.1.487577296.1727511220&semt=ais_items_boosted&w=740"
                class="w-full object-cover"
                alt="Relume placeholder image"
              />
            </a>
          </div>
          <h3 class="mb-2 text-xl font-bold md:text-2xl"><a href="#">China</a></h3>
          <p>
            China is home to the world’s longest man-made structure—the Great Wall of China— stretching over 21,000 kilometers!
          </p>
        </article>
      </div>

      <footer class="mt-8 flex justify-center md:mt-18 lg:mt-20">
        <button
          class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
          title="View all"
        >
          View all
        </button>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: 'ease-in-out',
    once: false, // animation happens only once while scrolling down
  })
})
</script>
