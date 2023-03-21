export const OrderAPI = superclass =>
    class extends superclass {
        async listOrders(origin) {
            const url = `${this.baseUrl}order`;
            const response = await this.get(url, { params: { origin: origin } });
            return response;
        }

        async createOrder(payload) {
            const url = `${this.baseUrl}order`;
            const response = await this.post(url, { dataJ: payload });
            return response;
        }

        async getOrder(id) {
            const url = `${this.baseUrl}order/${id}`;
            const response = await this.get(url);
            return response;
        }
    };

export default OrderAPI;
