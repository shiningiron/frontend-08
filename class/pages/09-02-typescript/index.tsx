export default function TypescriptPage(){
    
    let aaa = "안녕하세요" 
    aaa = 3   // 타입 추론 기능 *처음에 넣은 값으로 타입을 지정* 

    //타입 명시
    let bbb: string = "반갑습니다" 
    
    //문자타입(선언과 할당 분리)
    let ccc: string
    ccc = "반가워요!!!"

    //숫자타입
    let ddd: number = 10
    ddd = "철수"

    //불린타입
    let eee: boolean = true
    eee = false
    eee = "false" // true로 작동함

    //배열타입
    let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]  //숫자만 들어가는 배열
    let ggg: string[] = ["철수", "영희", "훈이", 10]
    let hhh: (string|number)[] = ["철수", "영희", "훈이", 10]

    //객체타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }
    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.age = "8살"


    //함수타입
    const add = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit
    }
    const result = add(1000, 2000, "원" )
    
        //받는 쪽에 타입을 정해준다
        //const add = (..., ..., ...,): string  <-- 소괄호에도 타입을 정해줄수 있다 return 타입으로 정해진다.
        //결과의 타입도 예측 가능

    //any 타입
    let qqq: any = "철수"  // 자바스크립트와 동일
    qqq = 123
    qqq = true

    return (

        <div>타입스크립트 연습하기</div>

    )

}