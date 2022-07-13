


export default function fetchProductsUi (props) {


    return (
        <>
            {data ?.fetchBoards.map(el => (
                <props.Row>
                    <props.Column><input type='checkbox' /></props.Column>
                    <props.Column>{el.number}</props.Column>
                    <props.Column>{el.writer}</props.Column>
                    <props.Column>{el.contents}</props.Column>
                </props.Row>
            ))}
        </>

    )

}