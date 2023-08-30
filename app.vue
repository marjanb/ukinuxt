<script setup>
import '@/assets/css/tailwind.css'
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-between pt-8 items-center">
      <h1 class="text-5xl md:text-6xl font-extralight">
        <a href="/">UKI TUBI</a>
      </h1>
      <div>
        <a href=""><img src="~/assets/img/instagram.svg" alt="Instagram" class="instagram-icon"/></a>
      </div>
    </div>
    <div>
      <ul class="flex uppercase font-light text-3xl justify-between py-8 nav flex-col md:flex-row">
        <li>
          <NuxtLink to="/video" activeClass="active">
            Video
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/photo" activeClass="active">
            Photo
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/design" activeClass="active">
            Design
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/uki" activeClass="active">
            Uki
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" activeClass="active">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage/>
  </div>
</template>
