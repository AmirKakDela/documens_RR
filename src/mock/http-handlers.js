import {httpService} from '@/services/http.service';
import documentsMock from './documents.json';

httpService.addHandler('my-api/documents',
    () => delay().then(() => Promise.resolve(documentsMock)));

function delay(ms = 700) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
