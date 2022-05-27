export default function Button(props) {

  return (
    <button type="button" onClick={props.onClickFunction} name={props.nome} value={props.value} className="button">{props.value}</button>
   )
}