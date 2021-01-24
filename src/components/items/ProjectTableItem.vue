<template>
    <tr>
        <td>{{ project.name }}</td>
        <td>{{ project.totalSpend }}</td>
        <td>{{ project.lastUsed }}</td>
        <td>
            <button 
                class="buttonSecondary" 
                @click="editProject(project.id)"
            >Edit</button></td>
    </tr>
</template>

<script>
export default {
  name: 'ProjectTableItem',
  props: {
      project: {
          type: Object,
          required: true
      }
  },
  methods: {
      editProject(id) {
          this.$emit('edit', id)
      }
  }
}
</script>