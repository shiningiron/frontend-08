export default function InputVc(props) {
  return <input type={props.type} {...props.register} />;
}
