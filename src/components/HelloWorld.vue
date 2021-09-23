<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ count }}
      <button @click="add(1)">カウント</button>
    </p>
    <p>
      名前: <input type="text" @input="updateName($event.target.value)"/><button @click="addAge">年齢加算</button>
    </p>
    <p>{{userName}}さん({{userAge}}歳)</p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      count: 0 as number
    }
  },
  computed: {
    ...mapState("user", {
      userName: "name",
      userAge: "age"
    })
  },
  methods: {
    ...mapMutations({
      updateName: "user/updateName",
      updateAge: "user/updateAge"
    }),
    add(num: number){
      this.count = this.count + num;
    },
    addAge(){
      this.updateAge(this.userAge + 1)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
