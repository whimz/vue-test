<template>
    <div>
        <add-item @onAddItem="addCourse">
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
                    v-for="tableHeader in coursesData.tableHeader"
                    @click="sortData" :data-sort-field="tableHeader"
                >{{ tableHeader }}</th>
                <th>Actions</th>
            </tr>
            <tr v-for="(course, index) in coursesData.courses">
                <template v-if="searchMatch[index]" :course="course">
                    <td>{{ course.name }}</td>
                    <td>{{ course.code }}</td>
                    <td>
                        <app-item-options
                                :data-index="index"
                                @editBtnClick="editCourse"
                                @deleteBtnClick="deleteCourse"
                        >
                        </app-item-options>
                    </td>
                </template>
            </tr>
        </table>
        <app-form
                v-if="showForm"
                @closeForm="closeModal"
                @itemDataChanged="saveCourse"
                :currentCourse="currentCourse"
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
        name: "app-courses-component",
        components: {
            'app-item-options': AppItemOptions,
            'app-form': AppFormComponent,
            'add-item': AddItemComponent,
            'app-search-component': AppSearchComponent
        },
        props: {
            coursesData: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                showForm: false,
                currentCourse: {},
                currentIndex: 0,
                formType: '',
                parent: '',
                searchMatch: []
            }
        },
        created(){
            for(let i = 0; i < this.coursesData.courses.length; i++){
                this.searchMatch[i] = true;
            }
        },
        methods: {
            addCourse(){
                this.formType = 'Add';
                this.showForm = true;
                this.parent = 'course';
            },
            editCourse(index){
                this.currentCourse = this.coursesData.courses[index];
                this.formType = 'Edit';
                this.currentIndex = index;
                this.showForm = true;
                this.parent = 'course';
            },
            saveCourse(course, index){
                if(this.formType === 'Edit'){
                    this.$emit('courseEdited', course, index);
                }
                if(this.formType === 'Add'){
                    this.$emit('courseAdded', course);
                }
            },
            deleteCourse(index){
                if(confirm('Delete this course? --> ' + this.coursesData.courses[index].name)){
                    this.$emit('courseDeleted', index);
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
                this.coursesData.courses.forEach((item, index) => {

                    let props = Object.values(item);
                    let matchValue = props.some(prop => prop.match(reg));
                    this.searchMatch.splice(index, 1, matchValue);
                });
            }
        }
    }
</script>

<style scoped>

</style>