<template>
    <div class='document-list'>
        <div class='document-list__category'>
            <document-category
                v-for='category in documents.categories'
                :key='category.id'
                :category='category'>
            </document-category>
        </div>
        <div class='document-list__child'>
            <document-child
                v-for='child in documents.children'
                :key='child.id'
                :child='child'>
            </document-child>
        </div>
    </div>
</template>

<script>
import DocumentCategory from '@/components/DocumentCategory';
import DocumentChild from '@/components/DocumentChild';

export default {
    name: 'document-list',
    components: {DocumentChild, DocumentCategory},
    props: {
        documents: Object,
        inputValue: String
    },
    methods: {
        filterDocuments() {

        }
    },
    watch: {
        inputValue() {
            console.log('change inputValue in documentsList');
        }
    }
};
</script>

<style scoped lang='less'>
.document-list {
    margin-top: 20px;

    &__child {
        margin-top: 10px;
    }
}

</style>
