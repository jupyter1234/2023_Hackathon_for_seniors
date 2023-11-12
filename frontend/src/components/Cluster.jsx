import { useState, useEffect, useRef } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import CLUSTERSET from "../constants/CLUSTER";

export default function Cluster() {
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

  const mapRef = useRef();

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current
    const level = map.getLevel() - 1;
    map.setLevel(level, {anchor: cluster.getCenter()});
  };

  return (
    <Map // 지도를 표시할 Container
      center={{
        lat: geolocation.lat || 35.8881703,
        lng: geolocation.lng || 128.6113467,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "90vh",
      }}
      level={7} // 지도의 확대 레벨
      ref={mapRef}
    >
      {geolocation && <MapMarker 
        position={geolocation} 
        image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
            size: {
              width: 32,
              height: 37,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 15,
                y: 37,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
      />}
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={4} // 클러스터 할 최소 지도 레벨
        disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        onClusterclick={onClusterclick}
      >
        {CLUSTERSET.map((pos, idx) => (
          <MapMarker
            key={idx}
            image={{
              src: "https://i.ibb.co/BZgv2jw/image.png", // 마커이미지의 주소입니다
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
            position={{
              lat: pos.location[1],
              lng: pos.location[0],
            }}
          />
        ))}
      </MarkerClusterer>
    </Map>
  );
}
