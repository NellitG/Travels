<template>
<section id="relume" class="relative flex h-[150vh] flex-col items-center">
    <div
      class="sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden"
      style="width: 90%; height: 90vh; transform: none"
    >
      <div class="px-[5%] py-16 md:py-24 lg:py-28">
        <div class="container relative z-10 max-w-md">
          <h1 class="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-5xl">
            Medium length hero heading goes here
          </h1>
          <p class="text-text-alternative md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
            <button
              class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
              title="Button"
            >
              Button</button
            ><button
              class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-alternative text-text-alternative px-6 py-3"
              title="Button"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 z-0" style="transform: none">
        <img
          src="https://img.freepik.com/premium-photo/airplane-taking-off-travel-by-air-transport_105428-4496.jpg?uid=R199204473&ga=GA1.1.196314286.1746630580&w=740"
          alt="Relume placeholder image"
          class="size-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <button
        class="md:flex absolute bottom-[5%] right-[5%] flex w-full items-center justify-center md:max-w-[14rem] lg:max-w-xxs"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R1p:"
        data-state="closed"
        style="transform: none"
      >
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
          alt="Relume placeholder image"
          class="size-full object-cover"
        /><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="absolute z-20 size-16 text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="absolute inset-0 -z-10 mt-[100vh]"></div>
  </section>
</template>
  