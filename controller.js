'use strict';

var respone = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');


exports.index = function(req,res) {
    respone.ok("berhasil",res)
}

exports.tampilData = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds) {
        if (error) {
            console.log(error);
        }else {
            respone.ok(rows,res)
        }
    })
    
}

exports.tampilDataid = function(req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id = ?', [id],  
    function(error, rows, fileds) {
        if (error) {
            console.log(error);
        }else {
            respone.ok(rows,res)
        }
    })
    
}

exports.tambahMahasiswa = function(req,res) {
    var id = req.params.id;
    var nim = req.params.nim;
    var nama = req.params.nama;
    connection.query('INSERT INTO  mahasiswa (id,nim,nama) VALUES (?,?,?)', [id,nim,nama],  
    function(error, rows, fileds) {
        if (error) {
            console.log(error);
        }else {
            respone.ok("tambah data",res)
        }
    })
    
}