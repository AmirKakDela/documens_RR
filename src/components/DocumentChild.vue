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
    padding: 6px;
    border: 1px solid black;
}

</style>
