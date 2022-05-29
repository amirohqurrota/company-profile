<template>
  <div class="p-16 pt-16 w-full pipeBackground flex flex-col items-center">
    <div class="text-center">
      <p class="font-bold text-3xl text-white mb-3 drop-shadow-lg">
        Produk Kami
      </p>
    </div>
    <div class="space-x-5 flex justify-center">
      <!-- one product -->
      <div class="w-44 h-56 mx-auto bg-gray-50 flex flex-col items-center pt-2">
        <img :src="imagePipe" alt="product" class="w-36 h-36 rounded-full">
        <div class="text-center mt-2">
          <p class="font-semibold mx-2">
            Instalasi Oksigen Ruang
          </p>
        </div>
      </div>
      <!-- one product -->
      <div class="w-44 h-56 mx-auto bg-gray-50 flex flex-col items-center pt-2">
        <img :src="imagePipe" alt="product" class="w-36 h-36 rounded-full">
        <div class="text-center mt-2">
          <p class="font-semibold mx-2">
            Instalasi Oksigen Ruang
          </p>
        </div>
      </div>
      <!-- one product -->
      <div class="w-44 h-56 mx-auto bg-gray-50 flex flex-col items-center pt-2">
        <img :src="imagePipe" alt="product" class="w-36 h-36 rounded-full">
        <div class="text-center mt-2">
          <p class="font-semibold mx-2">
            Instalasi Oksigen Ruang
          </p>
        </div>
      </div>
      <!-- one product -->
      <div class="w-44 h-56 mx-auto bg-gray-50 flex flex-col items-center pt-2">
        <img :src="imagePipe" alt="product" class="w-36 h-36 rounded-full">
        <div class="text-center mt-2">
          <p class="font-semibold mx-2">
            Instalasi Oksigen Ruang
          </p>
        </div>
      </div>
      <!-- one product -->
      <div class="w-44 h-56 mx-auto bg-gray-50 flex flex-col items-center pt-2">
        <img :src="imagePipe" alt="product" class="w-36 h-36 rounded-full">
        <div class="text-center mt-2">
          <p class="font-semibold mx-2">
            Instalasi Oksigen Ruang
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePipe from '../assets/image/pipeProduct.jpg'

export default ({
  data () {
    return {
      imagePipe
    }
  }
})
</script>

<style scoped>
.pipeBackground {
  background: url('./assets/image/pipe.jpg');
  background-position: center;
}
</style>
