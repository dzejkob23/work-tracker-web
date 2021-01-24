<template>
  <section class="card">
    <h2>Profil</h2>
    <p>{{ user.nickname }} <span v-if="user.isPremium">⭐️</span><span v-else>🍎</span></p>
    <button class="buttonPrimary">Logout</button>
  </section>
</template>

<script>
export default {
  name: 'ProfileCard',
  data() {
    return {
      user: {
        nickname: "Jakub",
        avatar: "/Users/zikaj/Google Drive/Fotky Google/ProfilePhotos/dzejkob23.gif",
        isPremium: true
      }
    }
  }
}
</script>
