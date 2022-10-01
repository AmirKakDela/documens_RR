<template>
    <div class='document-actions' @dragenter.prevent='onDragOver($event)'>
        <base-button :onlyIcon='true' class='edit'>
            <template #icon>
                <base-icon name='edit'></base-icon>
            </template>
        </base-button>
        <base-button :onlyIcon='true' class='trash'>
            <template #icon>
                <base-icon name='trash'></base-icon>
            </template>
        </base-button>
        <base-button :onlyIcon='true' class='dnd'
                     draggable='true'
                     @dragstart='onDragStart($event)'
                     @drag='onDrag($event)'
                     @dragend='onDragEnd($event)'
        >
            <template #icon>
                <base-icon name='dnd'></base-icon>
            </template>
        </base-button>
    </div>
</template>

<script>
import BaseButton from '@/components/common/BaseButton';
import BaseIcon from '@/components/common/BaseIcon';
import {Draggable} from '@/services/draggable';
const draggable = new Draggable();

export default {
    name: 'DocumentActions',
    components: {BaseIcon, BaseButton},
    props: {
        item: Object
    },
    methods: {
        onDragStart(e) {
            draggable.onDragStart(e, this.item)
        },
        onDrag(e) {
            draggable.onDrag(e)
        },
        onDragEnd(e) {
            draggable.onDragEnd(e)
        },
        onDragOver(e) {
        }
    }
};
</script>

<style scoped lang='less'>
.document-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 22px;

    .base-btn {
        border: none;

        &:hover {
            box-shadow: none;
        }

        &.dnd {
            cursor: grab;
            &:active {
                position: static;
            }

        }
    }
}
</style>
