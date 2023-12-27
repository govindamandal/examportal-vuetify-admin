<template>
    <Authenticated>
        <h1>Contact</h1>
    </Authenticated>
</template>

<script lang="ts">
import Authenticated from '@/layouts/Authenticated.vue';
import { ref, reactive } from 'vue';

export default {
    components: { Authenticated },
    setup(props, context) {
        const featureRef = ref('value');
        const featureState = reactive({ property: 'value' });

        return {
            featureRef,
            featureState
        }
    }
}
</script>

<style lang="scss" scoped></style>