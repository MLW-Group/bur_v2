// import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
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
const ModalRe = ({
  setOpenModalRe,
  title = "Ваш запрос успешно зарегистрирован.",
}: {
  setOpenModalRe: (value: boolean) => void;
  title?: string;
}) => {
  const ref = useRef();
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModalRe(false);
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
          <ModalBody ref={ref}>
            <ModalHeader>
              <Close onClick={() => setOpenModalRe(false)}>X</Close>
            </ModalHeader>
            <BodyModal>
              <Text $size="26" $fontWeight="XXL">
                {title}
              </Text>
              <Text $size="L" $fontFamily="open">
                В скором времени наш эксперт свяжется с вами, ожидайте.
              </Text>
              {/* <Text $size="S" $fontFamily="open" $textAlign="FE"></Text> */}
            </BodyModal>
          </ModalBody>
        </RowCenter>
      </Container>
    </ModalContainer>
  );
};

export default ModalRe;
