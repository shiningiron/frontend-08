import { Modal, Button } from "antd"
import { ChangeEvent, useState } from "react";
import DaumPostcodeEmbed from 'react-daum-postcode'

export default function ModalAlertPage (){

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

    const onCompletePostcode = (data: any) => {
        console.log(data)
        setIsModalVisible(false);
    }

    return(
        <>
            <Button type="primary" onClick={showModal}>
                모달창 열기
            </Button>

            {/* 모달 종료 방식 - 1. 모달 숨기는 방법 */}
            {/* <Modal title="제목" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={onCompletePostcode}/>
            </Modal> */}

             {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 */}
             {isModalVisible && (
             <Modal title="제목" visible={true} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={onCompletePostcode}/>
            </Modal>
            )}
        </>
    )
}