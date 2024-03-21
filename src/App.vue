<script setup>
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import { ref } from 'vue'

function renderGalleryItem(){
  fetch(`https://source.unsplash.com/collection/1319040/1100x580/?sig=${Math.floor(Math.random() * 7017)}`) .then((response)=> {    
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img class="gallery-image" style="width:100%" src="${response.url}" alt="gallery image"/>`
    document.body.appendChild(galleryItem);
  })
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <h1 class="text-xl font-semibold m-6">Logo here</h1>
    </div>
    <div class="flex-none">
      <button class="btn btn-primary btn-normal w-24 m-6" onclick="login.showModal()">Login</button>
      <button class="btn btn-secondary btn-normal w-24 m-6" onclick="register.showModal()">Register</button>
    </div>
    <img source=renderItem></img>
  </div>
  <dialog id="login" class="modal modal-bottom sm:modal-middle">
    <Login></Login>
  </dialog>
  <dialog id="register" class="modal modal-bottom sm:modal-middle">
    <Registration></Registration>
  </dialog>
  <img class="gallery-container w-max" :src="renderGalleryItem()"></img>
</template>

<style scoped></style>
