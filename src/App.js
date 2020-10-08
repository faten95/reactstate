import React from "react";
import "./App.css";
import Myimage from "./Assests/cvimg.jpg";

class App extends React.Component {
  state = {
    person: {
      name: "FATEN CHMENGUI",
      bio:
        "Je suis Faten Chmengui, ingénieur en génie electronique diplomé de FST en juillet 2018.",
      profession: "Ingénieur systèmes embarqués",
      img: Myimage,
    },

    show: false,
  };
  handleClick = () =>
    this.setState({ show: !this.state.show});
    myTimer = () => {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("time").innerHTML = t;
    }
    componentDidMount = () => {
      var myVar = setInterval(this.myTimer, 1000);
      return myVar;
    }
  render() {
    return (
      <>
      < span id="time" style={{margin:"20px"}}></span>
      <br></br>
        < button onClick={this.handleClick} style={{display:"flex",alignItems:"center", margin: "20px", color: "white",
  padding: "15px 32px", textAlign: "center",  border:"none", backgroundColor: "#A56D42", borderRadius: "12px"}}>ClickMe</button>
      {this.state.show ? (
        <div  style={{ margin:"auto", width: "50%", border:" 3px solid #A56D42", textAlign: "center", borderRadius: "12px"}}>
          <h1>{this.state.person.name}</h1>
        <h6> {this.state.person.bio}</h6>
        <img
          className="img"
          src={Myimage}
          alt="user"
          width="200px"
          height="200px"
          style={{ marginTop: "100px", borderRadius: "50%" }}
        />
        <h4> {this.state.person.profession}</h4>
        </div>): null}
      </>
    );
  }
}
export default App;
