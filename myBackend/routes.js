"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");
  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilData);

  app.route("/tampil/:nim").get(jsonku.tampilDataid);

  app.route("/tambah").post(jsonku.tambahMahasiswa);

  app.route("/ubah").put(jsonku.ubahMahasiswa);
  app.route("/hapus/:nim").delete(jsonku.hapus);
  app.route("/tampilmatakuliah").get(jsonku.tampilGroupmat);
};
