const yonius = require("yonius");
const seeplus = require("..");

const hello = async () => {
    await yonius.load();
    const api = new seeplus.API();
    const result = await api.listOrders();
    console.info(result);
};

hello();
