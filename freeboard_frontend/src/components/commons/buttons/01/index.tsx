export default function Button01(props) {
    return (
        <button
            style={{
                backgroundColor: props.isActive ? "yellow" : "none",
            }}
        >
            {props.title}
        </button>
    );
}
