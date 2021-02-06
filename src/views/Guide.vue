<template>
    <div class="Guide">
        <main>
            <div class="flex-vertical">
                <h1 trans="home-page-title"/>
                <p trans="home-page-subtitle"/>
                <form action="/register">
                    <input class="buttonPrimary" trans="home-form-button-register" type="submit">
                </form>
                <form action="/login">
                    <input class="buttonPrimary" trans="home-form-button-login" type="submit">
                </form>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name: 'Guidepost',
    setup() {
        // todo - doplnit
    }
}
</script>