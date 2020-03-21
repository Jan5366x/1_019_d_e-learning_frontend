import Vue from 'vue';
import VueRouter from 'vue-router';

import { ACCESS_TOKEN } from '../config/localStorageVariables';

Vue.use(VueRouter);

const authRequired = () => {
  return {
    authRequired: true,
  };
};

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Home.vue'),
    meta: {
      ...authRequired(),
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../ui/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../ui/views/Register.vue'),
  },
  // Teacher ---------------------------------------------------------------------------------------
  {
    path: '/dashboard_teacher',
    name: 'Dashboard Teacher',
    component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/Dashboard.vue'),
    props: { role: 'teacher' },
    children: [
      {
        path: 'teachers_room',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/TeachersRoom.vue'),
        children: [
          {
            path: 'timetable',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/timetable/Timetable.vue'),
          },
          {
            path: 'teach_room',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/teach-room/TeachRoom.vue'),
          },
          {
            path: 'courses/:id',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/Courses.vue'),
            children: [
              {
                path: 'files',
                component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/files/Files.vue'),
              },
              {
                path: 'stream',
                component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/stream/Stream.vue'),
              },
            ],
          },
        ],
      },
      {
        path: 'students_room',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/StudentsRoom.vue'),
      },
    ],
  },
  // Student ---------------------------------------------------------------------------------------
  {
    path: '/dashboard_student',
    name: 'Dashboard Student',
    component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/Dashboard.vue'),
    props: { role: 'student' },
    children: [
      {
        path: 'classroom',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/students/Classroom.vue'),
        children: [
          {
            path: 'timetable',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/students/timetable/Timetable.vue'),
          },
          {
            path: 'classroom',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/students/classroom/Classroom.vue'),
          },
          {
            path: 'stream',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/students/stream/Stream.vue'),
          },
        ],
      },
      {
        path: 'tasks',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/students/Tasks.vue'),
      },
    ],
  },
  {
    path: '/404-not-found',
    name: '404 Not Found',
    component: () => import(/* webpackChunkName: "NotFound" */ '../ui/views/NotFound.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '*',
    redirect: '/404-not-found',
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (to.meta.authRequired && token) {
    next();
  } else if (!to.meta.authRequired && token) {
    router.push('/home');
  } else if (to.meta.authRequired && !token) {
    router.push('/login');
  } else {
    next();
  }
});

export default router;
