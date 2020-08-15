<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <SideDrawer />
    <BackToTop />
  </div>
</template>

<script>
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import SideDrawer from '@/components/public/SideDrawer';
import BackToTop from '@/components/public/BackToTop';

export default {
  components: {
    Header,
    Footer,
    SideDrawer,
    BackToTop
  }
}
</script>

<style lang="scss">

</style>

