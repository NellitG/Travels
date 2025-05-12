<template>
    <body class="bg-gray-50 p-6">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h2 class="text-2xl font-bold">Popular Products</h2>
        <p class="text-sm text-gray-600">
          Explore our curated collection of premium products. Free shipping on orders over $50.
        </p>
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <input type="text" placeholder="Search products..." class="border px-3 py-2 rounded-md text-sm w-full md:w-auto" />
        <select class="border px-3 py-2 rounded-md text-sm">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
        </select>
      </div>
    </div>

    <!-- Product Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Product Card #1 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center relative">
          <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Sale</span>
          <img src="https://img.freepik.com/free-vector/travel-suitcase-realistic_1284-4831.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="Product Image" class="w-full h-full object-cover"/>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Suitcase</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★ <span class="text-gray-600 ml-2">(128)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Premium noise-canceling wireless headphones with 30-hour battery life</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🛒 <span class="ml-1">In Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <div>
              <span class="text-lg font-semibold">$199</span>
              <span class="text-sm text-gray-500 line-through ml-2">$249</span>
            </div>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Product Card #2 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/gray-duffle-bag-unisex-accessory_53876-101500.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="Product Image" class="w-full h-full object-cover"/>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Smart Watch Pro</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(89)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Fitness tracking, heart rate monitoring, and smartphone notifications</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">⏳ <span class="ml-1">Low Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$159</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Product Card #3 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/leather-boots_1203-8146.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="Product Image" class="w-full h-full object-cover"/>  
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Bluetooth Speaker</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★ <span class="text-gray-600 ml-2">(256)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">360° surround sound with 20W output and IPX7 waterproof rating</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Bestseller</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$129</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Product Card #4 -->
<div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
  <div class="bg-gray-200 h-64 flex items-center justify-center relative">
    <span class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
    <img src="https://img.freepik.com/premium-photo/summer-vacation-walking-women-s-clothing-shirt-plant-print-short-sleeve-bermuda-shorts-sneakers-shoes-bag-hat-light-background_624178-1798.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="">
  </div>
  <div class="p-4">
    <div class="flex justify-between items-start">
      <h3 class="font-semibold">Premium Backpack</h3>
      <button class="text-gray-400 hover:text-red-500">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>
    </div>
    <div class="flex items-center mt-1">
      <div class="flex text-yellow-400 text-sm">
        ★★★★☆ <span class="text-gray-600 ml-2">(64)</span>
      </div>
    </div>
    <p class="text-sm text-gray-600 mt-2">Water-resistant travel backpack with USB charging port and anti-theft design</p>
    <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
      <span class="flex items-center">🎒 <span class="ml-1">35L Capacity</span></span>
      <span class="flex items-center">🔒 <span class="ml-1">Secure</span></span>
    </div>
    <div class="flex justify-between items-center mt-4">
      <span class="text-lg font-semibold">$89</span>
      <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>
<!-- product Card #5 -->
<div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/casual-men-short-pants_1203-8171.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="">
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Smart Watch Pro</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(89)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Fitness tracking, heart rate monitoring, and smartphone notifications</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">⏳ <span class="ml-1">Low Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$159</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Product Card #6 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src ="https://img.freepik.com/premium-photo/pair-trekking-poles-camping-equipment-tourism-white-background_495423-42005.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt ="">
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Bluetooth Speaker</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★ <span class="text-gray-600 ml-2">(256)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">360° surround sound with 20W output and IPX7 waterproof rating</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Bestseller</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$99</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Product Card #7 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/jewellery-bangle-background-with-place-text-banner-fashion-accessories_460848-13246.jpg?ga=GA1.1.487577296.1727511220&w=740" alt="">
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Smartphone</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(512)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Latest model with high-resolution display and powerful performance</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Limited Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$799</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Product Card #8 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-vector/camera-accessory_1284-13130.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid&w=740" alt="">
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Laptop</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(512)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Powerful and compact laptop for everyday use</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Limited Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$999</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Product Card #9 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/sunglasses_1203-7883.jpg?ga=GA1.1.487577296.1727511220&w=740" alt="">
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Smartphone</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(512)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">Powerful and compact smartphone for everyday use</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Limited Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$999</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</body>
</template>