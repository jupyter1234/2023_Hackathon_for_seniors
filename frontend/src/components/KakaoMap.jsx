import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MAPPIN from "../constants/MAP"; // Replace 'yourFilePath' with the actual path to your data file

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
        }
      );
    } else {
      alert("위치 설정을 허용해주세요!");
      return;
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Map
      id="map"
      center={{
        lat: geolocation.lat || 37.566826,
        lng: geolocation.lng || 126.9786567,
      }}
      style={{
        width: "100%",
        height: "690px",
      }}
      level={7}
    >
      {geolocation && <MapMarker 
        position={geolocation} 
        image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
      />}
      {MAPPIN.map((pin, index) => (
        <MapMarker key={index} position={{ lat: pin.coordinates[1], lng: pin.coordinates[0] }} clickable={true}/>
      ))}
    </Map>
  );
}
