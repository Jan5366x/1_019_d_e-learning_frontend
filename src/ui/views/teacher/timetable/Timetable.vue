<template>
  <section>
    <div class="grid grid-cols-5 gap-4">
      <Card>
        <template v-slot:header>
          <span class="uppercase font-medium text-sm text-gray-800">
            Montag
          </span>
        </template>
        <div class="border p-2 rounded-lg">
          Chemie 8b
        </div>
      </Card>
      <Card>
        <template v-slot:header>
          <span class="uppercase font-medium text-sm text-gray-800">
            Dienstag
          </span>
        </template>
      </Card>
      <Card>
        <template v-slot:header>
          <span class="uppercase font-medium text-sm text-gray-800">
            Mittwoch
          </span>
        </template>
      </Card>
      <Card>
        <template v-slot:header>
          <span class="uppercase font-medium text-sm text-gray-800">
            Donnerstag
          </span>
        </template>
      </Card>
      <Card>
        <template v-slot:header>
          <span class="uppercase font-medium text-sm text-gray-800">
            Freitag
          </span>
        </template>
      </Card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timetable',
};
</script>
