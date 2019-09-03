<template>
    <div>
        <button class="btn btn-success" @click="editClick">Edit</button>
        <button class="btn btn-danger" @click="deleteClick">Del</button>
    </div>
</template>

<script>
    export default {
        name: "app-item-options",
        methods:{
            editClick(event){
                this.$emit('editBtnClick', event.target.parentNode.dataset.index);
            },
            deleteClick(event){
                this.$emit('deleteBtnClick', event.target.parentNode.dataset.index);
            }
        }
    }
</script>

<style scoped>

</style>