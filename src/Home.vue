<template>
    <div>
        <h3>Get sources</h3>
        <a class="btn btn-success" href="/src.zip" download="">Download .zip</a>
        <a class="btn btn-success" href="https://github.com/whimz/vue-test" target="_blank">View on Github</a>

    </div>
</template>

<script>
    export default {
        name: "home",
        created(){
            this.generateRandomData('usersData', 'coursesData');
        },
        methods:{
            generateTableHeader(listName){
                let tableHeader = {};
                if(listName === 'users'){
                    return {
                        'thName': 'Name',
                        'thEmail': 'Email',
                        'thStatus': 'Status'
                    };
                }
                if(listName === 'courses'){
                    return {
                        'thName': 'Name',
                        'thEmail': 'Code'
                    };
                }
                return tableHeader;
            },
            generateRandomUsers(){
                let randomUsers = [];
                randomUsers.push({
                    'name': 'Frankie Warren',
                    'email': 'Frankie@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Essence Fry',
                    'email': 'essense@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Barbara Cline',
                    'email': 'barbara@gmail.com',
                    'status': false
                });
                randomUsers.push({
                    'name': 'Addison Charles',
                    'email': 'addison@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Tony Rich',
                    'email': 'tony@gmail.com',
                    'status': false
                });
                randomUsers.push({
                    'name': 'Remington Perry',
                    'email': 'remy@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Quincy Montgomery',
                    'email': 'quincy@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Hope Koch',
                    'email': 'hope@gmail.com',
                    'status': false
                });
                randomUsers.push({
                    'name': 'Briana Riley',
                    'email': 'briana@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Nicole Harrell',
                    'email': 'nicole@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Delilah Crawford',
                    'email': 'delilah@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Kayden Sheppard',
                    'email': 'kayden@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Willow Patterson',
                    'email': 'willow@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Princess Beck',
                    'email': 'beck@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Julius Jordan',
                    'email': 'julius@gmail.com',
                    'status': false
                });
                randomUsers.push({
                    'name': 'Dax Yu',
                    'email': 'dax@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Annabel Fletcher',
                    'email': 'annabel@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Karen Jensen',
                    'email': 'karen@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Marvin French',
                    'email': 'marvin@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Dustin Mcbride',
                    'email': 'dustin@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Ivan Lowe',
                    'email': 'iven@gmail.com',
                    'status': true
                });
                randomUsers.push({
                    'name': 'Sydney Sutton',
                    'email': 'sydney@gmail.com',
                    'status': false
                });
                randomUsers.push({
                    'name': 'Adriana Davidson',
                    'email': 'adriana@gmail.com',
                    'status': false
                });
                return randomUsers;
            },
            generateRandomCourses(){
                let randomCourses = [];
                randomCourses.push({
                    'name': 'HTML5',
                    'code': 'RFVG3CL708',
                });
                randomCourses.push({
                    'name': 'CSS3',
                    'code': 'BJJ20DYT9R',
                });
                randomCourses.push({
                    'name': 'JavaScript',
                    'code': 'JSH8LQQP0S',
                });
                randomCourses.push({
                    'name': 'VueJs',
                    'code': 'VEKK66I4AF',
                });
                randomCourses.push({
                    'name': 'Angular',
                    'code': 'P0C75F6DNN',
                });randomCourses.push({
                    'name': 'React',
                    'code': 'MER9LASJH3',
                });
                randomCourses.push({
                    'name': 'PHP',
                    'code': 'HK5A1GVA8U',
                });randomCourses.push({
                    'name': 'JQuery',
                    'code': 'RFVG3CL708',
                });
                randomCourses.push({
                    'name': 'Node.js',
                    'code': '6PQJFUGT93',
                });randomCourses.push({
                    'name': 'EntityFramework',
                    'code': 'RFVG3CL708',
                });
                randomCourses.push({
                    'name': 'ASP.NET',
                    'code': 'D0BO05JXM6',
                });randomCourses.push({
                    'name': 'SQL',
                    'code': 'WU9MM5KRSO',
                });
                randomCourses.push({
                    'name': 'C#',
                    'code': 'PEJOFC4TA4',
                });
                randomCourses.push({
                    'name': 'Java',
                    'code': '61DDKGMHP7',
                });
                randomCourses.push({
                    'name': 'Android',
                    'code': 'N7T1RZAR0C',
                });randomCourses.push({
                    'name': 'JavaSE',
                    'code': '85R5LXMS2H',
                });
                randomCourses.push({
                    'name': 'JavaEE',
                    'code': '4E49GZ82TV',
                });
                return randomCourses;
            },
            generateRandomData(users, courses){
                if(!localStorage[users] && !localStorage[courses]){
                    localStorage.setItem(users, JSON.stringify({
                        'tableHeader': this.generateTableHeader('users'),
                        'users': this.generateRandomUsers()
                    }));
                    localStorage.setItem(courses, JSON.stringify({
                        'tableHeader': this.generateTableHeader('courses'),
                        'courses': this.generateRandomCourses()
                    }));
                }
            }
        }
    }
</script>

<style scoped>
    h3{
        padding: 0.875rem 0;
    }
</style>