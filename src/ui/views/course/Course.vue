<template>
  <section>
    <HeadWrapper>
      <div>
        <router-link
          class="text-gray-700 flex items-center focus:outline-none leading-tight hover:text-black mb-1"
          to="/teachers_room/courses"
        >
          <Icon name="chevron_left" cursor="pointer" />
          {{ $t('back') }}
        </router-link>
        <div class="flex items-center">
          <div class="h-3 w-3 rounded-full bg-purple-600 mr-2" />
          <Headline1>Mathe LK 12</Headline1>
        </div>
      </div>
      <template v-slot:right>
        <PortalTarget name="tab_action" />
      </template>
      <template v-slot:bottom>
        <Tabs>
          <TabItem :to="`/course/${$route.params.id}/lessons`">Lektionen</TabItem>
          <TabItem :to="`/course/${$route.params.id}/files`">Dateien</TabItem>
          <TabItem :to="`/course/${$route.params.id}/students`">Schüler</TabItem>
        </Tabs>
      </template>
    </HeadWrapper>
    <ViewWrapper>
      <router-view />
    </ViewWrapper>
  </section>
</template>

<script>
export default {
  injectModels: ['Authentication'],

  computed: {
    role() {
      return this.Authentication.user.role;
    },
  },
};
</script>
