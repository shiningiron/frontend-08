import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAlertPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address, setAddress] = useState("");

    const onToggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };

    const onCompletePostcode = (data: any) => {
        console.log(data);
        onToggleModal();
        setAddress(data.address);
    };

    return (
        <>
            <Button type="primary" onClick={onToggleModal}>
                모달창 열기
            </Button>
            {address}
            {isModalVisible && (
                <Modal
                    title="제목"
                    visible={true}
                    onOk={onToggleModal}
                    onCancel={onToggleModal}
                >
                    <DaumPostcodeEmbed onComplete={onCompletePostcode} />
                </Modal>
            )}
        </>
    );
}
