<template>
  <div>
    <h2>当前求和为: {{sum}}</h2>
    <h2>当前求和处理后结果为: {{bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select><br/>
    <button @click="increase(n)">+</button>&nbsp;
    <button @click="decrease(n)">-</button>&nbsp;
<button @click="increaseAsync(n)">异步加</button>&nbsp; 
    <button @click="increaseOdd(n)">奇数加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from "vuex"
  export default {
    name:"Count",
    data() {
      return {
        n:1//n是用户选择的数据
      }
    },
    // mounted(){
    //   const x = mapState({sum:'sum',bigSum:'bigSum'})
    // },
    computed:{
      //自己写计算属性定义sum, 值来自于state中的sum
      // sum(){
      //   return this.$store.state.sum
      // }
      //?靠mapState生成计算属性
        ...mapState({sum:'sum'}),
        //?靠mapState生成计算属性数组形式简写
        // ...mapState(['sum']),
      //!---------------------------------------- 
      //自己写计算属性定义bigSum 值来自于getters
      // bigSum(){
      //   return this.$store.getters.bigSum
      // }

      //?靠mapGetters生成计算属性
        // ...mapGetters({bigSum:'bigSum'}),
      //?靠mapGetters生成计算属性数组形式简写
      ...mapGetters(['bigSum'])
      //!---------------------------------------- 

    },
    methods:{
      // increase(value){
      //   // this.$store.dispatch("increase",this.n)
      //   // ?如果actions 没任何处理 可以直接绕过actions 直接commit
      //   this.$store.commit("INCREASE",value)
      // },
      // decrease(value){
      //   // this.$store.dispatch("decrease",this.n)
      //   this.$store.commit("DECREASE",value)
      // },
      //简写形式,默认接收一个参数
     ...mapMutations({
       increase:"INCREASE",
       decrease:"DECREASE"
     }) ,
     //!---------------------------------------- 
      // increaseAsync(){
      //   this.$store.dispatch("increaseAsync",this.n)
      // },
      // increaseOdd(){
      //   this.$store.dispatch("increaseOdd",this.n)
      // }
      ...mapActions(['increaseAsync','increaseOdd'])
    }
  }
</script>

