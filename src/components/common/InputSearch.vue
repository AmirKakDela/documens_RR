<template>
    <div class='input-search__wrapper'>
        <label class='input-search__search' for='input-search'>
            <base-icon name='search'></base-icon>
        </label>
        <input type='text' placeholder='Поиск' class='input-search' :value='value' @input='updateInput'
               id='input-search'>
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
    border-width: 0;
    border-bottom: 1px solid #BFC9E0;
    outline: none;
    font-size: 15px;
    padding: 10px 10px 10px 25px;

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

        &:hover {
            box-shadow: none;
        }

        &:active {
            position: absolute;
            top: 25%;
        }
    }

    &__search {
        position: absolute;
        left: 0;
        top: 25%;
        cursor: text;
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
