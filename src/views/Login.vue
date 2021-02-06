<template>
    <div class="Login">
        <main>
            <div class="flex-vertical">
                <h1 trans="login-page-title"/>
                <!-- todo - doplnit action -->
                <form action="">
                    <p>
                        <span trans="login-form-username"/>
                        <input type="text" name="username" id="username">
                    </p>
                    <p>
                        <span trans="login-form-password"/>
                        <input type="text" name="password" id="password">
                    </p>
                    <p>
                        <span trans="login-form-username"/>
                        <input class="buttonPrimary" type="submit" trans="login-form-button">
                    </p>
                </form>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name: 'Login',
    setup() {
        // todo - doplnit
    }
}
</script>