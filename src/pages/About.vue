<script setup lang="ts">
import { API_URL } from '@/utils/constant';
</script>

<template>
  <span class="text-red-300">about {{ $route.params.id }}</span>
  <span class="text-red-300">about {{ API_URL }}</span>
</template>
