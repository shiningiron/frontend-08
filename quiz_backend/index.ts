import { Board } from "./Board/Board.postgres";
import { Product } from "./Product/Product.postgres";
import { ApolloServer, gql } from "apollo-server";
import { Any, DataSource } from "typeorm";
import { argsToArgsConfig } from "graphql/type/definition";

const typeDefs = gql`
  scalar Date
  scalar ID

  type ProductReturn {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: Date
  }

  type Return {
    _id: String
    number: Int
    message: String
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts: [ProductReturn]
    fetchProduct(productId: ID): ProductReturn
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput
    ): String
    updateProduct(productId: ID, updateProductInput: UpdateProductInput): Return
    deleteProduct(productId: ID): Return
  }
`;
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      console.log(result);
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({ where: { _id: args.productId } });
      console.log(result);
      return result;
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
        // createdAt: args.createdAt,
        // deletedAt: args.deletedAt,
      });
      return "상품이 등록되었습니다.";
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.delete({
        _id: args.productId,
      });
      return "상품이 삭제되었습니다.";
    },
    updateProduct: async (_: any, args: any) => {
      await Product.update(
        {
          _id: args.productId,
          ...args.updateProductInput,
        },
        { deletedAt: new Date() }
      );
    },
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
  entities: [Board, Product],
  logging: true,
  synchronize: true,
});

AppDataSource.initialize().then(() => {
  console.log("접속완료");

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
