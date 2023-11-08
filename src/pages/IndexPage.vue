<template>
<q-page padding class="flex flex-center">
    Hellow World

    <pre>{{ $store.state }}</pre>
    
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
