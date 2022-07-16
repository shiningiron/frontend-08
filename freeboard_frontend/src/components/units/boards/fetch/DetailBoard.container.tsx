import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./DetailBoard.queries"
import { useRouter } from "next/router"
import DetailBoardUI from "./DetailBoard.presenter"
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"


export default function DetailBoardContainer () {

    const router = useRouter()
    const {data} = useQuery<Pick<IQuery,'fetchBoard'>,IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: { boardId: router.query.newBoardId as string }
    })
    console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/freeboard/${router.query.newBoardId}/edit`)
    }

    return <DetailBoardUI
        data = {data}
        onClickMoveToEdit = {onClickMoveToEdit}
    />
}