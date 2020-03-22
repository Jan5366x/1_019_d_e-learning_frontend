<template>
  <div>
    <Card class="teacher-subject-overview-card">
      <button class="w-full" @click="toggleClasses()">
        <Headline2 class="flex justify-between items-center cursor-pointer">
          {{ subject }} <Icon class="relative chevron_icon transform transition-transform" :class="{'transform rotate-90 transition duration-200 ease-in-out': isActive }" name="chevron_right"></Icon>
        </Headline2>
      </button>
      <div v-if="isActive">
        <CourseLink to="/course/">
        </CourseLink>
      </div>
    </Card>
  </div>
</template>

<script>
import CourseLink from '../course/CourseLink.vue';

export default {
  name: 'TeacherSubjectOverview',
  components: { CourseLink },
  props: {
    teacher: {
      type: Object,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClasses() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style>
  button {
    outline: none !important;
  }
</style>
