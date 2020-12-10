"use strict";

var respone = require("./res");
var connection = require("./koneksi");
const conn = require("./koneksi");

exports.index = function (req, res) {
  respone.ok("berhasil", res);
};

exports.tampilData = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      respone.ok(rows, res);
    }
  });
};

exports.tampilDataid = function (req, res) {
  let nim = req.params.nim;
  connection.query(
    "SELECT * FROM mahasiswa where nim = ?",
    [nim],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        respone.ok(rows, res);
      }
    }
  );
};

exports.tambahMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query(
    "INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        respone.ok("tambah data", res);
      }
    }
  );
};
