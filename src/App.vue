<template>
  <div id="app">
    <div class="spinner" v-if="isLoading" >
      <HalfCircleSpinner :animation-duration="1000" :size="100" color="#073b4c"/>
    </div>
    <div class="container" v-else>
      <Quote :quote="quote" />
      <Button text="Generate New Quote" @onClick="doClick"/>
      <footer class="footer">
        <p>Created by Fernando Junior</p>
        <a href="https://github.com/inando85/anime-quotes-vue" target="_blank" class="github">Github Project</a>
    </footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Quote from './components/atoms/Quote'
import Button from './components/atoms/Button'

import { HalfCircleSpinner } from 'epic-spinners'

export default {
  name: 'App',
  components: {
    Button,
    Quote,
    HalfCircleSpinner
  },
  computed: {
    ...mapGetters(['quote', 'isLoading'])
  },
  methods: {
    ...mapActions(['getQuote']),
    doClick () {
      this.getQuote()
    }
  },
  created () {
    this.getQuote()
  }

}
</script>

<style lang="sass">

#app
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100vh

.container
  width: 100%
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 80px

  .footer
    text-align: center
    font-style: italic
    font-size: 18px
    
    & > a
      text-decoration: none
</style>
