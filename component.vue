<script setup lang="ts">
import { useEditorStore } from '~/editor';
import { storeToRefs } from 'pinia';

const editorStore = useEditorStore();
const { meta } = storeToRefs(editorStore);
</script>

<template>
  <div>{{ meta.title }}</div>
</template>
