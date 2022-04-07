import React from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from "react-leaflet";


// import { Text, Badge, Card } from "@sanity/ui";

// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";

// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css"

// const [map, setMap] = useState(null);
// const center = [5912, -9348];
const position = [51.505, -0.09]

function Map() {
  return (
    // <MapContainer 
    //   center={center}
    //   zoom={15}
    //   scrollWheelZoom={false}
    //   style={{
    //     height: "calc(100vh)",
    //     minHeight: "400px",
    //     width: "100%",
    //     minWidth: "200px",
    //     boxSizing: "border-box"
    //   }}
    //   whenCreated={setMap}/
    //   >
    //     <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
      
    //   </MapContainer>
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map