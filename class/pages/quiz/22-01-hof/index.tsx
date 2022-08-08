export default function QuizHof() {
    const onClickButton = (number: any) => () => {
        console.log(number);
    };
    return <button onClick={onClickButton(123)}>button</button>;
}
