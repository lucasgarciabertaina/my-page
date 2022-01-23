<template>
  <div
    class="w-10/12 border-2 border-white rounded-xl bg-gray-950 mx-auto flex flex-col items-center relative mb-5"
  >
    <h2 class="text-white font-normal text-xl pt-8 pb-2">Contact</h2>
    <div>
      <form action="" class="block w-4/5 h-full mx-auto">
        <label
          for="mail"
          class="text-gray-350 font-light text-base relative bottom-1 rounded-lg"
          >Email*</label
        >
        <input
          id="mail"
          class="h-9 w-full mb-5 mx-auto bg-gray-350"
          type="email"
        />
        <label
          for="subject"
          class="text-gray-350 font-light text-base relative bottom-1 rounded-lg"
          >Subject*</label
        >
        <input
          id="subject"
          class="h-9 w-full mb-5 mx-auto bg-gray-350"
          type="text"
        />
        <label
          for="message"
          class="text-gray-350 font-light text-base relative bottom-1 rounded-lg"
          >Message*</label
        >
        <input
          id="message"
          class="h-20 w-full mb-5 mx-auto bg-gray-350"
          type="text"
        />
        <input
          type="submit"
          value="Send"
          class="block bg-transparent pl-2 pr-2 border-2 border-white text-white mx-auto font-light rounded-lg mb-5"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
