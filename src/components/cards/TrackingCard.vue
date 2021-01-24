<template>
  <section class="card">
    <h2>Měření</h2>
    <p>00h 00m 00s</p>
    <form>
      <label for="selectProject">Select project: </label>
      <select id="selectProject" v-model="state.selectedProjectId">
        <option value="option.id" v-for="(option, index) in state.projects" :key=index>
          {{ option.name }}
        </option>
      </select>
    </form>
    
    <button id="buttonStart" class="buttonPrimary"
    v-if="state.trackingState=='SAVE' || state.trackingState=='RESTART' || state.trackingState=='PAUSE'"
    @click="state.trackingState='START'">Start</button>
    
    <button id="buttonPause" class="buttonPrimary"
    v-if="state.trackingState=='START'"
    @click="state.trackingState='PAUSE'">Pause</button>
    
    <button id="buttonSave" class="buttonPrimary"
    v-if="state.trackingState=='PAUSE' || state.trackingState=='START'"
    @click="state.trackingState='SAVE'">Save</button>
    
    <button id="buttonRestart" class="buttonPrimary"
    v-if="state.trackingState=='START' || state.trackingState=='PAUSE'"
    @click="state.trackingState='RESTART'">Restart</button>

  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'TrackingCard',
  setup() {
    const state = reactive({
      selectedProjectId: -1, // here is selected project ID by "v-model" in tag "<select>"
      trackingState: "RESTART",
      projects: [
        { id: 0, name: "Testing" },
        { id: 1, name: "Microsoft" },
        { id: 2, name: "Q&A" }
      ]
    })
    return {
      state
    }
  },
  watch: {
    trackingState(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    }
  },
  methods: {
    // empty
  }
}
</script>
