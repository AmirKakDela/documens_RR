<template>
    <div class='document-list'>
        <div class='document-list__category'>
            <document-category
                v-for='category in filteredDocuments.categories'
                :key='category.id'
                :category='category'
                @dropChild='onDropChild'>
            </document-category>
        </div>
        <div class='document-list__child'>
            <document-child
                v-for='child in filteredDocuments.children'
                :key='child.id'
                :child='child'
                @dropChild='onDropChild'
            >
            </document-child>
        </div>
    </div>
</template>

<script>
import DocumentCategory from '@/components/DocumentCategory';
import DocumentChild from '@/components/DocumentChild';
import {getCopy} from '@/utils/utils';

export default {
    name: 'document-list',
    components: {DocumentChild, DocumentCategory},
    props: {
        documents: Object,
        inputValue: String
    },
    emits: ['update:documents'],
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
                    const includesCategory = category.name.toLowerCase().includes(this.inputValue.toLowerCase());
                    if (includesCategory) return true;
                    const includesChildrenOfCategory = this.filterChildren(category.children).length;
                    if (!includesCategory && includesChildrenOfCategory) {
                        category.children = this.filterChildren(category.children);
                        return true;
                    }
                    return false;
                });
        },
        filterChildren(children) {
            return children.filter(child => {
                return child.name.toLowerCase().includes(this.inputValue.toLowerCase());
            });
        },
        getCopyDocuments() {
            return getCopy(this.documents);
        },
        onDropChild(dragItem, dropItem) {
            const copyDocuments = this.getCopyDocuments();
            let dragCategory = null;
            let dropCategory = null;

            if (dragItem.categoryId !== null) {
                dragCategory = copyDocuments.categories.find(item => item.id === dragItem.categoryId);
            }
            if (dropItem.categoryId !== null) {
                dropCategory = copyDocuments.categories.find(item => item.id === dropItem.categoryId);
            }

            if (dragItem.categoryId === dropItem.categoryId) {
                if (!dragCategory && !dropCategory) {
                    const dragIndex = copyDocuments.children.findIndex(item => item.id === dragItem.id);
                    const dropIndex = copyDocuments.children.findIndex(item => item.id === dropItem.id);
                    [copyDocuments.children[dragIndex], copyDocuments.children[dropIndex]] = [copyDocuments.children[dropIndex], copyDocuments.children[dragIndex]];
                } else if (dragCategory && dropCategory) {
                    const category = dragCategory = dropCategory;
                    const dragIndex = dragCategory.children.findIndex(item => item.id === dragItem.id);
                    const dropIndex = dropCategory.children.findIndex(item => item.id === dropItem.id);
                    [category.children[dragIndex], category.children[dropIndex]] = [category.children[dropIndex], category.children[dragIndex]];
                }
            } else {
                if (dragCategory && !dropCategory) {
                    //...
                }
            }
            this.$emit('update:documents', copyDocuments);
        }
    },
    watch: {
        inputValue() {
            this.filterDocuments();
        },
        documents: {
            handler() {
                this.filteredDocuments = this.getCopyDocuments();
                this.filterDocuments();
            },
            deep: true
        }
    },
    mounted() {
        this.filteredDocuments = this.getCopyDocuments();
    }
};
</script>

<style scoped lang='less'>
.document-list {
    &__child {
        margin-top: 16px;
    }
}

</style>
