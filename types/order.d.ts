import { Base, BaseDelta } from "./base";

export class Order extends Base {
    origin: string;
}

export class OrderDelta extends BaseDelta {
    origin: string;
}

export declare interface OrderAPI {
    listOrders(origin: string): Promise<Order[]>;
    createOrder(payload: OrderDelta): Promise<Order>;
}
