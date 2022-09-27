<template>
    <div class='document-category'>
        <button @click='isOpen = !isOpen'>open</button>
        {{ category.title }}
        {{ category.description }}
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
    padding: 10px;
    border: 1px solid black;

    &__child {
        margin-left: 10px;
    }
}

</style>
