<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-800 shadow z-20">
    <div class="container-default mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700
            focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            @click="open = !open"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                :class="{'hidden': open, 'inline-flex': !open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{'hidden': !open, 'inline-flex': open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 text-white font-bold items-center text-lg">
            E-Learning
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <slot />
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            class="inline-flex items-center p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white
            focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            <Icon name="notifications_none" cursor="pointer" inline-flex />
          </button>
          <Dropdown>
            <template v-slot:trigger>
              <button class="focus:outline-none hover:opacity-75 transition duration-150">
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </template>
            <DropdownItem icon="account_circle">
              {{ $t('myAccount') }}
            </DropdownItem>
            <DropdownItem icon="settings">
              {{ $t('settings') }}
            </DropdownItem>
            <hr>
            <DropdownItem
              theme="alert"
              icon="exit_to_app"
              @click="$emit('logout')"
            >
              {{ $t('logout') }}
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
    <div :class="{'block': open, 'hidden': !open}" class="sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <slot />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>
