<template>
    <div
        class='document document-category'
        draggable='true'
        @dragstart='onDragStart($event, category)'
        @drop='onDrop($event, category)'
        @dragover.prevent
        @dragenter.prevent
    >
        <div class='document__main'>
            <arrow-button :toTop='isOpen' @click='open' :disabled='!category.children.length'></arrow-button>
            <div class='document__name'>{{ category.name }}</div>
            <div class='document__description'>{{ category.description }}</div>
        </div>
        <div class='document__actions'>
            <document-actions></document-actions>
        </div>
    </div>
    <template v-if='isOpen'>
        <document-child v-for='child in category.children' :key='child.id' :child='child'
                        class='document-category__child' @dropChild='onDropChild'
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
    emits: ['dropChild', 'drop'],
    data() {
        return {
            isOpen: true
        };
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        },
        onDropChild(dragItem, dropItem) {
            this.$emit('dropChild', dragItem, dropItem);
        },
        onDragStart(e, category) {
            e.dataTransfer.setData('dragItem', JSON.stringify(category));
        },
        onDrop(e, dropItem) {
            const dragItem = JSON.parse(e.dataTransfer.getData('dragItem'));
            this.$emit('drop', dragItem, dropItem);
        }
    }
};
</script>

<style lang='less'>
.document {
    border: 1px solid #DFE4EF;
    width: 1160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    gap: 10px;

    &.draggable {
        box-shadow: 0 3px 16px rgba(0, 102, 255, 0.7);
    }

    &.droppable {
        border-bottom: 2px solid blue;
    }

    &__main {
        display: flex;
        align-items: center;
        gap: 15px;
        width: 90%;
    }

    &__actions {
        width: 10%;
    }

    &__name {
        font-size: 15px;
        color: #000;
        font-weight: 500;
        white-space: nowrap;
        //todo добавить overflow
    }

    &__required {
        color: #FF238D;
        font-size: 11px;
    }

    &__description {
        color: #77829f;
        font-size: 11px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: clip;
        background-image: linear-gradient(to right, currentColor 0%, currentColor 98%, rgba(0, 0, 0, 0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.document-category {
    &__child {
        margin-left: 15px;
        width: 1145px !important;
    }
}


</style>
