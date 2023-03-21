import { Base, BaseDelta, BaseNeo } from "./base";

export class Order extends Base {
    origin: string;
}

export class OrderDelta extends BaseDelta {
    origin: string;
}

export class RepairSlip extends BaseNeo {}

export declare interface OrderAPI {
    listOrders(origin: string): Promise<Order[]>;
    createOrder(payload: OrderDelta): Promise<Order>;
}
