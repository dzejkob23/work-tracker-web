<template>
  <section class="card">
    <h2>Měření</h2>
    <h3>Sessions</h3>
    <table>
      <tr>
        <th>Project</th>
        <th>Start Date</th>
        <th>Duration</th>
      </tr>
      <SessionTableItem 
        v-for="session in state.stats.sessions" 
        :key="session.id" 
        :session="session" 
        @edit="editSession" 
      />
    </table>
    <h3>Projects</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Total Spend</th>
        <th>Last Used</th>
      </tr>
      <ProjectTableItem 
        v-for="project in state.stats.projects" 
        :key="project.id" 
        :project="project" 
        @edit="editProject"
      />
    </table>
  </section>
</template>

<script>
import SessionTableItem from "../items/SessionTableItem";
import ProjectTableItem from "../items/ProjectTableItem";

import { reactive } from 'vue';

export default {
  name: 'StatisticCard',
  components: { SessionTableItem, ProjectTableItem },
  setup() {
    const state = reactive({
      stats: {
        sessions: [
            {id: 0, project: "Testing", startDate: "12.5. 12:30", duration: ""},
            {id: 1, project: "Testing", startDate: "12.5. 08:45", duration: "4h"}
          ],
          projects: [
            {id: 3, name: "Testing", totalSpend: "2d 13h", lastUsed: "today"},
            {id: 5, name: "Testing", totalSpend: "2d 13h", lastUsed: "today"},
            {id: 7, name: "Testing", totalSpend: "2d 13h", lastUsed: "today"}
          ]
      }
    })

    function editSession(id) {
      console.log(`Edit session: #${id}`);
    }

    function editProject(id) {
      console.log(`Edit project: #${id}`);
    }

    return {
      state,
      editSession,
      editProject
    }
  }
}
</script>
