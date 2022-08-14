import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function DaumAddressPostcode() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        주소 검색
      </Button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 */}
      {/* <Modal title="제목" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={onCompletePostcode}/>
            </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 */}
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
