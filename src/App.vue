<template>
    <div class="container">
        <div class="row">
            <div class="app-content">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeaderComponent from './components/AppHeaderComponent.vue';
    export default {
        components: {
            'app-header': AppHeaderComponent
        }
    }
</script>

<style>
    .app-content{
        width: 100%;
    }
    .t-header{
        cursor: pointer;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    table{
        width: 100%;
    }
    td, th{
        padding: 0.375rem
    }
    th{
        background: rgba(0,0,0,0.9);
        color: #fff;
    }
    tr:not(:last-child){
        border: 1px solid transparent;
        border-bottom-color: rgba(0,0,0,0.1);
    }
</style>
