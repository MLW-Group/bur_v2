import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { YMaps, Placemark, Map, Clusterer } from "@pbe/react-yandex-maps";
import { Button, Input, Modal } from "antd";
import { Text } from "@/components/Text/styled";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import axios from "axios";
import { AppContext } from "@/context/app-context";
import { useRouter } from "next/navigation";

const Block = styled.div``;
type Marks = {
  id: string;
  name: string;
  description: string | null;
  latitude: number;
  longitude: number;
  markerColor: string;
}[];
export default function Main() {
  const [token, setToken] = useState<null | string>();
  const router = useRouter()
  const [marks, setMarks] = useState<Marks>([]);
  console.log("🚀 ~ Main ~ marks:", marks)
  const [nameMark, setNameMark] = useState("");
  const [discMark, setDiscMark] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [coords, setCoords] = useState<number[]>([]);
  const [error, setError] = useState('')
  const getAllMarks = async () => {
    try {
      const { data } = await axios.get(
        `https://bur-api.macwel.app/api/v1/marker`,
        {
          // withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMarks(data);
    } catch (error: any) {
      setError(error.response.data.message)
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("Token")! as string
    if (!accessToken) {
      router.push('/admin')
    } else {
      setToken(accessToken);
    }
  }, []);
  useEffect(() => {
    if (token) {
      getAllMarks();
    }
  }, [token]);

  const handleAddMark = async (event: any) => {
    setOpenModal(true);
    const clickedCoordinates = event.get("coords");
    setCoords([clickedCoordinates[0], clickedCoordinates[1]]);
  };

  const saveMark = async () => {
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/marker/create`,
        {
          latitude: coords[0],
          longitude: coords[1],
          name: nameMark,
          description: discMark,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllMarks();
    } catch (error) {
    }
    setOpenModal(false);
  };

  const handlePlacemarkDrag = async (event: any, markId: string) => {
    const newCoords = event.get("target").geometry.getCoordinates();
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/marker/update`,
        {
          id: markId,
          latitude: newCoords[0],
          longitude: newCoords[1],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllMarks();
    } catch (error) {
    }
  };
  const saveEditedName = async () => {
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/marker/update`,
        {
          id: editingId,
          name: nameMark,
          description: discMark,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllMarks();
    } catch (error) {
    }
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setNameMark("");
  };

  const deleteMark = async (id: string) => {
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/marker/delete`,
        {
          id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllMarks();
    } catch (error) {
    }
  };

  return (
    <Block>
      {!error ?
        <div>
          <Modal
            open={openModal}
            centered
            title={"Добавить новую метку"}
            onCancel={() => setOpenModal(false)}
            footer={
              <>
                <Button onClick={() => setOpenModal(false)}>Cancel</Button>
                <Button className="bg-sky-500" type="primary" onClick={saveMark}>
                  Save
                </Button>
              </>
            }
          >
            <Input
              style={{ marginTop: 20 }}
              onChange={(e) => setNameMark(e.target.value)}
              placeholder="Название метки"
            />
            <Input
              style={{ marginTop: 20 }}
              onChange={(e) => setDiscMark(e.target.value)}
              placeholder="Описание метки"
            />
          </Modal>
          <YMaps
            query={{
              load: "package.full",
              apikey: "1b78f20f-50a5-4e5e-b339-9603ad045d05",
            }}
          >
            <Map
              width={"100%"}
              height={400}
              onClick={handleAddMark}
              defaultState={{ center: [55.177884, 59.668194], zoom: 15 }}
            // defaultState={{ center: [20.7715239, 28.38564], zoom: 15 }}
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
                    defaultGeometry={[el.latitude, el.longitude]}
                    options={{
                      preset: "islands#circleIcon",
                      iconColor: el.markerColor || 'orange',
                      hideIconOnBalloonOpen: false,
                      openEmptyHint: true,
                      draggable: false,
                    }}
                    onDragEnd={(event: any) => handlePlacemarkDrag(event, el.id)}
                    properties={{
                      hintContent: 'Название: ' + el.name + '<br/>' + 'Описание: ' + el.description,
                    }}
                  />
                ))}
              </Clusterer>
            </Map>
          </YMaps>
          <div style={{ overflow: "auto", maxHeight: 500 }}>
            {marks.map((el, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: 30,
                  flexWrap: "wrap",
                  borderWidth: 1,
                  borderColor: "#FF5F1E",
                  alignItems: "center",
                  padding: "15px 10px",
                }}
              >
                {el.id !== editingId ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <Text
                      $size="XL"
                      $transform="upper"
                      $color="white"
                      $fontWeight="XL"
                    >
                      {el.name + ', '}
                    </Text>
                    <Text
                      $size="XL"
                      $transform="upper"
                      $color="white"
                      $fontWeight="XL"
                    >
                      {el.description}
                    </Text>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Input
                      value={nameMark}
                      placeholder="Введите название метки"
                      onChange={(e) => setNameMark(e.target.value)}
                      onPressEnter={saveEditedName}
                    // onBlur={cancelEditing}
                    />
                    <Input
                      value={discMark}
                      placeholder="Введите описание метки"
                      onChange={(e) => setDiscMark(e.target.value)}
                      onPressEnter={saveEditedName}
                    // onBlur={cancelEditing}
                    />
                  </div>
                )}
                <Text $size="XL" $transform="upper" $color="white" $fontWeight="XL">
                  {el.latitude},{el.longitude}
                </Text>
                <EditOutlined
                  onClick={() => setEditingId(el.id)}
                  style={{ color: "white", fontSize: 30 }}
                />
                <DeleteFilled
                  onClick={() => deleteMark(el.id)}
                  style={{ color: "red", fontSize: 30 }}
                />
                {el.id == editingId && (
                  <div
                    style={{
                      display: "flex",
                      transition: "0.3s ease-in-out",
                      gap: 10,
                    }}
                  >
                    <Button type="primary" onClick={saveEditedName}>
                      Сохранить
                    </Button>
                    <Button onClick={cancelEditing}>Отменить</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        :
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: 'white', fontSize: 25, fontWeight: 700 }}>{error}</p>
        </div>
      }
    </Block>
  );
}
