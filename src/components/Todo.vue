<template>
    <div class="col-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Todo<button @click.prevent="simpan" >add</button></h3>
                <input placeholder="input task" type="text" v-model="task.description" class="form-control" required>
            </div>
            <div class="card-body">
                <card-name jenis="todo" />
            </div>
        </div>
    </div>
</template>
<script>

import CardName from './CardName'
export default {
    name : 'todoInput',
    components : {
        CardName
    },
    data() {
        return {
            task : {
                description : "" 
            }
        }
    },
   
    methods : {
        simpan() {
            this.$store.dispatch('saveTask', this.task)
            this.task = {
                description : ''
            }
        }
        
    }
}
</script>