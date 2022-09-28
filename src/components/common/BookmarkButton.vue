<template>
    <base-button class='bookmark-btn' :onlyIcon='true'>
        <template #icon>
            <base-icon name='bookmark'></base-icon>
        </template>
    </base-button>
</template>

<script>
import BaseIcon from '@/components/common/BaseIcon';
import BaseButton from '@/components/common/BaseButton';

export default {
    name: 'bookmark-button',
    components: {BaseIcon, BaseButton}
};
</script>

<style scoped>
.bookmark-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>
