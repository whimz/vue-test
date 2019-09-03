<template>
    <button class="btn btn-primary" @click="onAddItem">Add item</button>
</template>

<script>
    export default {
        name: "add-item-component",
        methods: {
            onAddItem(){
                this.$emit('onAddItem');
            }
        }
    }
</script>

<style scoped>
    button{
        margin: 1rem 0;
    }
</style>