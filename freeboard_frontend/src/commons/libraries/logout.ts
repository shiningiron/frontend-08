import { useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import { LOGOUT_USER } from "../../components/units/user/login/login.queries";
import { accessTokenState } from "../store";

const client = useApolloClient();
const [accessToken] = useRecoilState(accessTokenState);
export async function LogOut() {
  const result = await client.query({
    query: LOGOUT_USER,
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
  console.log(result);
}
