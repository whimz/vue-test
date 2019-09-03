import Courses from './Courses.vue';
import Users from './Users.vue';
import Home from './Home.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/courses',
        component: Courses
    }
];
