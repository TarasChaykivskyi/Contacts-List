<template>
    <div class="overlay">
        <div class="modal">
            <div class="top-modal">
                <h3>Are you sure?</h3>
            </div>
            <div class="bottom-modal">
                <button @click="showModalSuccess()" class="success">Yes</button>
                <button @click="showModal()" class="cancel">No</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "modal",
        computed: {
            ...mapGetters({
                success: 'SUCCESS'
            })
        },
        methods: {
            ...mapActions({
                showModal: 'SHOW_MODAL',
                modalSuccess: 'MODAL_SUCESS'
            }),
            showModalSuccess() {
                this.showModal();
                this.modalSuccess();
            }
        }
    }
</script>
