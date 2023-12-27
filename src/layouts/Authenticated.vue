<template>
    <v-layout class="rounded rounded-md">
        <v-app>
            <Navbar title="Exam App" @expand="expand = !expand" />
            <Sidebar :expand="expand" />
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <slot></slot>
                <Footer />
            </v-main>
        </v-app>
    </v-layout>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue'
export default {
    name: 'Authenticated',
    components: { Sidebar, Navbar, Footer },
    data() {
        return {
            expand: false
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>