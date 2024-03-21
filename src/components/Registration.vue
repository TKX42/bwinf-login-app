<script>
export default {
  data() {
    return {
      emailInput: '',
      passwordInput: '',
      passwordInput2: '',
    };
  },
};
</script>

<template>
  <div class="modal-box flex flex-col items-center justify-start gap-8">
    <h1 class="font-bold text-5xl">Register</h1>
    <label :class="[
      'input input-bordered flex items-center gap-2 rounded-lg',
      { 'input-error': !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput) && emailInput != '', 'input-success': /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput) && emailInput != '' }
    ]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      <input type="text" class="grow" placeholder="Email" v-model="emailInput" />
    </label>
    <label class="input input-bordered flex items-center gap-2 rounded-lg justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
        <path fill-rule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clip-rule="evenodd" />
      </svg>
      <input type="password" class="grow" value="" placeholder="Password" v-model="passwordInput" />
    </label>
    <label class="input input-bordered flex items-center gap-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
        <path fill-rule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clip-rule="evenodd" />
      </svg>
      <input type="password" class="grow" value="" placeholder="Repeat Password" v-model="passwordInput2" />
    </label>
    <button class="btn btn-primary rounded-lg w-1/2">Register →</button>
    <div class="divider">Or</div>
    <button
      class="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 hover:shadow-sm hover:shadow-white">
      <img src="../assets/image2.png" alt="Google" class="w-5 h-5 mr-2">
      <span class="text-sm font-medium text-gray-700">Sign up with Google</span>
    </button>
    <button class="flex items-center bg-black rounded-full px-4 py-2 space-x-2 hover:shadow-sm hover:shadow-black">
      <img src="../assets/image.png" alt=" Apple" class="w-5 h-6">
      <span class="text-white text-sm font-medium">Sign up with Apple</span>
    </button>
    <div class="modal-action absolute top-0 right-6">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-circle btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop backdrop-blur">
    <button>close</button>
  </form>
</template>

<style scoped></style>
