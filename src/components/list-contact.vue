<template>
    <div class="container">
        <h1>Contact List</h1>
        <div class="container-list-contact">
            <table
                    class="list-contact"
                    cellspacing="0"
                    cellpadding="10"
                    border="2"
            >
                <tr>
                    <th>&#8470;</th>
                    <th>Person</th>
                    <th>Number</th>
                </tr>
                <tr v-for="contact in contacts"
                    :key="contact.id"
                >
                    <th>{{ contact.id }}</th>
                    <th>{{ contact.firstName.value + ' ' + contact.lastName.value }}</th>
                    <th>{{ contact.phoneNumber.value }}</th>
                    <router-link
                            tag="th"
                            :to="{ name: 'contactId', params: {id: contact.id}}"
                            class="button button-details"
                    >
                        <a>&#9997;</a>
                    </router-link>
                    <th class="button button-close" @click="removeContact(contact.id)">&times;</th>
                </tr>
            </table>

            <form @submit.prevent class="form-add-contact">
                <h3>Create new contact</h3>
                <div class="block-form-field">
                    <label for="name">{{newContact.firstName.key}}: </label>
                    <input type="text" id="name" v-model="newContact.firstName.value">
                </div>
                <div class="block-form-field">
                    <label for="surname">{{ newContact.lastName.key }}: </label>
                    <input type="text" id="surname" v-model="newContact.lastName.value">
                </div>
                <div class="block-form-field">
                    <label for="phone">{{ newContact.phoneNumber.key }}: </label>
                    <input type="tel" id="phone" v-model="newContact.phoneNumber.value">
                </div>
                <span v-if="error" class="error">Fill all field please!</span>
                <input type="button" class="button" value="Add contact" @click="addContact(newContact)">
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "list-contact",
        computed: {
            ...mapGetters({
                contacts: 'CONTACTS',
                id: 'ID',
                error: 'ERROR'
            }),
            newContact() {
                return {
                    id: this.id,
                    firstName: {
                        key: 'Name',
                        value: ''
                    },
                    lastName: {
                        key: 'Surname',
                        value: ''
                    },
                    phoneNumber: {
                        key: 'Phone number',
                        value: ''
                    }
                }
            }
        },
        methods: {
            ...mapActions({
                addContact: 'ADD_NEW_CONTACT',
                removeContactFromContacts: 'REMOVE_CONTACT'
            }),
            removeContact(id) {
                this.removeContactFromContacts(id);
            }
        }
    }
</script>
