export default function LoginPageUI(props) {
  return (
    <div style={{ display: "flex" }}>
      <input type="text" placeholder="Email" onChange={props.onChangeEmail} />
      <input
        type="password"
        placeholder="PassWord"
        onChange={props.onChangePassword}
      />
      <button onClick={props.onClickLogin}>로그인하기</button>
    </div>
  );
}
