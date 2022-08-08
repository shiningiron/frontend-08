export default function ButtonVc(props) {
  return (
    <button
      style={{
        backgroundColor: props.isActive ? "#6400ff" : "none",
      }}
    >
      {props.title}
    </button>
  );
}
