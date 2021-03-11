const { default: axios } = require("axios");
const { Component } = require("react");

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
    };
  }
  editMahasiswa = () => {
    axios
      .post("/ubah", {
        id: this.state.id,
        nim: this.state.nim,
        nama: this.state.nama,
        jurusan: this.state.jurusan,
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
          });
        } else {
          this.setState({
            response: json.data.values,
          });
        }
      });
  };

  render() {
    return (
      <div>
        <form className="form">
          <label>NIM</label>
          <formGroup>
            <input
              type="text"
              name="nim"
              placeholder="nim"
              onChange={this.handleChange}
            ></input>
          </formGroup>
          <br></br>
          <label>Nama</label>
          <formGroup>
            <input
              type="text"
              name="nama"
              placeholder="nama"
              onChange={this.handleChange}
            ></input>
          </formGroup>
          <br></br>
          <label>Jurusan</label>
          <formGroup>
            <input
              type="text"
              name="jurusan"
              placeholder="nim"
              onChange={this.handleChange}
            ></input>
          </formGroup>
          <br></br>
          <formGroup>
            <button type="button" onClick={this.addMahasiswa}>
              Submit
            </button>
          </formGroup>
        </form>
      </div>
    );
  }
}

export default Edit;
