<template>
    <tr>
        <td>{{ session.project }}</td>
        <td>{{ session.startDate }}</td>
        <td>{{ session.duration }}</td>
        <td v-if="session.duration === ''">
            <button 
                class="buttonSecondary" 
                @click="editSession(session.id)"
            >Edit</button>
        </td>
        <td v-else class="runnig">running</td>
    </tr>
</template>

<script>
export default {
  name: 'SessionTableItem',
  props: {
      session: {
          type: Object,
          required: true
      }
  },
  methods: {
      editSession(id) {
          this.$emit('edit', id)
      }
  }
}
</script>