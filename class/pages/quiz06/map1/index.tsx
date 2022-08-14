import { useEffect } from "react";

declare const window: typeof globalThis & {
    kakao: any;
};

export default function KakaoMapPage() {
    useEffect(() => {
        const script = document.createElement("script"); // <script></script>
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=a41559ff27bd46de320516e3ad8fd083&autoload=false";
        document.head.append(script);

        script.onload = () => {
            window.kakao.maps.load(function () {
                const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
                const options = {
                    // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(
                        36.78745146376869,
                        127.11581486474576
                    ), // 지도의 중심좌표.
                    level: 3, // 지도의 레벨(확대, 축소 정도)
                };
                const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
                console.log(map);

                const imageSrc = "/jack.png"; // 마커이미지의 주소입니다
                const imageSize = new window.kakao.maps.Size(64, 64); // 마커이미지의 크기입니다
                const imageOption = {
                    offset: new window.kakao.maps.Point(27, 69),
                }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new window.kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption
                );
                const markerPosition = new window.kakao.maps.LatLng(
                    37.54699,
                    127.09598
                );

                const marker = new window.kakao.maps.Marker({
                    // 지도 중심좌표에 마커를 생성합니다
                    position: map.getCenter(),
                    image: markerImage,
                });
                // 지도에 마커를 표시합니다
                marker.setMap(map);

                // 지도에 클릭 이벤트를 등록합니다
                // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
                window.kakao.maps.event.addListener(
                    map,
                    "click",
                    function (mouseEvent) {
                        // 클릭한 위도, 경도 정보를 가져옵니다
                        const latlng = mouseEvent.latLng;

                        // 마커 위치를 클릭한 위치로 옮깁니다
                        marker.setPosition(latlng);

                        let message =
                            "클릭한 위치의 위도는 " +
                            latlng.getLat() +
                            " 이고, ";
                        message += "경도는 " + latlng.getLng() + " 입니다";

                        const resultDiv =
                            document.getElementById("clickLatlng");
                        resultDiv.innerHTML = message;
                    }
                );
            });
        };
    }, []);
    return (
        <>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
            <div id="clickLatlng"></div>
        </>
    );
}
