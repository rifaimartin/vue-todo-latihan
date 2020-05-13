<template>
    <div>
        <div class="card-header" v-for="(row, index) in taskCreated.filter(r => r.status == jenis)" :key="index">
           <div>{{ row.description }}</div>
            <button @click.prevent="left(row)" v-if="['doing', 'done'].includes(jenis)">LEFT</button>
            <button @click.prevent="right(row)" v-if="['doing', 'todo'].includes(jenis)">RIGHT</button>
           </div>
        </div>
</template>
<script>

export default {
  props: ['jenis'],
    name : 'cardName',
    data() {
        return {
            task : {
                description : "" 
            }
        }
    },
    computed: {
        taskCreated() {
            let b = this.$store.state.listTask
            console.log(b, "data")
            return b
        }
    },
    methods : {
        right(row) {
            console.log(row, "check isi row")
            this.$store.dispatch('rightMove', row)
            console.log("this is actions right")
             row = {
                description : row.description,
                status : row.status
            }
        },
        left() {
            this.$store.dispatch('leftMove', this.task)
            console.log("this is actions left")
            
        }
        
    }
}
</script>