import Vue from 'vue';
import VueRouter from 'vue-router';

import { ACCESS_TOKEN } from '../config/localStorageVariables';

Vue.use(VueRouter);

const authRequired = (role) => {
  return {
    authRequired: false,
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
    path: '/password-forgotten',
    name: 'PasswordForgotten',
    component: () => import(/* webpackChunkName: "PasswordForgotten" */ '../ui/views/PasswordForgotten.vue'),
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
    meta: {
      ...authRequired(),
    },
    children: [
      {
        path: 'teachers_room',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/TeachersRoom.vue'),
        meta: {
          ...authRequired(),
        },
        children: [
          {
            path: 'timetable',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/timetable/Timetable.vue'),
            meta: {
              ...authRequired(),
            },
          },
          {
            path: 'teach_room',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/teach-room/TeachRoom.vue'),
            meta: {
              ...authRequired(),
            },
          },
          {
            path: 'courses/:id',
            component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/Courses.vue'),
            meta: {
              ...authRequired(),
            },
            children: [
              {
                path: 'files',
                component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/files/Files.vue'),
                meta: {
                  ...authRequired(),
                },
              },
              {
                path: 'stream',
                component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/stream/Stream.vue'),
                meta: {
                  ...authRequired(),
                },
              },
            ],
          },
        ],
      },
      {
        path: 'students_room',
        component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/StudentsRoom.vue'),
        meta: {
          ...authRequired(),
        },
      },
    ],
  },
  // Student ---------------------------------------------------------------------------------------
  {
    path: '/dashboard_student',
    name: 'Dashboard Student',
    component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/Dashboard.vue'),
    props: { role: 'student' },
    meta: {
      ...authRequired(),
    },
    children: [
      {
        path: 'classroom',
        component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/Classroom.vue'),
        meta: {
          ...authRequired(),
        },
        children: [
          {
            path: 'timetable',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/timetable/Timetable.vue'),
            meta: {
              ...authRequired(),
            },
          },
          {
            path: 'classroom',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/classroom/Classroom.vue'),
            meta: {
              ...authRequired(),
            },
          },
          {
            path: 'stream',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/stream/Stream.vue'),
            meta: {
              ...authRequired(),
            },
          },
        ],
      },
      {
        path: 'tasks',
        component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/Tasks.vue'),
        meta: {
          ...authRequired(),
        },
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
