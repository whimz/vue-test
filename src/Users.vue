<template>
    <app-users
        :usersData="usersData"
        @userAdded="addUserToList"
        @userDeleted="deleteUserFromList"
        @userEdited="updateUser"
        @sortData="sortData"
    ></app-users>
</template>

<script>
    import AppUsersComponent from './components/AppUsersComponent';
    export default {
        name: "courses",
        components: {
            'app-users': AppUsersComponent
        },
        data(){
            let usersData = this.getUsers();
            return{
                'usersData': usersData,
                'sortAsc' : true
            }
        },
        methods: {
            getUsers(){
                return JSON.parse(localStorage.getItem('usersData'));
            },
            updateData(){
                localStorage.setItem('usersData', JSON.stringify(this.usersData));
            },
            addUserToList(user){
                this.usersData.users.push(user);
                this.updateData();
            },
            updateUser(user, index){
                this.usersData.users[index] = user;
                this.updateData();
            },
            deleteUserFromList(index){
                this.usersData.users.splice(index, 1);
                this.updateData();
            },
            sortData(sortField){
                if(typeof this.usersData.users[0][sortField] !== "boolean"){
                    this.usersData.users.sort((a, b) =>
                        this.sortAsc ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
                    );
                }else{
                    this.usersData.users.sort((a, b) =>
                        this.sortAsc ? ((a[sortField] === b[sortField]) ? 0 : a[sortField] ? 1 : -1) : (a[sortField] === b[sortField]) ? 0 : b[sortField] ? 1 : -1
                    );
                }
                this.sortAsc = !this.sortAsc;
            }

        }

    }
</script>

<style scoped>

</style>