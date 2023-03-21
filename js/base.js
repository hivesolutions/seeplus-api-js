import { API as YoniusAPI, mix, load, conf } from "yonius";
import { OrderAPI } from "./order";

const BASE_URL = "https://api.seeplus.inovretail.com/";

export class API extends mix(YoniusAPI).with(OrderAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("SEEPLUS_BASE_URL", BASE_URL);
        this.token = conf("SEEPLUS_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.params = options.params !== undefined ? options.params : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        options.headers = options.headers !== undefined ? options.headers : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth) options.headers.Authorization = `Bearer ${this.token}`;
    }
}

export default API;
