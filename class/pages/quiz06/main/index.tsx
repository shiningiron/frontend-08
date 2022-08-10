import InputQ from "../../../src/components/commons/inputs/quiz01/inxdex";
import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../src/commons/store";
import { Modal, Button } from "antd";
import ButtonQ from "../../../src/components/commons/buttons/quiz01";
import { useState } from "react";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;
const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function MainPage() {
    const router = useRouter();
    const client = useApolloClient();
    const { register, handleSubmit } = useForm();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onToggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };

    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
    >(LOGIN_USER);

    const onClickButton = async (data) => {
        try {
            const result = await loginUser({
                variables: { ...data },
            });
            const accessToken = result.data?.loginUser.accessToken;
            console.log(accessToken);

            if (!accessToken) {
                alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
                return;
            }

            const resultUserInfo = await client.query({
                query: FETCH_USER_LOGGED_IN,
                context: {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            });
            console.log(resultUserInfo.data);
            const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

            setAccessToken(accessToken || "");
            setUserInfo(userInfo || {});
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));

            const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
            alert("로그인에 성공하였습니다!");
            if (baskets.length > 0) {
                onToggleModal();
                // router.push("/quiz06/basket");
            }
            router.push("/quiz06/main");
        } catch {
            Modal.error({ content: Error.name });
        }
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {accessToken ? (
                    <div>{`${userInfo.name}님`}</div>
                ) : (
                    <form onSubmit={handleSubmit(onClickButton)}>
                        <InputQ type="text" register={register("email")} />
                        <InputQ
                            type="password"
                            register={register("password")}
                        />
                        <ButtonQ title="로그인" />
                    </form>
                )}
            </div>
            <Modal
                title="장바구니"
                visible={isModalVisible}
                onOk={onToggleModal}
                onCancel={onToggleModal}
                destroyOnClose={isModalVisible}
                width={560}
                footer={[
                    <Button key="back" onClick={onToggleModal}>
                        아니요
                    </Button>,
                    <Button
                        key="link"
                        href="http://localhost:3000/quiz06/basket"
                        type="primary"
                        onClick={onToggleModal}
                    >
                        이동하기
                    </Button>,
                ]}
            >
                비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?
            </Modal>
        </>
    );
}
