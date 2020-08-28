import Vue from 'vue'
import Vuex from 'vuex'
import contacts from "./modules/contacts";
import modal from "./modules/modal";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contacts,
        modal
    }
})