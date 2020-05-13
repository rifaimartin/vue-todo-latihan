<template>
    <div class="col-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Done</h3>
                <input placeholder="input task" type="text" v-model="task.description" class="form-control" required>
            </div>
            <div class="card-body">
                <card-name jenis="done" />
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
}
</script>