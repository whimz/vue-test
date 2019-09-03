<template>
    <div>
        <add-item @onAddItem="addUser"
                  :formType="formType"
        >
        </add-item>
        <app-search-component
            @search="search"
        >
        </app-search-component>

        <table>
            <tr>
                <th class="t-header"
                    v-for="tableHeader in usersData.tableHeader"
                    @click="sortData" :data-sort-field="tableHeader"
                >{{ tableHeader }}</th>
                <th>Actions</th>
            </tr>
            <tr v-for="(user, index) in usersData.users">
                <template v-if="searchMatch[index]" :user="user">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td v-if="user.status" class="green">Active</td>
                    <td v-else class="red">Inactive</td>
                    <td>
                        <app-item-options
                                :data-index="index"
                                @editBtnClick="editUser"
                                @deleteBtnClick="deleteUser">
                        </app-item-options>
                    </td>
                </template>
            </tr>
        </table>
        <app-form
                v-if="showForm"
                @closeForm="closeModal"
                @itemDataChanged="saveUser"
                :currentUser="currentUser"
                :formType="formType"
                :currentIndex="currentIndex"
                :parent="parent"
        >
        </app-form>
    </div>
</template>

<script>
    import AppItemOptions from './AppItemOptions';
    import AppFormComponent from './AppFormComponent';
    import AddItemComponent from './AddItemComponent';
    import AppSearchComponent from './AppSearchComponent';

    export default {
        name: "app-users-component",
        components: {
            'app-item-options': AppItemOptions,
            'app-form': AppFormComponent,
            'add-item': AddItemComponent,
            'app-search-component': AppSearchComponent
        },
        props: {
            usersData: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                showForm: false,
                currentUser: {},
                currentIndex: 0,
                formType: '',
                parent: '',
                searchMatch: []
            }
        },
        created(){
            for(let i = 0; i < this.usersData.users.length; i++){
                this.searchMatch[i] = true;
            }
        },
        methods: {
            addUser(){
                this.formType = 'Add';
                this.showForm = true;
                this.parent = 'user';
            },
            editUser(index){
                console.log(this.searchMatch);
                this.currentUser = this.usersData.users[index];
                this.formType = 'Edit';
                this.currentIndex = index;
                this.showForm = true;
                this.parent = 'user';
            },
            saveUser(user, index){
                if(this.formType === 'Edit'){
                    this.$emit('userEdited', user, index);
                }
                if(this.formType === 'Add'){
                    this.$emit('userAdded', user);
                }
            },
            deleteUser(index){
                if(confirm('Delete this user? --> ' + this.usersData.users[index].name)){
                    this.$emit('userDeleted', index);
                }
            },
            closeModal(){
                this.showForm = !this.showForm;
            },
            sortData(event){
                this.$emit('sortData', event.target.dataset.sortField.toLowerCase());
            },
            search(pattern){
                let reg = new RegExp(pattern, "i");
                this.usersData.users.forEach((item, index) => {

                    let props = Object.values(item);
                    let matchValue = props.some(prop => (typeof prop === 'string') ? prop.match(reg) : false);
                    this.searchMatch.splice(index, 1, matchValue);
                });
            }
        }
    }
</script>

<style scoped>

</style>