import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    meta: {
      title: 'Example Title'
    }
  })
});
