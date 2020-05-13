<template >
  <div id="app" class="container">
   <div class="row">
			<todo />
      <doing />
      <Done />
		</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo'
import Doing from './components/Doing'
import Done from './components/Done'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Todo,
    Doing,
    Done
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
  margin-top: 100px;
}
</style>
