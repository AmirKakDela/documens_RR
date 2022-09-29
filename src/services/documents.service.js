import {apiPath} from '@/config';
import {httpService} from '@/services/http.service';

export class DocumentsService {
    api = apiPath + 'documents';

    constructor() {}

    fetchDocuments() {
        return httpService.get(this.api).then((data) => {
            const result = {};
            result.children = data[0].children.map((child) => ({...child, categoryId: null}));
            result.categories = data[0].categories.map((cat) => ({
                ...cat,
                children: cat.children.map((child) => ({...child, categoryId: cat.id}))
            }));
            return result;
        });
    }
}
