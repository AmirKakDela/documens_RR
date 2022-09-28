<template>
    <div class='document-child'>
        <div class='document-child__main'>
            <div class='document-child__name'>{{ child.name }}</div>
            <div class='document-child__required' v-if='child.required'>Обязательный</div>
            <div class='document-child__description description'>{{ child.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'document-child',
    props: {
        child: Object
    }
};
</script>

<style scoped lang='less'>

.document-child {
    padding: 0 16px;
    border: 1px solid #DFE4EF;
    width: 1160px;
    height: 35px;
    display: flex;
    align-items: center;
    gap: 15px;

    &__main {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &__name {
        font-size: 13px;
        font-weight: 400;
    }

    &__required {
        color: #FF238D;
        font-size: 11px;
    }
}

</style>
