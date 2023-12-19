export default function SequencerBtn(props) {
    return (
        <button className="btn btn-lg btn-outline-dark" onClick={props.onClick}>{props.text}</button>
    )
}