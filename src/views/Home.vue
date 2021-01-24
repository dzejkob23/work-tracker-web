<template>
  <main>
    <div class="flex-horizontal">
      <section class="card">
        Ahoj {{ state.user.username }}. Vítej na našich stránkách! <br>
        Budeš mít označení: <strong>{{ fullName }}</strong>. <br>
        <strong>Clicker counter: </strong> {{ state.user.clickCounter }} <br>
        <button class="buttonPrimary" @click="increaseUserCounter">Clik on ME!</button>
      </section>
      <TrackingCard />
      <ProfileCard />
      <StatisticCard />
    </div>
  </main>
</template>

<script>
import ProfileCard from "../components/cards/ProfileCard";
import StatisticCard from "../components/cards/StatisticCard";
import TrackingCard from "../components/cards/TrackingCard";

import { reactive, computed } from 'vue';

export default {
  name: 'Home',
  components: { ProfileCard, StatisticCard, TrackingCard },
  setup() {
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: "Karel",
        clickCounter: 0
      }
    })

    const fullName = computed(() => `${state.user.username}_${state.user.id}`)

    function increaseUserCounter() {
      state.user.clickCounter++;
      state.followers++;
    }

    return {
      state,
      fullName,
      increaseUserCounter
    }
  },
  watch: {
    followers(newValue, oldValue) {
      if (newValue > oldValue) {
        console.log("This method watch variable from function name and call this on every time the value has been change.");
      }
    }
  },
  mounted() {
    console.log("This method runs on start.");
  }
}
</script>
