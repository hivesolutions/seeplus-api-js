const yonius = require("yonius");
const seeplus = require("..");

const hello = async () => {
    await yonius.load();
    const api = new seeplus.API();
    const result = await api.listOrders("63971c5c62bd0a62b956b4f3");
    console.info(result);
};

hello();
