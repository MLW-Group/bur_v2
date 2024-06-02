import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import {
  ModalContainer,
  Container,
  RowCenter,
  ModalBody,
  ModalHeader,
  Close,
  BodyModal,
} from "./styled";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
import axios from "axios";
import { Input } from "antd";
import { AppContext } from "@/context/app-context";

const Modal = ({
  setOpenModal,
  setOpenModalRe,
  title = "Рассчитать стоимость",
}: {
  setOpenModal: (value: boolean) => void;
  setOpenModalRe: (value: boolean) => void;
  title?: string;
}) => {
  const [error, setError] = useState("");
  const { typeModal } = useContext(AppContext);
  console.log("🚀 ~ typeModal:", typeModal);

  const [phone, setPhone] = useState("");

  const sendForm = async () => {
    if (phone.length == 0 || phone.includes("_")) {
      setError("Заполните номер телефона");
    } else {
      if (process.env.NODE_ENV !== "development") {
        // @ts-ignore
        ym(94753079, "reachGoal", typeModal);
      }
      await axios.post(`/api`, {
        phone,
      });
      await axios.post(
        `https://bur-api.macwel.app/api/v1/request/create/`,
        {
          phone,
          modelType: typeModal,
        },
        {
          withCredentials: true,
        }
      );
      setOpenModal(false);
      setOpenModalRe(true);
    }
    // }
  };
  const ref = useRef();
  function useOutsideClick(ref: any) {
    useEffect(() => {
      function handleClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideClick(ref);
  return (
    <ModalContainer>
      <Container>
        <RowCenter>
          {/* @ts-ignore */}
          <ModalBody ref={ref}>
            <ModalHeader>
              <Close onClick={() => setOpenModal(false)}>X</Close>
            </ModalHeader>
            <BodyModal>
              <Text $size="26" $fontWeight="XXL">
                {title}
              </Text>
              <Text $size="S" $fontFamily="open">
                Наш специалист свяжется с вами в течение 15 минут
              </Text>
              <InputMask
                alwaysShowMask={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPhone(e.target.value), setError("");
                }}
                mask="+7 999 999 99 99"
                placeholder="Телефон*"
                style={{
                  padding: "10px 20px",
                  outline: "none",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  backgroundColor: "#FFF",
                  color: "#bab1b1",
                  fontSize: 20,
                }}
              />
              {/* <Input
                style={{
                  display: "inline-block",
                  padding: 10,
                  outline: "none",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  backgroundColor: "#FFF",
                  fontSize: 16,
                }}
                placeholder="Введите описание"
              /> */}
              {error && (
                <Text
                  $size="M"
                  $fontWeight="L"
                  $color="error"
                  $fontFamily="open"
                >
                  {error}
                </Text>
              )}
              <Button
                $size="L"
                $mix="10x0"
                $borderRadius="4px"
                onClick={sendForm}
                $background="orange"
                $fontFamily="open"
              >
                {/* @ts-ignore */}
                <Text $size="XL" $color="white" $whiteSpace="nowrap">
                  Отправить
                </Text>
              </Button>
              {/* <Text $size="XS" $fontFamily="open" $textAlign="FE">
                Нажимая на кнопку, вы принимаете
                <Link href="/" style={{ margin: "0 5px", color: "blue" }}>
                  Положение
                </Link>
                и
                <Link href="/" style={{ margin: "0 5px", color: "blue" }}>
                  Согласие
                </Link>
                на обработку персональных данных.
              </Text> */}
            </BodyModal>
          </ModalBody>
        </RowCenter>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
