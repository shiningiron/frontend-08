import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAlertPage() {
    const onCompletePostcode = (data: any) => {
        console.log(data);
    };

    return <DaumPostcodeEmbed onComplete={onCompletePostcode} />;
}
