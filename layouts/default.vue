<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <SideDrawer />
  </div>
</template>

<script>
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import SideDrawer from '@/components/public/SideDrawer';

export default {
  components: {
    Header,
    Footer,
    SideDrawer
  }
}
</script>

<style lang="scss">

</style>

