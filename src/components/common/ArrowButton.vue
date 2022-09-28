<template>
    <base-button :onlyIcon='true' class='arrow-btn' :class="{'to-top': toTop}">
        <template #icon>
            <base-icon name='arrow'></base-icon>
        </template>
    </base-button>
</template>

<script>
import BaseButton from '@/components/common/BaseButton';
import BaseIcon from '@/components/common/BaseIcon';

export default {
    name: 'ArrowButton',
    components: {BaseIcon, BaseButton},
    props: {
        toTop: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped lang='less'>
.arrow-btn {
    height: 22px;
    width: 22px;

    &.to-top {
        transform: rotate(180deg);
    }
}

</style>
