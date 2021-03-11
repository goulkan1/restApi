import axios from "axios";
import React, { Component } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios.get("/tampil").then((res) => {
      this.setState({ mahasiswa: res.data.values });
    });
  }

  onDelete(nim, e) {
    axios
      .delete("/hapus/" + nim)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
    console.log(nim);
  }

  render() {
    return (
      <div>
        <h1>Mahasiswa</h1>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {this.state.mahasiswa.map((mahasiswa) => (
            <tr key={mahasiswa.idMah}>
              <td> {mahasiswa.nim}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>
                {" "}
                <button type="button">Edit</button>
                <button
                  type="button"
                  onClick={(e) => this.onDelete(mahasiswa.nim, e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

export default List;
