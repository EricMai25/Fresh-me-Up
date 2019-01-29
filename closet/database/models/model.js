const db = require("../database/index");

const getData = (data, limit, where, callback) => {
  if (!where) {
    where = "";
  }
  db.client.query(
    `SELECT * FROM ${data} ${where} LIMIT ${limit}`,
    (err, data) => {
      if (err) throw err;
      callback(null, data);
    }
  );
};

const postData = (data, callback) => {
  db.client.query(`SELECT * FROM ${data} `, (err, data) => {
    if (err) throw err;
    callback(null, data);
  });
};

const deleteData = (data, callback) => {
  db.client.query(`SELECT * FROM ${data} `, (err, data) => {
    if (err) throw err;
    callback(null, data);
  });
};
module.exports = {
  getData,
  postData,
  deleteData
};
