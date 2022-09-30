<template>
    <div
        class='document document-category'
        draggable='true'
        @dragstart='onDragStart($event, category)'
        @dragend='onDragEnd($event)'
    >
        <div class='document__main'>
            <arrow-button :toTop='isOpen' @click='open' :disabled='!category.children.length'></arrow-button>
            <div class='document__name'>{{ category.name }}</div>
            <div class='document__description'>{{ category.description }}</div>
        </div>
        <div class='document__actions'>
            <document-actions></document-actions>
        </div>
        <div class='drop-zone' @drop='onDrop($event, category)'
             @dragover.prevent
             @dragenter.prevent='onDragOver($event)'
             @dragleave='onDragLeave($event)'>
            <div class='line'></div>
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
            e.target.classList.add('draggable')
            e.dataTransfer.setData('dragItem', JSON.stringify(category));
        },
        onDrop(e, dropItem) {
            const dragItem = JSON.parse(e.dataTransfer.getData('dragItem'));
            e.target.classList.remove('droppable');
            this.$emit('drop', dragItem, dropItem);
        },
        onDragOver(e) {
            e.target.classList.add('droppable');
        },
        onDragLeave(e) {
            e.target.classList.remove('droppable');
        },
        onDragEnd(e) {
            e.target.classList.remove('draggable');
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
    position: relative;
    z-index: 10;

    &.draggable {
        opacity: 0.2;
    }

    .drop-zone {
        height: 50%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

        &.droppable {
            .line {
                opacity: 1;
            }
        }
    }

    .line {
        height: 5px;
        background-color: #0066FF;
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        opacity: 0;
        transition: .15s ease-in-out all;
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
