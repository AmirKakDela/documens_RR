<template>
    <div class='document document-child'
         @drop='onDrop($event, child)'
         @dragenter.prevent='onDragOver($event)'
         @dragleave='onDragLeave($event)'
         @dragover.prevent
    >
        <div class='document__main'>
            <div class='document__name'>{{ child.name }}</div>
            <div class='document__required' v-if='child.required'>Обязательный</div>
            <div class='document__description'>{{ child.description }}</div>
        </div>
        <div class='document__actions'>
            <document-actions :item='child'></document-actions>
        </div>
        <div class='line'></div>
    </div>
</template>

<script>
import DocumentActions from '@/components/DocumentActions';
import {Draggable} from '@/services/draggable';

const draggable = new Draggable();

export default {
    name: 'document-child',
    components: {DocumentActions},
    props: {
        child: Object
    },
    emits: ['dropChild'],
    methods: {
        onDragStart(e, child) {
            e.dataTransfer.setData('dragItem', JSON.stringify(child));
        },
        onDrop(e, dropItem) {
            const dragItem = JSON.parse(e.dataTransfer.getData('dragItem'));
            e.target.classList.remove('droppable');
            this.$emit('dropChild', dragItem, dropItem);
        },
        onDragOver(e) {
            draggable.onDragOver(e);
        },
        onDragLeave(e) {
            draggable.onDragLeave(e);
        }
    }
};
</script>

<style lang='less'>
.document {
    &.document-child {
        height: 35px;
    }
}


</style>
