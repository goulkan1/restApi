var connection = require("../koneksi");
var mysql = require("mysql");
var md5 = require("MD5");
var response = require("../res");
var jwt = require("jsonwebtoken");
var config = require("../config/secret");
var ip = require("ip");
const conn = require("../koneksi");

exports.regis = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggalDaftar: new Date(),
  };

  var query = "SELECT email FROM ?? WHERE ?? = ?";
  var table = ["user", "email", post.email];
  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = "INSERT INTO ?? SET ?";
        var table = ["user"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("berhasil di tambah", res);
          }
        });
      } else {
        response.ok("sudah terdaftar", res);
      }
    }
  });
};

exports.login = function (req, res) {
  let post = {
    password: req.body.password,
    email: req.body.email,
  };

  let query = "SELECT * FROM  ?? WHERE ??=? AND ??=?";
  let table = ["user", "password", md5(post.password), "email", post.email];
  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        let token = jwt.sign(
          {
            rows,
          },
          config.secret,
          {
            expiresIn: 1440,
          }
        );
        idUser = rows[0].id;
        let data = {
          idUser: idUser,
          acessToken: token,
          ipAddress: ip.address(),
        };

        let query = "INSERT INTO ?? SET ?";
        let table = ["aksestoken"];
        query = mysql.format(query, table);

        connection.query(query, data, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            res.json({
              success: true,
              message: "token generate",
              token: token,
              currUser: data.idUser,
            });
          }
        });
      } else {
        res.json({
          errror: true,
          message: "email dan pass salah",
        });
      }
    }
  });
};

exports.halamanRahasisa = function (req, res) {
  response.ok("hal role 2", res);
};
