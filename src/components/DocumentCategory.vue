<template>
    <div class='document-category'>
        <div class='document-category__main'>
            <arrow-button :toTop='isOpen' @click='isOpen = !isOpen'></arrow-button>
            <div class='document-category__name'>{{ category.name }}</div>
            <div class='document-category__description'>{{ category.description }}</div>
        </div>
    </div>
    <template v-if='isOpen'>
        <document-child v-for='child in category.children' :key='child.id' :child='child'
                        class='document-category__child'
        ></document-child>
    </template>
</template>

<script>
import DocumentChild from '@/components/DocumentChild';
import ArrowButton from '@/components/common/ArrowButton';

export default {
    name: 'document-category',
    components: {ArrowButton, DocumentChild},
    props: {
        category: Object
    },
    data() {
        return {
            isOpen: true
        };
    },
    computed: {
        arrowStyle: {
            transform: 'rotate(90deg)'
        }
    }
};
</script>

<style scoped lang='less'>
.document-category {
    border: 1px solid #DFE4EF;
    width: 1160px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    &__main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }

    &__description {
        color: #8E9CBB;
        font-size: 11px;
    }

    &__name {
        font-size: 15px;
        color: #000;
        font-weight: 500;
    }

    &__child {
        margin-left: 15px;
        width: 1145px;
    }
}

</style>
