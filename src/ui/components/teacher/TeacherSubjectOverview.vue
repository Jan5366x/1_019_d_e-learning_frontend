<template>
  <div>
    <Card class="teacher-subject-overview-card">
      <button class="w-full" @click="toggleClasses()">
        <Headline2 class="flex justify-between items-center cursor-pointer">
          {{ subject.title }}
          <Icon
            class="relative chevron_icon transform transition-transform"
            :class="{'transform rotate-90 transition duration-200 ease-in-out': isActive }"
            name="chevron_right"
          />
        </Headline2>
      </button>
      <div v-if="isActive" class="pt-4">
        <CourseLink
          v-for="course in subject.courses"
          :key="course._id"
          :to="`/course/${course._id}`"
          :color="course.color"
        >
          {{ course.title }}
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
      type: Object,
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
