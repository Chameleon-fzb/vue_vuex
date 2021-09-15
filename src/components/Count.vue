<template>
  <div>
    <h2>当前求和为: {{$store.state.sum}}</h2>
    <h2>当前求和处理后结果为: {{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select><br/>
    <button @click="increase">+</button>&nbsp;
    <button @click="decrease">-</button>&nbsp;
<button @click="increaseAsync">异步加</button>&nbsp; 
    <button @click="increaseOdd">奇数加</button>
  </div>
</template>

<script>
  export default {
    name:"Count",
    data() {
      return {
        n:1//n是用户选择的数据
      }
    },
    methods:{
      increase(){
        this.$store.dispatch("increase",this.n)
      },
      decrease(){
        this.$store.dispatch("decrease",this.n)
      },
      increaseAsync(){
        this.$store.dispatch("increaseAsync",this.n)
      },
      increaseOdd(){
        this.$store.dispatch("increaseOdd",this.n)
      }
    }
  }
</script>

