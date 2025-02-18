import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    // console.log(this.props);
    const { ninjas } = this.props;
    const ninjaList = ninjas.map((ninja) => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name : {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>baju: {ninja.baju}</div>
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}

export default Ninjas;
