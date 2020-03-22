<template>
  <section>
    <Portal to="tab_action">
      <Button theme="primary">Datei hochladen</Button>
    </Portal>
    <div class="mb-4 font-semibold text-lg">Ordner</div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
      <Card
        v-for="folder in folders"
        :key="folder._id"
        class="font-medium text-gray-800 hover:shadow-lg"
      >
        <div class="flex items-center">
          <Icon name="folder" size="base" class="text-gray-700 mr-2" />
          {{ folder.title }}
        </div>
      </Card>
    </div>
    <div class="mb-4 font-semibold text-lg">Dateien</div>
    <div>
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <button
          v-for="(file, index) in files"
          :key="file._id"
          class="px-4 py-3 flex w-full items-center font-medium text-gray-800 hover:bg-gray-200
          transition duration-200 focus:outline-none active:bg-gray-300"
          :class="{
            'border-b': index !== files.length - 1,
          }"
        >
          <Icon
            v-if="file.type === 'pdf'"
            class="text-red-500 mr-2"
            name="insert_drive_file"
          />
          <Icon
            v-else-if="file.type === 'video'"
            class="text-blue-500 mr-2"
            name="movie"
          />
          {{ file.title }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import nanoid from 'nanoid';

export default {
  data() {
    return {
      folders: [
        { _id: nanoid(), title: 'Integralrechnungen' },
        { _id: nanoid(), title: 'Geometrie' },
      ],
      files: [
        { _id: nanoid(), title: 'Wichtige Infos zum Kurs.pdf', type: 'pdf' },
        { _id: nanoid(), title: 'Integralrechnung_1.mp4', type: 'video' },
      ],
    };
  },
};
</script>
