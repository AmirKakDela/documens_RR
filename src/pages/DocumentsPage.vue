<template>
    <v-header></v-header>
    <input-search v-model:value='inputValue'></input-search>
    <!--  todo убрать v-if="documents"-->
    <documents-list v-model:documents='documents' v-if='documents' :inputValue='inputValue'></documents-list>
</template>

<script>
import VHeader from '@/components/VHeader';
import InputSearch from '@/components/InputSearch';
import DocumentsList from '@/components/DocumentsList';
import {DocumentsService} from '@/services/documents.service';

const documentsService = new DocumentsService();
export default {
    name: 'DocumentsPage',
    components: {VHeader, InputSearch, DocumentsList},
    data() {
        return {
            documents: null,
            inputValue: ''
        };
    },
    methods: {
        async getDocuments() {
            this.documents = await documentsService.fetchDocuments();
        }
    },
    mounted() {
        this.getDocuments();
    }
};
</script>

<style scoped>

</style>
