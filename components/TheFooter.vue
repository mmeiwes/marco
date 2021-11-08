<template>
  <footer class="bg-white mt-auto">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        md:flex md:items-center md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <nuxt-link to="/impressum" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Impressum</span>Impressum
        </nuxt-link>

        <nuxt-link to="/datenschutz" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Datenschutz</span>Datenschutz
        </nuxt-link>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
