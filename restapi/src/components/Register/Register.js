import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
    };
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  addMahasiswa = ()=>{
    axios.post('/tambah',{
      nim:this.state.nim,
      nama:this.state.nama,
      jurusan:this.state.jurusan,

    }).then(json=> {
      if(json.data.status === 200){
        this.setState({
          response: json.data.values
        })
      }else{
        this.setState({
          response: json.data.values
        })
      }
    })
  }


  render() {
    return (
      <div>
        <form className="form">
          <label>NIM</label>
          <formGroup>
            <input type="text" name="nim" placeholder="nim" onChange={this.handleChange}></input>
          </formGroup>
          <br></br>
          <label>Nama</label>
          <formGroup>
            <input type="text" name="nama" placeholder="nama" onChange={this.handleChange}></input>
          </formGroup>
          <br></br>
          <label>Jurusan</label>
          <formGroup>
            <input type="text" name="jurusan" placeholder="nim" onChange={this.handleChange}></input>
          </formGroup>
          <br></br>
          <formGroup>
            <button type="button" onClick={this.addMahasiswa}>Submit</button>
          </formGroup>
        </form>
      </div>
    );
  }
}

export default Register;
