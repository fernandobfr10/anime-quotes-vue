<template>
  <div id="app">
    <Quote :quote="quote" />
    <Button text="Generate New Quote" :onClick="doClick"/>
    <footer class="footer">
      <p>Created by Fernando Junior</p>
      <a href="#" class="github">Github Project</a>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Quote from './components/atoms/Quote'
import Button from './components/atoms/Button'

export default {
  name: 'App',
  components: {
    Button,
    Quote
  },
  computed: {
    ...mapGetters(['quote'])
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
