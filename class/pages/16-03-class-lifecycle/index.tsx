import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
    state = {
        count: 5,
    };

    componentDidMount() {
        console.log("그려지고 나서 실행~~");
    }

    componentDidUpdate() {
        console.log("변경되고 나서 실행~~");
    }

    componentWillUnmount() {
        console.log("사라질때 실행~");
        // 채팅방 나가기 api 요청
    }

    counterUp = () => {
        console.log(this.state.count);
        this.setState({
            count: 1,
        });
    };

    onClickMove = () => {
        Router.push("/16-02-class-counter");
    };

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.counterUp}>카운트 올리기</button>
                <button onClick={this.onClickMove}>나가기</button>
            </>
        );
    }
}
