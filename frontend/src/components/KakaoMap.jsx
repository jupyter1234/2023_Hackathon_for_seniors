import { Map, MapMarker } from "react-kakao-maps-sdk"
import { useState, useEffect } from "react"

export default function KakaoMap() {
  const [geolocation, setGeolocation] = useState({
    lat: null,
    lng: null,
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setGeolocation({
            lat,
            lng,
          });
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('위치 설정을 허용해주세요!');
      return;
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: geolocation.lat || 37.566826, // 기본값을 서울로 설정
        lng: geolocation.lng || 126.9786567, // 기본값을 서울로 설정
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={4} // 지도의 확대 레벨
    >
      {geolocation && <MapMarker position={geolocation} />}
      {/* {geolocation && <p>{'현재 위치의 위도는 ' + geolocation.lat + ' 이고, 경도는 ' + geolocation.lng + ' 입니다'}</p>} */}
    </Map>
  );
}