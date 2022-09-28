<template>
    <div class='document-category'>
        <button @click='isOpen = !isOpen'>open</button>
        <div class='document-category__name'>{{ category.name }}</div>
        <div class='document-category__category'>{{ category.description }}</div>
    </div>
    <template v-if='isOpen'>
        <document-child v-for='child in category.children' :key='child.id' :child='child'
                        class='document-category__child'
        ></document-child>
    </template>
</template>

<script>
import DocumentChild from '@/components/DocumentChild';

export default {
    name: 'document-category',
    components: {DocumentChild},
    props: {
        category: Object
    },
    data() {
        return {
            isOpen: true
        };
    }
};
</script>

<style scoped lang='less'>
.document-category {
    border: 1px solid black;
    width: 1160px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    &__name {
        font-size: 15px;
        color: #000;
        font-weight: 600;
    }

    &__child {
        margin-left: 15px;
    }
}

</style>
