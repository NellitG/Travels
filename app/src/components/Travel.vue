<template>
  <section id="relume" ref="section" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
        <div ref="textContent">
          <h1 class="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-5xl">
            Discover Your Next Adventure with Our Curated Travel Plans
          </h1>
          <p class="mb-6 md:mb-8 md:text-md">
            Explore breathtaking destinations tailored to your travel style. Our expertly crafted plans ensure unforgettable experiences.
          </p>
          <div ref="features" class="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
            <div class="feature flex">
              <div class="mr-4 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  class="size-8"
                />
              </div>
              <div>
                <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Explore More</h6>
                <p>Join us to uncover hidden gems and popular spots around the world.</p>
              </div>
            </div>
            <div class="feature flex">
              <div class="mr-4 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 2"
                  class="size-8"
                />
              </div>
              <div>
                <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Plan Ahead</h6>
                <p>Start your journey today and make memories that last a lifetime.</p>
              </div>
            </div>
          </div>
        </div>
        <div ref="imageContent">
          <img
            src="https://img.freepik.com/premium-photo/african-family-father-cute-little-daughter-sits-airplane-seats-flight-looks-through-porthole_161094-19834.jpg?uid=R194069721&ga=GA1.1.1982752443.1733190947&semt=ais_hybrid&w=740"
            class="w-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const textContent = ref(null)
const imageContent = ref(null)
const features = ref(null)

onMounted(() => {
  gsap.from(textContent.value, {
    opacity: 0,
    x: -60,
    duration: 4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(imageContent.value, {
    opacity: 0,
    x: 60,
    duration: 3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(features.value.querySelectorAll('.feature'), {
    opacity: 0,
    y: 20,
    duration: 3, 
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })
})
</script>
