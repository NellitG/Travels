<template>
  <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28 bg-green-100" ref="relumeSection">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="rb-12 mb-12 text-center md:mb-18 lg:mb-20 heading">
          <div class="w-full max-w-lg">
            <h2 class="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-3xl">
              Explore Our Exclusive Travel Plans Tailored Just for You
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div v-for="(item, index) in plans" :key="index" class="flex w-full flex-col items-center text-center travel-card opacity-0 translate-y-10">
            <div class="rb-6 mb-6 md:mb-8">
              <img :src="item.image" :alt="item.alt" />
            </div>
            <h3 class="mb-5 text-2xl font-semibold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-2xl">{{ item.title }}</h3>
            <p class="mb-2">{{ item.description }}</p>
            <a :href="item.link" :class="item.buttonClass">{{ item.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const relumeSection = ref(null)

const plans = [
  {
    image: 'https://img.freepik.com/free-photo/photographer-hand-holding-camera-standing-viewpoint-clouds-panorama-viewpoint-sunrise_335224-1320.jpg',
    alt: 'Relume placeholder image 1',
    title: 'Adventure Awaits: Discover Unique Experiences Around the Globe',
    description: 'Embark on a journey filled with unforgettable moments and breathtaking sights.',
    link: '#',
    linkText: 'Explore Now',
    buttonClass: 'mt-4 inline-block rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  },
  {
    image: 'https://img.freepik.com/free-photo/low-angle-friends-dressed-carnival_23-2148825072.jpg',
    alt: 'Relume placeholder image 2',
    title: 'Cultural Immersion: Dive Deep into Local Traditions and Flavors',
    description: 'Experience the heart of each destination through its rich heritage and cuisine.',
    link: '#',
    linkText: 'Learn more',
    buttonClass: 'text-orange-600 underline hover:text-black font-medium'
  },
  {
    image: 'https://img.freepik.com/free-photo/one-hiking-lifestyle-summer-yoga_1150-1002.jpg',
    alt: 'Relume placeholder image 3',
    title: 'Relaxation Retreats: Find Your Peace in Serene Locations',
    description: 'Unwind in tranquil settings designed for ultimate relaxation and rejuvenation.',
    link: '#',
    linkText: 'Learn more',
    buttonClass: 'text-orange-600 underline hover:text-black font-medium'
  }
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.heading', {
    opacity: 0,
    y: -50,
    duration: 3
  })

  tl.to('.travel-card', {
    opacity: 1,
    y: 0,
    duration: 5,
    stagger: 0.3
  }, "-=0.5")
})
</script>
