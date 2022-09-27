<template>
  <v-header></v-header>
  <input-search></input-search>
  <documents-list v-model:documents="documents" v-if="documents"></documents-list>
</template>

<script>
import VHeader from "@/components/VHeader";
import InputSearch from "@/components/InputSearch";
import DocumentsList from "@/components/DocumentsList";
import {DocumentsService} from "@/services/documents.service";

const documentsService = new DocumentsService();
export default {
  name: "DocumentsPage",
  components: {VHeader, InputSearch, DocumentsList},
  data() {
    return {
      documents: null
    }
  },
  methods: {
    async getDocuments() {
      this.documents = await documentsService.fetchDocuments();
      console.log(this.documents)
    }
  },
  mounted() {
    this.getDocuments();
  }
}
</script>

<style scoped>

</style>
