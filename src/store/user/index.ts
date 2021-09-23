import { createStore } from 'vuex'
import { User } from '../../model/User'

const state: User = {
  name: "--",
  age: 0
}
const mutations = {
  updateName(state: User, name: string){
    state.name = name;
  },
  updateAge(state: User, age: number){
    state.age = age;
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
