import {apiPath} from '@/config';
import {httpService} from '@/services/http.service';

export class DocumentsService {
    api = apiPath + 'documents';

    constructor() {
    }

    fetchDocuments() {
        return httpService.get(this.api).then(data => {
            return data[0];
        });
    }
}
