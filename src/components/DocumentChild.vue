<template>
    <div class='document document-child'>
        <div class='document__main'>
            <div class='document__name'>{{ child.name }}</div>
            <div class='document__required' v-if='child.required'>Обязательный</div>
            <div class='document__description'>{{ child.description }}</div>
        </div>
        <div class='document__actions'>
            <document-actions></document-actions>
        </div>
    </div>
</template>

<script>
import DocumentActions from '@/components/DocumentActions';

export default {
    name: 'document-child',
    components: {DocumentActions},
    props: {
        child: Object
    }
};
</script>

<style scoped lang='less'>

.document-child {
    height: 35px;
}

</style>
