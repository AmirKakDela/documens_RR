<template>
    <div class='input-search__wrapper'>
        <input type='text' placeholder='Поиск' class='input-search' :value='value' @input='updateInput'>
        <base-button class='input-search__clear' :onlyIcon='true' v-if='value' @click='clear'>
            <template #icon>
                <base-icon name='cross'></base-icon>
            </template>
        </base-button>
    </div>
</template>

<script>
import BaseIcon from '@/components/common/BaseIcon';
import BaseButton from '@/components/common/BaseButton';

export default {
    name: 'input-search',
    components: {BaseButton, BaseIcon},

    props: {
        value: String
    },
    methods: {
        clear() {
            this.$emit('update:value', '');
        },
        updateInput(event) {
            this.$emit('update:value', event.target.value);
        }
    }
};
</script>

<style scoped lang='less'>
.input-search {
    width: 564px;
    padding: 10px;
    border-width: 0;
    border-bottom: 1px solid #BFC9E0;
    outline: none;
    font-size: 15px;

    &::placeholder {
        font-style: italic;
        font-size: 15px;
    }

    &__clear {
        position: absolute;
        right: 0;
        top: 25%;
        padding: 5px;
        border: none;
    }

    &:focus {
        border-bottom-color: #0066FF;
    }
}

.input-search__wrapper {
    width: 564px;
    position: relative;
}
</style>
