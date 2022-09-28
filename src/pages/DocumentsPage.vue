<template>
    <document-header></document-header>
    <input-search v-model:value='inputValue' style='margin-bottom: 20px;'></input-search>
    <!--  todo убрать v-if="documents"-->
    <documents-list v-model:documents='documents' v-if='!loading' :inputValue='inputValue'></documents-list>
    <div v-else>loading...</div>
</template>

<script>
import DocumentHeader from '@/components/DocumentHeader';
import InputSearch from '@/components/common/InputSearch';
import DocumentsList from '@/components/DocumentsList';
import {DocumentsService} from '@/services/documents.service';

const documentsService = new DocumentsService();
export default {
    name: 'DocumentsPage',
    components: {DocumentHeader, InputSearch, DocumentsList},
    data() {
        return {
            documents: null,
            inputValue: '',
            loading: true
        };
    },
    methods: {
        async getDocuments() {
            this.loading = true;
            this.documents = await documentsService.fetchDocuments();
            this.loading = false;
        }
    },
    mounted() {
        this.getDocuments();
    }
};
</script>

<style scoped>

</style>
