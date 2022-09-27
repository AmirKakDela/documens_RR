<template>
  <div class="header">
    <h2>Документы</h2>
    <div class="header__actions">
      <button>закладка</button>
      <button>Новый тип</button>
      <button>Новый документ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>
