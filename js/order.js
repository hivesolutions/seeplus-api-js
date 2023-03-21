export const OrderAPI = superclass =>
    class extends superclass {
        async listOrders(options = {}) {
            const url = `${this.baseUrl}order`;
            const response = await this.get(url, options);
            return response;
        }

        async createOrder(payload) {
            const url = `${this.baseUrl}order`;
            const response = await this.post(url, { dataJ: payload });
            return response;
        }
    };

export default OrderAPI;
