export default function Tela(props) {
    return(
        <div className="tela__container">
            <p>{props.valorTop}</p>
            <p>{props.valorBottom}</p>
        </div>
    )
}