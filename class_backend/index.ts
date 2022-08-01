// 여기가 API 메인 소스코드

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server"; // const { ApolloServer, gql } = require("apollo-server");

// DOCS
const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String  # 연습용(example 방식)
    createBoard(createBoardInput: CreateBoardInput): String # 실무용(backend08  방식)
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      console.log(result);
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // 만약에, 수정한다면?
      // Board.update({number: 3}, {Writer: "영희"}) => 3번 게시글의 작성자를 영희로 바꿔줘

      // 만약에 삭제한다면?
      // Board.delete({number: 3}) => 3번 게시글을 삭제해줘
      // Board.update({number: 3}, {isDeleted: true}) => 실무에서는 실제로 삭제하지 않음
      // Board.update({number: 3}, {deletedAt: new Date()}) => 실무에서는 실제로 삭제하지 않음
      return "게시물 등록에 성공했습니다.";
    },
    // updateBoard: () => {
    //   return "게시물 수정에 성공했습니다.";
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5017,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize().then(() => {
  console.log("DB 연결성공!!!");

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
