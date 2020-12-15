"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

exports.oknested = function (values, res) {
  const hasil = values.reduce((akumulasi, item) => {
    if (akumulasi[item.nama]) {
      const group = akumulasi[item.nama];
      if (Array.isArray(group.mat)) {
        group.mat.push(item.mat);
      } else {
        group.mat = [group.mat, item.mat];
      }
    } else {
      akumulasi[item.nama] = item;
    }
    return akumulasi;
  }, {});

  var data = {
    status: 200,
    values: hasil,
  };
  res.json(data);
  res.end();
};
