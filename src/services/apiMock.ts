import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer",
          type: "deposit",
          category: "development",
          price: 3000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Compras",
          type: "withdraw",
          category: "market",
          price: 425,
          createdAt: new Date("2021-02-16 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();

      return schema.create("transaction", data);
    });
  },
});
