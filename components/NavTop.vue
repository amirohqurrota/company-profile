<template>
  <nav class="shadow-lg d-header fixed z-50 top-0 right-0 left-0 w-full block">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <NuxtLink to="/" class="flex items-center py-4 px-2">
              <img src="/white_logo.png" alt="Logo" class="h-8 mr-2">
            </NuxtLink>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3 ">
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink to="/" class="py-4 px-2 text-gray-200 font-semibold hover:text-green-500 transition duration-300">
              Home
            </NuxtLink>
            <NuxtLink to="/product" class="py-4 px-2 text-gray-200 font-semibold hover:text-green-500 transition duration-300">
              Product
            </NuxtLink>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <ul class="">
        <li>
          <NuxtLink to="/" class="block text-gray-200 font-semibold px-2 py-4 transition duration-300">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product" class="block text-gray-200 font-semibold px-2 py-4 transition duration-300">
            Product
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    const btn = document.querySelector('button.mobile-menu-button')
    const menu = document.querySelector('.mobile-menu')

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }
}
</script>

<style scoped>
.d-header{
  background-color: rgba(0,30,38,.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  -moz-backdrop-filter: blur(12px);
  -ms-backdrop-filter: blur(12px);
}

.dark .d-header {
  background-color: rgba(0,30,38,.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  -moz-backdrop-filter: blur(12px);
  -ms-backdrop-filter: blur(12px);
}
</style>
