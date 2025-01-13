"use client";
import { Header } from "@/components/Header";
import { Cities } from "@/dummy/cities";
import {
  YMaps,
  Placemark,
  Map,
  Clusterer,
} from "@pbe/react-yandex-maps";
import styled from "styled-components";
import Bur from "@img/bur.png";
import Image from "next/image";
const Block = styled.div`
  // width: 100vw;  
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  height: 100vh;
`;
export default function MapPage() {
  const groupedByLetter = Cities.reduce((acc, item) => {
    const firstLetter = item.name.charAt(0).toUpperCase();
    // @ts-ignore
    acc[firstLetter] = acc[firstLetter] || [];
    // @ts-ignore
    acc[firstLetter].push(item);
    return acc;
  }, {});
  const marks = [
    {
      id: 0,
      lat: 55.177884,
      long: 59.668194,
      name: "Скважина 20м, радиус 30м",
    },
    {
      id: 1,
      lat: 55.176729671293785,
      long: 59.66639155554139,
      name: "Скважина 30м, радиус 40м",
    }
  ]
  const letters = Object.keys(groupedByLetter).sort();
  return (
    <Block>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          {letters.map((letter, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                minWidth: "200px",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "Oswald",
                  color: "#FF5F1E",
                }}
              >
                {letter}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* @ts-ignore */}
                {groupedByLetter[letter].map(
                  (
                    word: {
                      name: string;
                      url: string;
                    },
                    index: number
                  ) => (
                    <a
                      href={word.url}
                      key={index}
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "20px",
                        color: "white",
                        zIndex: 1,
                      }}
                    >
                      {word.name}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <YMaps
        query={{
          load: "package.full",
          apikey: "1b78f20f-50a5-4e5e-b339-9603ad045d05",
        }}

      >
        <Map
          width={"100%"}
          height={"55%"}
          defaultState={{ center: [55.177884, 59.668194], zoom: 12 }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {marks.map((el) => (
              <Placemark
                defaultGeometry={[el.lat, el.long]}
                options={{
                  preset: "islands#circleIcon",
                  iconColor: "orange",
                  hideIconOnBalloonOpen: false,
                  openEmptyHint: true,
                }}
                properties={{
                  hintContent: el.name,
                }}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </Block>
  );
}
