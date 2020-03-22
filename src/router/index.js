import Vue from 'vue';
import VueRouter from 'vue-router';

import { ACCESS_TOKEN, UID } from '../config/localStorageVariables';

Vue.use(VueRouter);

const authRequired = (role) => {
  return {
    authRequired: true,
    role: role || 'all',
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
    name: 'DashboardTeacher',
    component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/Dashboard.vue'),
    meta: { ...authRequired('teacher') },
  },
  {
    path: '/courses',
    component: () => import(/* webpackChunkName: "DashboardTeacher" */ '../ui/views/teacher/courses/Courses.vue'),
    meta: { ...authRequired('teacher') },
  },
  {
    path: '/teachers_room',
    name: 'TeachersRoom',
    component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/TeachersRoom.vue'),
    meta: { ...authRequired('teacher') },
    children: [
      {
        path: 'teach_room',
        component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/teachRoom/TeachRoom.vue'),
        meta: { ...authRequired('teacher') },
      },
      {
        path: 'timetable',
        component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/timetable/Timetable.vue'),
        meta: { ...authRequired('teacher') },
      },
      {
        path: 'teachroom',
        component: () => (/* webpackChunkName: "TeachersRoom" */ './ui/views/teacher/timetable/TeachRoom.vue'),
        meta: { ...authRequired('teacher') },
      },
      {
        path: 'courses',
        component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/courses/Courses.vue'),
        meta: { ...authRequired('teacher') },
        children: [
          {
            path: 'files',
            component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/courses/files/Files.vue'),
            meta: { ...authRequired('teacher') },
          },
          {
            path: 'stream',
            component: () => import(/* webpackChunkName: "TeachersRoom" */ '../ui/views/teacher/courses/stream/Stream.vue'),
            meta: { ...authRequired('teacher') },
          },
        ],
      },
    ],
  },
  // Student ---------------------------------------------------------------------------------------
  {
    path: '/dashboard_student',
    name: 'DashboardStudent',
    component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/Dashboard.vue'),
    meta: { ...authRequired('student') },
    children: [
      {
        path: 'classroom',
        component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/Classroom.vue'),
        meta: { ...authRequired('student') },
        children: [
          {
            path: 'timetable',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/timetable/Timetable.vue'),
            meta: { ...authRequired('student') },
          },
          {
            path: 'classroom',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/classroom/Classroom.vue'),
            meta: { ...authRequired('student') },
          },
          {
            path: 'stream',
            component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/stream/Stream.vue'),
            meta: { ...authRequired('student') },
          },
        ],
      },
      {
        path: 'tasks',
        component: () => import(/* webpackChunkName: "DashboardStudent" */ '../ui/views/students/Tasks.vue'),
        meta: { ...authRequired('student') },
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
  const uid = localStorage.getItem(UID);
  let user = null;
  if (uid) {
    user = JSON.parse(atob(uid));
  }
  if (!to.meta.authRequired && !token) {
    next();
  } else if (to.meta.authRequired && !token) {
    next({ name: 'Login' });
  } else if (!to.meta.authRequired && token) {
    next(false);
  } else if (to.meta.authRequired && token && (to.meta.role === 'all' || user.role === to.meta.role)) {
    next();
  } else if (to.meta.authRequired && token && user.role !== to.meta.role) {
    if (user.role === 'teacher') next({ name: 'DashboardTeacher' });
    else if (user.role === 'student') next({ name: 'DashboardStudent' });
  }
});

export default router;
