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

exports.hapus = function (req, res) {
  let nim = req.params.nim;
  connection.query(
    "DELETE FROM mahasiswa where nim = ?",
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

exports.ubahMahasiswa = function (req, res) {
  var id = req.body.id;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;
  connection.query(
    "UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id = ?",
    [nim, nama, jurusan, id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        respone.ok("ubah data", res);
      }
    }
  );
};

exports.tampilGroupmat = function (req, res) {
  connection.query(
    "SELECT mahasiswa.idMah, mahasiswa.nim, mahasiswa.nama , mat.mat , mat.sks FROM krs JOIN mat JOIN mahasiswa WHERE krs.idMat = mat.idMat AND krs.idMah = mahasiswa.idMah ORDER BY mahasiswa.idMah ",
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        respone.oknested(rows, res);
      }
    }
  );
};
