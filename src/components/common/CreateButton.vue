<template>
    <base-button>
        <template #icon>
            <base-icon name='plus'></base-icon>
        </template>
        <slot></slot>
    </base-button>
</template>

<script>
import BaseButton from '@/components/common/BaseButton';
import BaseIcon from '@/components/common/BaseIcon';

export default {
    name: 'CreateButton',
    components: {BaseIcon, BaseButton}

};
</script>

<style scoped>

</style>
