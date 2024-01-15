import React, { useState } from "react";
import styled from "styled-components";
import { YMaps, Placemark, Map, Clusterer } from "@pbe/react-yandex-maps";
import { Button, Input, Modal } from "antd";
import { Text } from "@/components/Text/styled";
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

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
  const [nameMark, setNameMark] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false)

  const [data, setData] = useState({})

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
      {
        ...data,
        name: nameMark
      }
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
  const saveEditedName = () => {
    setMarks((prevMarks) =>
      prevMarks.map((mark) =>
        mark.id === editingId
          ? { ...mark, name: nameMark }
          : mark
      )
    );
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setNameMark('');
  };

  const deleteMark = (id: number) => {
    setMarks((prevMarks) => prevMarks.filter((mark) => mark.id !== id));
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
                onDragEnd={(event: any) => handlePlacemarkDrag(event, el.id)}
                properties={{
                  hintContent: el.name,
                }}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
      <div style={{ overflow: 'auto', maxHeight: 500, }}>
        {marks.map((el, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: 30,
              flexWrap: 'wrap',
              borderWidth: 1,
              borderColor: '#FF5F1E',
              alignItems: 'center',
              padding: '15px 10px',
            }}
          >
            <Text $size="XL" $transform="upper" $color="orange" $fontWeight="XL">
              {el.id}
            </Text>
            {el.id !== editingId ? (
              <div
                style={{
                  minWidth: '400px',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                <Text $size="XL" $transform="upper" $color="white" $fontWeight="XL" >
                  {el.name}
                </Text>
              </div>
            ) : (
              <div style={{ minWidth: '400px', display: 'flex', flexWrap: 'wrap' }}>
                <Input
                  value={nameMark}
                  placeholder="Введите название метки"
                  onChange={(e) => setNameMark(e.target.value)}
                  onPressEnter={saveEditedName}
                // onBlur={cancelEditing}
                />
              </div>
            )}
            <Text $size="XL" $transform="upper" $color="white" $fontWeight="XL" style={{ minWidth: 500 }}>
              {el.lat},{el.long}
            </Text>
            <EditOutlined onClick={() => setEditingId(el.id)} style={{ color: 'white', fontSize: 30 }} />
            <DeleteFilled onClick={() => deleteMark(el.id)} style={{ color: 'red', fontSize: 30 }} />
            {el.id == editingId &&
              <div style={{
                display: 'flex',
                transition: '0.3s ease-in-out',
                gap: 10
              }}>
                <Button type="primary" onClick={saveEditedName}>Сохранить</Button>
                <Button onClick={cancelEditing}>Отменить</Button>
              </div>
            }
          </div>
        ))}
      </div>
    </Block>
  );
}