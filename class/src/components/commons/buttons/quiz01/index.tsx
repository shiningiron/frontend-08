export default function ButtonQ(props) {
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
