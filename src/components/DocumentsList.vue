<template>
    <div class='document-list'>
        <div class='document-list__category'>
            <document-category
                v-for='category in filteredDocuments.categories'
                :key='category.id'
                :category='category'>
            </document-category>
        </div>
        <div class='document-list__child'>
            <document-child
                v-for='child in filteredDocuments.children'
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
    data() {
        return {
            filteredDocuments: {categories: [], children: []}
        };
    },
    methods: {
        filterDocuments() {
            /*
            Фильтрация работает следующим образом, согласно ТЗ:
                1. фильтруем категории - если есть, то возвращаем их и не фильтруем детей категории
                2. если отфильтрованных категорий не оказалось, то возвращаем категорию в том случае,
            если оказались дети подходящие под поисковую строку. В свою очередь в таком случае,
            фильтруются дети конкретной категории.
            */
            this.filteredDocuments = this.getCopyDocuments();
            this.filteredDocuments.categories = this.filteredDocuments.categories
                .filter(category => {
                    const includesCategory = category.name.includes(this.inputValue);
                    const includesChildrenOfCategory = this.filterChildren(category.children).length;
                    if (includesCategory) return true;
                    else if (!includesCategory && includesChildrenOfCategory) {
                        category.children = this.filterChildren(category.children);
                        return true;
                    }
                    return false;
                });
        },
        filterChildren(children) {
            return children.filter(child => {
                return child.name.includes(this.inputValue);
            });
        },
        getCopyDocuments() {
            // в идеале использовать Lodash или рекурсивную функцию копирования
            return JSON.parse(JSON.stringify(this.documents));
        }
    },
    watch: {
        inputValue() {
            this.filterDocuments();
        }
    },
    mounted() {
        this.filteredDocuments = this.getCopyDocuments();
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
