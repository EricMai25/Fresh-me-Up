const models = require("../models/model");

module.exports = {
  Suit: {
    get: (req, res) => {
      let limit = req.query.limit;
      let where = req.query.where;
      models.getData("suit", limit, where, (err, data) => {
        res.send(data);
      });
    }
  },
  Shoe: {
    get: (req, res) => {
      let limit = req.query.limit;
      let where = req.query.where;
      models.getData("shoe", limit, where, (err, data) => {
        res.send(data);
      });
    },
    // post: (req, res) => {
    //   models.postData();
    // },
    // delete: (req, res) => {
    //   models.deleteData();
    // }
  },
  Pant: {
    get: (req, res) => {
      let limit = req.query.limit;
      let where = req.query.where;
      models.getData("pant", limit, where, (err, data) => {
        res.send(data);
      });
    },
    // post: (req, res) => {
    //   models.postData();
    // },
    // delete: (req, res) => {
    //   models.deleteData();
    // }
  },
  Watch: {
    get: (req, res) => {
      let limit = req.query.limit;
      let where = req.query.where;
      models.getData("watch", limit, where, (err, data) => {
        res.send(data);
      });
    },
    // post: (req, res) => {
    //   models.postData();
    // },
    // delete: (req, res) => {
    //   models.deleteData();
    // }
  },
  Shirt: {
    get: (req, res) => {
      let limit = req.query.limit;
      let where = req.query.where;
      models.getData("shirt", limit, where, (err, data) => {
        res.send(data);
      });
    },
    // post: (req, res) => {
    //   models.postData();
    // },
    // delete: (req, res) => {
    //   models.deleteData();
    // }
  }
};
