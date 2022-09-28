<template>
    <div class='document-child'>{{ child.name }}</div>
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
    padding: 0 6px;
    border: 1px solid #DFE4EF;
    width: 1160px;
    height: 35px;
    display: flex;
    align-items: center;
}

</style>
