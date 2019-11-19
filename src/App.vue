<template>
  <div class="app-container">
    <SideBar></SideBar>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "app",
  props: ["rows"],
  components: {
    SideBar
  }
};
</script>

<style>
@import "/src/style/main.css";
</style>
