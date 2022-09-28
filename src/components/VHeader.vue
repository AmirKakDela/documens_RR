<template>
    <div class='header'>
        <h1 class='title'>Документы</h1>
        <div class='header__actions'>
            <v-bookmark></v-bookmark>
            <create-button>Новый тип</create-button>
            <create-button>Новый документ</create-button>
        </div>
    </div>
</template>

<script>
import VBookmark from '@/components/common/VBookmark';
import CreateButton from '@/components/common/CreateButton';

export default {
    name: 'v-header',
    components: {CreateButton, VBookmark}
};
</script>

<style scoped lang='less'>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;

    &__actions {
        display: flex;
        gap: 10px;
    }
}

.title {
    font-size: 22px;
    font-weight: 500;
}
</style>
