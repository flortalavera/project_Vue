<template>
  <HeaderComponent></HeaderComponent>
  <MainSlider></MainSlider>
  <SidebarHome></SidebarHome>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainSlider from './components/MainSlider.vue';
import SidebarHome from './components/SidebarHome.vue';
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainSlider,
    SidebarHome,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/css/styles.css';
@import './assets/css/reset.css';
</style>
