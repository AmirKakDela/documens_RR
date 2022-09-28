<template>
    <div class='document-category'>
        <div class='document-category__main'>
            <arrow-button :toTop='isOpen' @click='open' :disabled='!category.children.length'></arrow-button>
            <div class='document-category__name'>{{ category.name }}</div>
            <div class='document-category__description description'>{{ category.description }}</div>
        </div>
        <document-actions></document-actions>
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
import DocumentActions from '@/components/DocumentActions';

export default {
    name: 'document-category',
    components: {DocumentActions, ArrowButton, DocumentChild},
    props: {
        category: Object
    },
    data() {
        return {
            isOpen: true
        };
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style lang='less'>
.document-category {
    border: 1px solid #DFE4EF;
    width: 1160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    gap: 10px;

    &__main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }

    &__name {
        font-size: 15px;
        color: #000;
        font-weight: 500;
        white-space: nowrap;
    }


    &__child {
        margin-left: 15px;
        width: 1145px;
    }
}


.description {
    color: #77829f;
    font-size: 11px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    background-image: linear-gradient(to right, currentColor 0%, currentColor 98%, rgba(0, 0, 0, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
