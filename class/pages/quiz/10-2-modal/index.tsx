import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                모달 열기
            </Button>
            <Modal
                title="게시글 등록"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>게시글이 등록되었습니다.</p>
            </Modal>
        </>
    );
}
