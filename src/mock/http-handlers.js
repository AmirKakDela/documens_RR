import {httpService} from "@/services/http.service";
import documentsMock from './documents.json';

httpService.addHandler('my-api/documents', () => Promise.resolve(documentsMock))

