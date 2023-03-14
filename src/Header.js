function Header(props) { 
    return ( 
      <div style={{color:"tomato", background:"black", fontSize:"20px", fontWeight:"bold"}}> 
        <h1>I made this changes happens {props.msg}</h1> 
        <h2> Hi {props.secondName}</h2>
      </div> 
    ); 
  };
export default Header;  