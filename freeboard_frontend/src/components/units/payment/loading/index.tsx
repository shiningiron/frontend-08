import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export default function LoadingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);
  const [userInfo] = useRecoilState(userInfoState);
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING);

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(event.target.value));
  };
  console.log(selected);
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: userInfo.name,
        amount: selected,
        buyer_email: userInfo.email,
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/usedItem/payment/complete/",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);

          router.push("http://localhost:3000/usedItem/payment/complete/");
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // const paymentDate = new Date()
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select name="price" onChange={onChangeSelect} value={selected}>
        <option value={0}>가격 선택</option>
        <option value={500}>500원</option>
        <option value={1000}>1000원</option>
        <option value={2000}>2000원</option>
        <option value={5000}>5000원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
