class HttpService {
    httpHandlers = [];

    constructor() {
    }

    get(api) {
        return this.makeRequest({
            api,
            method: 'GET'
        }).then(response => {
            return response.data;
        });
    }

    create(api, body) {
        return this.makeRequest({
            api,
            method: 'POST',
            body
        });
    }

    update(api, body) {
        return this.makeRequest({
            api,
            method: 'PUT',
            body
        });
    }

    delete(api, id) {
        return this.makeRequest({
            api,
            method: 'PUT',
            id
        });
    }

    makeRequest(requestInfo) {
        const handled = this.handleRequest(requestInfo);
        if (handled) {
            return handled;
        }
        // request logic
    }

    handleRequest(requestInfo) {
        const handler = this.httpHandlers.find(handler => handler.match === requestInfo.api);
        if (handler) return handler.process(requestInfo);
    }

    addHandler(match, process) {
        this.httpHandlers.push({match, process});
    }
}

export const httpService = new HttpService();
