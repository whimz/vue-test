<template>
    <app-courses
        :coursesData="coursesData"
        @courseAdded="addCourseToList"
        @courseEdited="updateCourse"
        @courseDeleted="deleteCoursesFromList"
        @sortData="sortData"
    ></app-courses>
</template>

<script>
    import AppCoursesComponent from './components/AppCoursesComponent';
    export default {
        name: "courses",
        components: {
            'app-courses': AppCoursesComponent
        },
        data(){
            let coursesData = this.getCourses();
            return{
                'coursesData': coursesData,
                'sortAsc': true
            }
        },
        methods: {
            getCourses(){
                return JSON.parse(localStorage.getItem('coursesData'));
            },
            updateData(){
                localStorage.setItem('coursesData', JSON.stringify(this.coursesData));
            },
            addCourseToList(course){
                this.coursesData.courses.push(course);
                this.updateData();
            },
            updateCourse(course, index){
                this.coursesData.courses[index] = course;
                this.updateData();
            },
            deleteCoursesFromList(index){
                this.coursesData.courses.splice(index, 1);
                this.updateData();
            },
            sortData(sortField){
                this.coursesData.courses.sort((a, b) =>
                    this.sortAsc ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
                );

                this.sortAsc = !this.sortAsc;
            }

        }

    }
</script>

<style scoped>

</style>