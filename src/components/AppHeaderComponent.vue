<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <router-link to="/" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/users" tag="li" active-class="active"><a class="nav-link">Users</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/courses" tag="li" active-class="active"><a class="nav-link">Courses</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "header.vue"
    }
</script>

<style scoped>
    div{
        width: 100%;
    }
    nav{
        justify-content: flex-start;
    }

    .nav-link{
        border-radius: 4px;
    }

    .nav-link:hover{
        background: rgba(0,0,0,0.1);
    }

    .active>.nav-link{
        color: #fff;
        background-color: #007bff;
    }

</style>