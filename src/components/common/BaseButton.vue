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
    transition: .15s ease-in-out all;

    &__text {
        color: #000;
        font-size: 12px;
    }

    &:hover {
        border-color: #0066FF;
        box-shadow: 0 5px 12px -4px rgba(39, 73, 99, 0.11) inset;
    }

    &:active {
        position: relative;
        top: 1px;
    }
}

.only-icon {
    padding: 0;

    .base-btn__text {
        display: none;
    }
}
</style>
