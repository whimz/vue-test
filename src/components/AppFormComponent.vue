<template>
    <div id="modal-wrap" @click="closeWrap">
        <form ref="editForm">

            <template v-if="parent === 'course'">
                <p v-if="formType === 'Edit'" class="f-title">Edit</p>
                <p v-else class="f-title">Add</p>
                <p>Name:</p>
                <p><input type="text" name="name" v-model="course.name"></p>
                <p>Code:</p>
                <p><input type="text" name="code" v-model="course.code"></p>
            </template>

            <template v-if="parent === 'user'">
                <p v-if="formType === 'Edit'" class="f-title">Edit</p>
                <p v-else class="f-title">Add</p>
                <p>Name:</p>
                <p><input type="text" name="name" v-model="user.name"></p>
                <p>E-mail:</p>
                <p><input type="text" name="email" v-model="user.email"></p>
                <p>
                    <input type="checkbox" id="user-status" name="status" v-model="user.status">
                    <label for="user-status">Active</label>
                </p>
            </template>

            <button @click.prevent="saveChanges">Save</button>
            <button @click.prevent="closeForm">Close</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app-form-component',
        props: {
            currentUser: {
                type: Object
            },
            currentCourse: {
                type: Object
            },
            formType: {
                type: String,
                required: true
            },
            currentIndex: {
                required: true
            },
            parent: {
                type: String,
                required: true
            }

        },
        data(){
            return{
                user: {
                    'name': '',
                    'email': '',
                    'status': false
                },
                course: {
                    'name': '',
                    'code': ''
                }
            }
        },
        created: function () {
            if (this.formType !== 'Edit') {
                return;
            }

            if(this.parent === 'user'){
                this.user.name = this.currentUser.name;
                this.user.email = this.currentUser.email;
                this.user.status = this.currentUser.status;
            }

            if(this.parent === 'course'){
                this.course.name = this.currentCourse.name;
                this.course.code = this.currentCourse.code;
            }

        },
        methods:{
            closeForm(){
                this.$emit('closeForm');
            },
            closeWrap(){
                if(event.target.id === 'modal-wrap'){
                    this.closeForm();
                }
            },
            saveChanges(){

                let item = {};
                let inputs = Array.prototype.slice.call(
                    this.$refs['editForm'].getElementsByTagName('input'));

                inputs.forEach(input => {
                    item[input.name] = (input.type === 'checkbox') ? (input.checked) : input.value;
                });

                this.$emit('itemDataChanged', item, parseInt(this.currentIndex));
                this.closeForm();
            }
        }
    }
</script>

<style scoped>
    #modal-wrap{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
        z-index: 1
    }

    form{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        padding: 1rem 2rem;
        width: 300px;
        height: fit-content;
        min-height: 375px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 15px;
    }

    input[type="text"]{
        width: 100%;
    }
    .f-title{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bolder;
    }


</style>