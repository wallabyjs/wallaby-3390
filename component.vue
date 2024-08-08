<script setup lang="ts">
import { useEditorStore } from '~/stores/editor';

const editorStore = useEditorStore();
const { meta } = storeToRefs(editorStore);
</script>

<template>
  <div>{{ meta.title }}</div>
</template>
