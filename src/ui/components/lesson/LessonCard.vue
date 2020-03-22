<template>
  <button
    class="w-full text-left shadow-sm px-3 py-2 rounded-lg focus:outline-none mb-3
    hover:shadow transition duration-150"
    :class="classes"
  >
    <div class="text-medium font-semibold"><slot /></div>
    <div class="text-sm leading-tight" :class="labelClasses"><slot name="course" /></div>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white',
    },
  },

  computed: {
    classes() {
      return {
        'bg-gray-200 text-gray-800': this.color === 'white',
        'bg-blue-200 text-blue-800': this.color === 'blue',
        'bg-yellow-200 text-yellow-800': this.color === 'yellow',
        'bg-orange-200 text-orange-800': this.color === 'orange',
        'bg-green-200 text-green-800': this.color === 'green',
        'bg-purple-200 text-purple-800': this.color === 'purple',
      };
    },
    labelClasses() {
      return {
        'text-gray-700': this.color === 'white',
        'text-blue-700': this.color === 'blue',
        'text-yellow-700': this.color === 'yellow',
        'text-orange-700': this.color === 'orange',
        'text-green-700': this.color === 'green',
        'text-purple-700': this.color === 'purple',
      };
    },
  },
};
</script>
