<template>
    <div class="bg-indigo-300">
        <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-500 sm:text-4xl">
                <span class="block">Laravel + Vue 3 + Tailwind 3</span>
                <span class="block">Boilerplate</span>
            </h2>
            <a href="#" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-50 sm:w-auto"> Login </a>
        </div>
    </div>
</template>
<script>

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default {
    name: "Home",
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
    },
    setup() {
        return {
            navigation,
        }
    },
    created() {

    },
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
