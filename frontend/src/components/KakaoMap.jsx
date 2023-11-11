import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ProgramLocation } from "../store/Info";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MAPPIN from "../constants/MAP";
import { useNavigate } from "react-router-dom";

export default function KakaoMap() {
  const setSelectedLocation = useSetRecoilState(ProgramLocation);
  const [geolocation, setGeolocation] = useState({
    lat: null,
    lng: null,
  });
  const navigate = useNavigate();

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
        lat: geolocation.lat || 35.8881703,
        lng: geolocation.lng || 128.6113467,
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
        <MapMarker key={index} position={{ lat: pin.coordinates[1], lng: pin.coordinates[0] }}       
          onClick={() => {
            setSelectedLocation(pin.name);
            navigate("/programs");
          }}/>
      ))}
    </Map>
  );
}
