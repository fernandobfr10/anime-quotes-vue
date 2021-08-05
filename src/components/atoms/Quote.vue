<template>
  <div class="quote">
    <div class="quote__description">{{quote.quote}}</div>
    <div class="quote__tag character">{{quote.character}}</div>
    <div class="quote__tag anime">{{quote.anime}}</div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    quote: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang='sass'>
.quote
  width: 90%
  max-width: 650px
  min-height: 300px
  height: max-content
  background-color: #073b4c
  border-radius: 12px
  text-align: center
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  position: relative
  padding: 50px

  &__description
    font-size: 22px
    color: #fff
    line-height: 30px

    &::before, &::after
      content: '"'
      font-size: 20px
    &::before
      margin-right: 5px
    &::after
      margin-left: 5px

  &__tag
    position: absolute
    min-width: 160px
    height: 50px
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: center
    font-size: 20px
    font-weight: bold
    padding: 10px

    &.character
      top: -15px
      left: -15px
      background-color: #ffd166
    

    &.anime
      bottom: -15px
      right: -15px
      background-color: #118ab2
      color: #fff
</style>