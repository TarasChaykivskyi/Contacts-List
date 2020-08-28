<template>
    <div class="container contact-page">
        <div class="contact-page-top-action">
            <router-link tag="button" class="button goToBack" :to="{name: 'contact'}">&#8592; Go To Back</router-link>
            <button class="button goToBack">&#10060; Cancel last action</button>
        </div>
        <div class="about-contact">
            <img :src="imgProfile" class="profile" alt="profile">
            <div class="container-contact-details">
                <h3>Detail Contact</h3>
                <div v-for="(key, index) in currentContact" :key="index">
                    <div class="row-contact"  v-if="index !== 'id'">
                        <div class="contact-key">{{ key.key }} </div>
                        <div class="contact-value">{{ key.value }}</div>
                        <div class="actions-button">
                            <div class="button button-edit" @click="editDataFromContact(index)">&#9998;</div>
                            <div class="button button-close" @click="removeDataFromContact(index)">&times;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-add-new-field-contact">
            <button v-if="!showAddNewField" @click="showAddNewField = !showAddNewField">Add new data to contact</button>
            <div v-else class="container-add-field">
                <div class="block-add-field">
                    <label for="keyNewField">Key: </label>
                    <input type="text" id="keyNewField" v-model="newKey">
                </div>
                <div class="block-add-field">
                    <label for="keyNewvalue">Value: </label>
                    <input type="text" id="keyNewvalue" v-model="newValue">
                </div>
                <button class="button add" @click="addNewFieldToContact">Add</button>
                <button class="button cancel" @click="showAddNewField = !showAddNewField">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import imgProfile from '../assets/images/profile.png'

    export default {
        name: "contact",
        data() {
            return {
                currentContact: {},
                imgProfile,
                showAddNewField: false,
                countNewField: 0,
                newKey: '',
                newValue: ''
            }
        },
        computed: {
            ...mapGetters({
                contacts: 'CONTACTS'
            }),
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            ...mapActions({
                removeContact: 'REMOVE_CONTACT'
            }),
            setCurrentContact() {
                for (let contact of this.contacts) {
                    if(contact.id == this.id) {
                        this.currentContact = contact;
                    }
                }
            },
            addNewFieldToContact() {
                this.countNewField++;
                this.$set(this.currentContact, 'field' + this.countNewField, {
                    key: this.newKey,
                    value: this.newValue,
                });git init

                this.newValue = this.newKey = '';
            },
            removeDataFromContact(data) {
                this.$delete(this.currentContact, data)
                if(Object.keys(this.currentContact).length <= 1) {
                    this.removeContact(this.currentContact.id);
                    this.$router.go(-1);
                }
            },
            editDataFromContact(data) {
                this.currentContact[data].key = 'sdasfd';
                this.currentContact[data].value = '1111';
            }
        },
        created() {
            this.setCurrentContact();
        }
    }
</script>

<style scoped>

</style>