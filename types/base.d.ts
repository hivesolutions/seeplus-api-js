import { API as BaseAPI } from "yonius";

import { Order, OrderDelta, OrderAPI } from "./order";

export class Base {
    id: number;
    [x: string]: unknown;
}

export class BaseDelta {
    id?: number;
    [x: string]: unknown;
}

export interface APIInterface extends OrderAPI {
    ping(): Promise<object>;
}

export declare class API extends BaseAPI implements APIInterface {
    ping(): Promise<object>;

    listOrders(origin: string): Promise<Order[]>;
    createOrder(payload: OrderDelta): Promise<Order>;
}
