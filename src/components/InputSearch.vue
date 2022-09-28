<template>
    <div class='input-search__wrapper'>
        <input type='text' placeholder='Поиск' class='input-search' :value='value' @input='updateInput'>
        <button class='input-search__clear' v-if='value' @click='clear'>X</button>
    </div>
</template>

<script>
export default {
    name: 'input-search',
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
        background-color: red;
    }

    &:focus {
        border-bottom-color: #0066FF;
    }
}

.input-search__wrapper {

}
</style>
