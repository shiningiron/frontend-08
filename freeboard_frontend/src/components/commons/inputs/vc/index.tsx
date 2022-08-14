import styled from "@emotion/styled";

const CustomInput = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

export default function InputVc(props: any) {
  return (
    <CustomInput
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
}
