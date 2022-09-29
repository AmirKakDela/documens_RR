<template>
    <div class='document-actions'>
        <base-button :onlyIcon='true' class='edit'>
            <template #icon>
                <base-icon name='edit'></base-icon>
            </template>
        </base-button>
        <base-button :onlyIcon='true' class='trash'>
            <template #icon>
                <base-icon name='trash'></base-icon>
            </template>
        </base-button>
        <base-button :onlyIcon='true' class='dnd'>
            <template #icon>
                <base-icon name='dnd'></base-icon>
            </template>
        </base-button>
    </div>
</template>

<script>
import BaseButton from '@/components/common/BaseButton';
import BaseIcon from '@/components/common/BaseIcon';

export default {
    name: 'DocumentActions',
    components: {BaseIcon, BaseButton}
};
</script>

<style scoped lang='less'>
.document-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 22px;

    .base-btn {
        border: none;

        &:hover {
            box-shadow: none;
        }

        &.dnd {
            &:active {
                position: static;
            }

        }
    }
}
</style>
