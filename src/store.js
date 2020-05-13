import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listTask: [
            { description: 'CRUD runner', status : 'todo' },
            { description: 'Create End Point Upload Image', status : 'doing' },
            { description: 'Send OTP', status : 'done' },

        ]
    },
    mutations: {
        SAVE_TASK: (state, task) => {
            state.listTask.push(task)
        },
        MOVE_RIGHT: (state, task) => {
            for(let i in state.listTask) {
              if(state.listTask[i] == task) {
                switch(state.listTask[i].status) {
                  case 'done':
                    state.listTask[i].status = 'doing';
                    break;
                  case 'doing':
                    state.listTask[i].status = 'todo';
                    break;
                }
              }
            }
        },

        MOVE_LEFT: (state, task) => {
            state.listTask.push(task)
        }
    },
    actions: {
        saveTask({ commit }, task) {
            commit('SAVE_TASK', task)
            console.log(task,"chech task")
        },
        rightMove({ commit }, task) {
            commit('MOVE_RIGHT', task)
            console.log(task, "move right")
        },
        leftMove({ commit }, task) {
            commit('MOVE_LEFT', task)
            console.log(task, "move left")
        }
    }
})