export default function Button(props) {
  
  let testando = {
      nome: "button",
      click: props.onClickFunction,
  };
      if (props.value === "=" || props.value === ".") {
    testando = {
      nome:"operador", 
      click:props.operator
    }
  }

  return (
    <button 
    type="button" 
    onClick= {testando.click} 
    value={props.value} 
    name={props.nome} 
    className="button"
    >
      {props.value}</button>
   )
}