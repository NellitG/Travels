<template>
  <section id="relume" ref="section" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
        <div ref="textContent" class="text-content">
          <h1 class="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
            Discover the Benefits of Our Travel Plans
          </h1>
          <p class="mb-6 md:mb-8 md:text-md">
            Wanderly's travel plans offer unmatched convenience and cost savings. Experience personalized adventures tailored to your preferences.
          </p>
          <div class="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
            <div>
              <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Convenience First</h6>
              <p>Seamless booking and planning for a stress-free travel experience.</p>
            </div>
            <div>
              <h6 class="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Cost Savings</h6>
              <p>Enjoy exclusive deals that maximize your travel budget.</p>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <button class="hover:bg-orange-500 border border-border-primary text-text-primary bg-background-primary px-6 py-3">Learn More</button>
            <button class="text-text-primary gap-2 p-0">Sign Up →</button>
          </div>
        </div>
        <div ref="imageContent">
          <img
            src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?uid=R199204473&ga=GA1.1.196314286.1746630580&semt=ais_hybrid&w=740"
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

onMounted(() => {
  gsap.from(textContent.value, {
    opacity: 0,
    x: -50,
    duration: 5,
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })

  gsap.from(imageContent.value, {
    opacity: 0,
    x: 50,
    duration: 5,
    delay: 0.2,
    scrollTrigger: {
      trigger: section.value,
      start: 'top 80%',
    },
  })
})
</script>
