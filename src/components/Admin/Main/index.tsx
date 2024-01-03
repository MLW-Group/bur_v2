import React, { useState } from "react";
import styled from "styled-components";
import { YMaps, Placemark, Map, Clusterer } from "@pbe/react-yandex-maps";
import { Button, Input, Modal } from "antd";

const Block = styled.div``;

export default function Main() {
  const [marks, setMarks] = useState([
    {
      id: 0,
      lat: 55.177884,
      long: 59.668194,
      name: "Скважина 20м, радиус 30м",
    },
  ]);

  const [openModal, setOpenModal] = useState(false)

  const [data, setData] = useState({})

  const [nameMark, setNameMark] = useState('')

  const handleAddMark = (event: any) => {
    setOpenModal(true)
    const clickedCoordinates = event.get("coords");
    const getLastEl = marks.slice(-1)[0].id;
    setData({
      id: getLastEl + 1,
      lat: clickedCoordinates[0],
      long: clickedCoordinates[1],
      name: nameMark
    })

  };

  const saveMark = () => {
    // @ts-ignore
    setMarks((prevMarks) => [
      ...prevMarks,
      data
    ]);
    setOpenModal(false)
  }

  const handlePlacemarkDrag = (event: any, markId: number) => {
    const newCoords = event.get("target").geometry.getCoordinates();
    setMarks((prevMarks) =>
      prevMarks.map((mark) =>
        mark.id === markId
          ? { ...mark, lat: newCoords[0], long: newCoords[1] }
          : mark
      )
    );
  };

  return (
    <Block>
      <Modal
        open={openModal}
        centered
        title={'Добавить новую метку'}
        onCancel={() => setOpenModal(false)}
        footer={
          <>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button className="bg-sky-500" type="primary" onClick={saveMark} >
              Save
            </Button>
          </>
        }
      >
        <Input style={{ marginTop: 20 }} onChange={(e) => setNameMark(e.target.value)} placeholder="Название метки" />
      </Modal>
      <YMaps
        query={{
          load: "package.full",
          apikey: "1b78f20f-50a5-4e5e-b339-9603ad045d05",
        }}
      >
        <Map
          width={"100%"}
          height={600}
          onClick={handleAddMark}
          defaultState={{ center: [55.177884, 59.668194], zoom: 15 }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {marks.map((el, i) => (
              <Placemark
                key={i}
                defaultGeometry={[el.lat, el.long]}
                options={{
                  preset: "islands#circleIcon",
                  iconColor: "orange",
                  hideIconOnBalloonOpen: false,
                  openEmptyHint: true,
                  draggable: true,
                }}
                onDragEnd={(event) => handlePlacemarkDrag(event, el.id)}
                properties={{
                  hintContent: el.name,
                }}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
      <div>
        {marks.map((el) => (
          <div style={{
            display: 'flex', gap: 10
          }}>
            <p style={{ color: 'white' }}>{el.name}</p>
            <p style={{ color: 'white' }}>{el.lat},{el.long}</p>
          </div>
        ))}
      </div>
    </Block>
  );
}