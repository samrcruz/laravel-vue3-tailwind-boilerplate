<template>
<!--    <div class="w-full h-full">-->
<!--        <router-view> </router-view>-->
<!--    </div>-->
    <div class="flex flex-col h-screen justify-between">
        <header class="h-10 bg-red-500">Header</header>
        <main class="mb-auto h-10 bg-green-500">
            <router-view> </router-view>
        </main>
        <footer class="h-10 bg-blue-500">Footer</footer>
    </div>
</template>

<script>
export default {
    created() {

    }
}
</script>
