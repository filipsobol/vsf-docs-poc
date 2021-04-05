<template>
  <div>
    <div class="relative">
      <button
        type="button"
        class="relative w-28 pl-3 pr-8 py-2 rounded text-left focus:outline-none focus:ring cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        @click="toggle()"
      >
        <span class="flex items-center">
          <span class="block truncate">
            {{ selectedItem.value }}
          </span>
        </span>

        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500">
          <UnfoldIcon :size="16" />
        </span>
      </button>

      <ul
        v-show="isOpen"
        class="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          v-for="item in items"
          :key="item.value"
          class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 hover:cursor-pointer"
          role="option"
          @click="select(item.value)"
        >
          <div class="flex items-center">
            <span class="font-normal block truncate">
              {{ item.label }}
            </span>
          </div>

          <span
            v-if="item.value === internalSelected"
            class="text-green-600 absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <CheckIcon :size="18" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/Check.vue';
import UnfoldIcon from '~/components/icons/Unfold.vue';

export default {
  name: 'Select',

  components: {
    CheckIcon,
    UnfoldIcon
  },

  props: {
    items: {
      type: Array,
      required: true
    },

    selected: {
      type: String,
      default: () => this.items?.[0]?.value || ''
    }
  },

  data() {
    return {
      isOpen: false,
      internalSelected: this.selected
    };
  },

  computed: {
    selectedItem() {
      return this.items.find(item => item.value === this.internalSelected);
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

    select(value) {
      this.internalSelected = value;

      this.$emit('select', value);
    }
  }
};
</script>
