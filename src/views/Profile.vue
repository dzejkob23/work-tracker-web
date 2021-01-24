<template>
    <div>
        <h1>Username: {{ state.user.nickname }}</h1>
        <h2>UserID: {{ userId }}</h2>
    </div>
</template>

<script>
import { users } from "../assets/users";

import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'Profile',
    setup() {
        const route = useRoute();
        const userId = computed(() => route.params.userId);
        const state = reactive({
            user: users.find(({ id }) => id == userId.value)
        })

        return {
            state,
            userId
        }
    }
}
</script>