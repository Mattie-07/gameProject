import '../assets/styles.css'

const StartButton = (props) => {
    return (
        <>
        <button className="btn" onClick={props.onClick}>Jump </button>
        </>
    )
}

export default StartButton
