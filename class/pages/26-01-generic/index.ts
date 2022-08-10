// 1. 문자 타입
const getString = (arg: string): string => {
    return arg;
};
const result1 = getString("철수");
// 2. 숫자 타입
const getNumber = (arg: number): number => {
    return arg;
};
const result2 = getNumber("철수");

// 3 any 타입 (그냥 자바스크립트랑 같음)
const getAny = (arg: any): any => {
    return 123;
};
const result3 = getAny(234);
const result4 = getAny(true);
const result5 = getAny("철수");

// 4. unknown 타입 - 모든걸 받을 수 있지만 보낼때는 타입을 지정해줘야 함
const getUnknown = (arg: unknown): any => {
    if (typeof arg === "number") {
        return arg + 2;
    } else {
        return "숫자를 넣어주세요";
    }
};
const result6 = getUnknown(123);

// 5.generic 타입 - 들어온 타입을 그대로 사용
function getGeneric<MyType>(arg: MyType): MyType {
    return arg;
}
const aaa: number = 123;
const bbb: string = "철수";
const result3 = getGeneric(aaa);
const result4 = getGeneric(bbb);
const result5 = getGeneric(true);

// 6. any vs generic 비교
function getAny2(arg1: any, arg2: any, arg3: any): [any, any, any] {
    return [arg3, arg2, arg1];
}
const result = getAny2(123, "찰스", true);

function getGeneric2<MyType1, MyType2, MyType3>(
    arg1: MyType1,
    arg2: MyType2,
    arg3: MyType3
): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1];
}
const result = getGeneric2(123, "철수", true);

// 7. generic 실무적 네이밍
function getGeneric3<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T): [T3, T2, T1] {
    return [arg3, arg2, arg1];
}
const result = getGeneric3(123, "철수", true);

function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1];
}
const result = getGeneric4<number, string, boolean>(123, "철수", true);

// 8. generic - useState
function useMyState<T>(arg: T): [T, () => void] {
    const state = arg;
    const setState = () => {
        // 1. 스테이트 변경
        // 2. 컴포넌트 리렌더링하는 기능
    };
    return [state, setState];
}
const [count, setCount] = useMyState<number>(0);
