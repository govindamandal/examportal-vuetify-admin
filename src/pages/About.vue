<template>
    <Authenticated>
        <h1 class="text-red">About</h1>
    </Authenticated>
</template>

<script lang="ts">
import Authenticated from '@/layouts/Authenticated.vue';
import { ref, reactive } from 'vue';

export default {
    setup(props, context) {
        const featureRef = ref('value');
        const featureState = reactive({ property: 'value' });
        return {
            featureRef,
            featureState
        };
    },
    components: { Authenticated }
}
</script>

<style lang="scss" scoped>
.text-red {
    color: red;
}
</style>