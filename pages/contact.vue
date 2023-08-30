<template>
  <form name="contact" method="POST" netlify>
    <input type="hidden" name="form-name" value="contact">
    <div class="pb-8">
      <label for="name" class="block mb-2 font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text" id="name" name="name"
             class="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="John" required>
    </div>
    <div class="pb-8">
      <label for="email" class="block mb-2 font-medium text-gray-900 dark:text-white">Email</label>
      <input type="email" id="email" name="email"
             class="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="John" required>
    </div>
    <div>
      <button type="submit" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </div>
  </form>
</template>
<script setup lang="ts">
</script>
