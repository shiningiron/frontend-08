import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    // const resultUserInfo = await graphQLClient.request(FETCH_USER_LOGGED_IN, {
    //   headers: { Authorization: `Bearer ${accessToken}` },
    // });
    // const newUserInfo = resultUserInfo.fetchUserLoggedIn.userInfo;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
