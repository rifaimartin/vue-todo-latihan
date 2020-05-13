<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Doing</h3>
                <input placeholder="input task" type="text" v-model="task.description" class="form-control" required>
            </div>
            <div class="card-body">
                <card-name jenis="doing" />
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