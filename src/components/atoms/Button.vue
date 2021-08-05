<template>
  <button class="btn" @click="$emit('onClick')">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang='sass'>
.btn
  width: 60%
  max-width: 300px
  height: 50px
  padding: 15px
  border-radius: 12px
  font-size: 18px
  font-weight: bold
  color: #fff
  border: none
  outline: none
  background-color: #ef476f
  cursor: pointer
  transition: all .4s ease-in

  &:hover
    background-color: #fff
    color: #ef476f
</style>