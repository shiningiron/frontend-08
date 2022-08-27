import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
    }
  }
`;

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content={props.fetchBoard.title} />
        <meta property="og:description" content={props.fetchBoard.contents} />
        <meta property="og:image" content={props.fetchBoard.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지 입니다!!!, 게시글ID는
        {router.query.boardId}
        입니다!!!
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // 여기서 fetchBoard 요청하기
  const graphQLClient = new GraphQLClient(
    "https://backend08.codebootcamp.co.kr/graphql",
    { credentials: "include" }
  );
  const result = await graphQLClient.request(FETCH_BOARD, {
    boardId: context.query.boardId,
  });

  return {
    props: {
      fetchBoard: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
