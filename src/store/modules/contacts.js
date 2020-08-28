let fakeContacts = []

function createContact(index) {
    index++;
    return {
        id: index,
        firstName: {
            key: 'Name',
            value: 'Name' + index
        },
        lastName: {
            key: 'Surname',
            value: 'Surname' + index
        },
        phoneNumber: {
            key: 'Phone number',
            value: '+38-(068)-00-000-00'
        }
    }
}

for (let i = 0; i < 5; i++) {
    fakeContacts[i] = createContact(i);
}


export default {
    state: {
        contacts: fakeContacts,
        id: fakeContacts.length + 1,
        error: false
    },
    getters: {
        CONTACTS(state) {
            return state.contacts;
        },
        ID(state) {
            return state.id;
        },
        ERROR(state) {
            return state.error;
        }
    },
    mutations: {
        addNewContact(state, contact) {
            for (let item in contact) {
                if(contact[item] === '') {
                    state.error = true;
                    return false;
                }
            }
            state.error = false;
            state.id++;
            state.contacts.push(contact);
        },
        removeContact(state, id) {
            for(let key in state.contacts) {
                if(state.contacts[key].id == id) {
                    state.contacts.splice(key, 1);
                }
            }
        },
        addNewFieldToContact(state, resetContacts) {
            state.contacts = resetContacts
        }
    },
    actions: {
        ADD_NEW_CONTACT({commit}, contact) {
            commit('addNewContact', contact)
        },
        REMOVE_CONTACT({commit}, id) {
            commit('removeContact', id)
        },
        ADD_NEW_FIELD_TO_CONTACT({commit}, resetContacts) {
            commit('addNewFieldToContact', resetContacts)
        }
    }
}