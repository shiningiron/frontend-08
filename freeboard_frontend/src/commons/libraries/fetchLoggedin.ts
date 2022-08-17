import { GraphQLClient, gql } from "graphql-request";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export async function getUserInfo(token) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql",

      {
        credentials: "include",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await graphQLClient.request(FETCH_USER_LOGGED_IN);
    const newUserInfo = result.fetchUserLoggedIn;
    console.log(newUserInfo);
    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

// const resultUserInfo = await client.query({
//     query: FETCH_USER_LOGGED_IN,
//     context: {
//       headers: {
//         // Authorization: `Bearer ${accessToken}`,
//         Authorization:
//           "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY3ZDBkMWJjNWJhMzAwMmE3MGZlMTciLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2NjA3MzY5ODUsInN1YiI6InJlZnJlc2hUb2tlbiIsImp0aSI6IjYyZmNkNWQ5MDM1NjI5MDAyOTZiMmRlYyJ9.RM7EaxvAIi3_1Q05sLB3Gy26TU9kT0wo81ImHk9wKf5WAtDfOkNK_00_LT6HBB0MYunEMKh5Jn4Fp8JM3fTA5Q",
//       },
//     },
//   });
//   console.log(resultUserInfo.data);
//       const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
