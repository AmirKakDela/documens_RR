<template>
    <button class='base-btn' :class="{'only-icon': onlyIcon}">
        <slot name='icon'></slot>
        <span class='base-btn__text'>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        onlyIcon: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped lang='less'>
.base-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #D3D8DF;
    gap: 10px;
    border-radius: 50px;
    padding: 0 10px;
    cursor: pointer;

    &__text {
        color: #000;
        font-size: 12px;
    }
}

.only-icon {
    padding: 0;

    .base-btn__text {
        display: none;
    }
}
</style>
