<template>
    <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
      <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-10 shadow-lg">
        <div class="py-4">Professional
          <div class="font-bold text-6xl month hidden">${{ monthlyPrice }}</div>
          <div class="font-bold text-6xl annual">${{ annualPrice }}</div>
          <hr />
          <div class="text-sm my-3">1 TB Storage</div>
          <hr />
          <div class="text-sm my-3">5 Users Allowed</div>
          <hr />
          <div class="text-sm my-3">Send up to 10 GB</div>
          <hr />
          <a href="#" target="_blank">
            <div class="bg-white border border-white hover:bg-transparent text-blue-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">Learn More</div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        monthlyPrice: 24.99,
        annualPrice: 249.99,
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-gradient {
    background: #667db6; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  </style>
  