<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">
          WorkTracker
        </div>
        <div v-if="user">
          {{ user.nickaname }}
        </div>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { translate } from "./translate/translations.js";

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user
    }
  },
  mounted() {
      translate()
  }
}
</script>

<style lang="scss">
  @import "style/style.scss";
</style>
