<template>
    <div class="form-inline content-padding">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            v-model="pattern" @input="searchInput"
        >
    </div>
</template>

<script>
    export default {
        name: "app-search-component",
        data(){
            return{
                'pattern': ''
            }
        },
        methods:{
            searchInput(){
                this.$emit('search', this.pattern);
            }
        }
    }
</script>

<style scoped>
    .content-padding{
        padding: 0 0 1rem 0;
    }
</style>