<template>
    <section class="bg-[#fdf6f1] px-4 py-10">
  <div class="max-w-7xl mx-auto">
    <!-- Title and Tabs -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl md:text-4xl font-semibold">Top Destinations</h2>
      <button class="text-sm md:text-base font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full">
        <a href="/destinations" class="flex items">
        Explore all destinations
        </a>
      </button>
    </div>

    <!-- Category Tabs -->
    <div class="relative inline-flex flex-wrap gap-4 mb-8 text-gray-600 font-medium text-sm md:text-base">
    <div class="relative">
      <div
        class="absolute -bottom-1 h-[2px] bg-black transition-all duration-300"
        :style="{
          width: underlineWidth + 'px',
          transform: `translateX(${underlineOffset}px)`
        }"
      ></div>

      <div class="flex gap-4" ref="navLinks">
        <router-link
          v-for="(item, index) in categories"
          :key="item.name"
          :to="item.route"
          class="relative"
          @mouseover="moveUnderline(index)"
          @focus="moveUnderline(index)"
          ref="link"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>


    <!-- Destination Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div>
        <img src="https://img.freepik.com/premium-photo/statue-park-against-cloudy-sky_1048944-12533466.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&w=740" alt="Vietnam" class="rounded-xl h-72 object-cover" />
        <p class="mt-2 font-semibold">Golden Bridge, Bà Nà Hills</p>
        <p class="text-gray-500 text-sm">Vietnam</p>
      </div>

      <!-- Card 2 -->
      <div>
        <img src="https://img.freepik.com/free-photo/landscape-castle_181624-10906.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&semt=ais_hybrid&w=740" alt="Dubrovnik" class="rounded-xl w-full h-72 object-cover" />
        <p class="mt-2 font-semibold">Dubrovnik</p>
        <p class="text-gray-500 text-sm">Croatia</p>
      </div>

      <!-- Card 3 -->
      <div>
        <img src="https://img.freepik.com/free-photo/balloon-cappadocia_181624-23728.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&semt=ais_hybrid&w=740" alt="Cappadocia" class="rounded-xl w-full h-72 object-cover" />
        <p class="mt-2 font-semibold">Hot Air Balloon Cappadocia</p>
        <p class="text-gray-500 text-sm">Turkey</p>
      </div>

      <!-- Card 4 -->
      <div>
        <img src="https://img.freepik.com/free-photo/iron-bridge_1158-21.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&w=740" alt="Sydney Harbour Bridge" class="rounded-xl w-full h-72 object-cover" />
        <p class="mt-2 font-semibold">Sydney Harbour Bridge</p>
        <p class="text-gray-500 text-sm">Australia</p>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const categories = [
  { name: 'Popular', route: '/destinations/popular' },
  { name: 'USA', route: '/destinations/usa' },
  { name: 'Europe', route: '/destinations/europe' },
  { name: 'Asia', route: '/destinations/asia' },
  { name: 'Africa & Middle East', route: '/destinations/africa-middle-east' },
  { name: 'Australia & The Pacific', route: '/destinations/australia-pacific' },
  { name: 'Canada', route: '/destinations/canada' }
]

const underlineOffset = ref(0)
const underlineWidth = ref(0)
const navLinks = ref(null)

const moveUnderline = async (index) => {
  await nextTick()
  const links = navLinks.value.querySelectorAll('a')
  if (links[index]) {
    const link = links[index]
    underlineWidth.value = link.offsetWidth
    underlineOffset.value = link.offsetLeft
  }
}

onMounted(() => {
  moveUnderline(0) // set initial underline to first link
})
</script>

<style scoped>
.router-link-active {
  color: black;
}
</style>