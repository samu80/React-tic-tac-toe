
const style = {
    background: "blue",
    border: "2px solid black",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer"
  };
  
function Square (props) {
    const {value, onClick} = props
    return (
     <button style={style} onClick ={onClick} >
        {value}
     </button>
);
}
export default Square