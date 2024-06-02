import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Space, Table, Typography } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";

interface DataType {
  key?: React.Key | null;
  phone: string;
  id: string;
  description: string;
  active: boolean;
  status?: string;
  adminDescription: string;
  statusLabel?: string;
}

const statusCode = [
  { value: "NEW", label: "Новый" },
  { value: "CALLED", label: "Позвонили" },
  { value: "FINISH", label: "Завершен" },
  { value: "CANCEL", label: "Отменен" },
  { value: "WAIT", label: "В ожидании" },
];
const ValidationSchema = Yup.object().shape({
  adminDescription: Yup.string().required("Введите описание администратора"),
  status: Yup.string().required("Выберите статус"),
});
const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};
const initialValues = {
  active: false,
  phone: "",
  id: "",
  description: "",
  // status: "",
  adminDescription: "",
};
const OrderTable: React.FC = () => {
  const [openModal, setOpenModal] = useState<DataType>(initialValues);
  const [allReq, setAllReq] = useState([]);
  const [deleteReq, setDeleteReq] = useState({
    id: "",
    active: false,
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Номер телефона",
      dataIndex: "phone",
    },
    {
      title: "Описание",
      dataIndex: "description",
    },
    {
      title: "Описание Администратора",
      dataIndex: "adminDescription",
    },
    {
      title: "Статус",
      dataIndex: "status",
      render: (_, record) => {
        return (
          <Space size="middle">
            <div style={{ minWidth: 100 }}>{record.statusLabel}</div>
            <Button
              type="primary"
              onClick={() => {
                setOpenModal({
                  id: record.id,
                  active: true,
                  phone: record.phone,
                  status: record.status,
                  description: record.description,
                  adminDescription: record.adminDescription,
                });
              }}
            >
              Редактировать
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                setDeleteReq({ id: record.id, active: true });
              }}
            >
              Удалить
            </Button>
          </Space>
        );
      },
    },
  ];

  const getAllRequests = async () => {
    try {
      const { data } = await axios.get(
        `https://bur-api.macwel.app/api/v1/request`,
        {
          withCredentials: true,
        }
      );
      setAllReq(data.data);
    } catch (error: any) {}
  };
  useEffect(() => {
    getAllRequests();
  }, []);

  function getStatusLabel(colorValue, status) {
    for (let i = 0; i < status.length; i++) {
      if (status[i].value === colorValue) {
        return status[i].label;
      }
    }
    return "неизвестный статус";
  }

  function assignColors(dataArray: any, status: any) {
    const coloredDataArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      const item = dataArray[i];
      const statusLabel = getStatusLabel(item.status, status);
      const coloredItem = { ...item, statusLabel: statusLabel };
      // @ts-ignore
      coloredDataArray.push(coloredItem);
    }
    return coloredDataArray;
  }
  const newMarks = assignColors(allReq, statusCode);

  const submit = async (data: {
    id: string;
    adminDescription: string;
    status: string;
  }) => {
    try {
      await axios.post(
        `https://bur-api.macwel.app/api/v1/request/update/${data.id}`,
        {
          adminDescription: data.adminDescription,
          status: data.status,
        },
        {
          withCredentials: true,
        }
      );
      getAllRequests();
      setOpenModal(initialValues);
    } catch (error) {
      console.log("🚀 ~ handleCreate ~ error:", error);
    }
  };
  const handleDeleteReq = async () => {
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/request/delete/${deleteReq.id}`,
        {},
        {
          withCredentials: true,
        }
      );
      getAllRequests();
      setDeleteReq({ id: "", active: false });
    } catch (error) {
      console.log("🚀 ~ handleCreate ~ error:", error);
    }
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={newMarks}
        onChange={onChange}
        pagination={{
          style: {
            background: "white",
            padding: 10,
            margin: 0,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          className: "pagination",
          showSizeChanger: true,
        }}
      />
      <Modal
        title="Редактировать заявку"
        centered
        footer={null}
        open={openModal.active}
        // onOk={() => setOpenModal(initialValues)}
        onCancel={() => {
          setOpenModal(initialValues);
        }}
      >
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            adminDescription: openModal.adminDescription,
            status: openModal.status!,
            id: openModal.id,
          }}
          onSubmit={submit}
          enableReinitialize
        >
          {(props) => {
            const {
              setFieldValue,
              dirty,
              isValid,
              errors,
              values,
              handleChange,
              resetForm,
            } = props;
            return (
              <Form>
                <Typography>Описание</Typography>
                <Input
                  style={{ width: "100%" }}
                  value={values.adminDescription}
                  onChange={(e) =>
                    setFieldValue("adminDescription", e.target.value)
                  }
                />
                <p style={{ color: "red", marginBottom: 10 }}>
                  {errors.adminDescription}
                </p>
                <Select
                  value={values.status}
                  onChange={(e) => setFieldValue("status", e)}
                  style={{ width: "100%" }}
                  options={statusCode}
                />
                <p style={{ color: "red", marginBottom: 10 }}>
                  {errors.status}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <Button
                    type="default"
                    onClick={() => {
                      setOpenModal(initialValues);
                    }}
                  >
                    Закрыть
                  </Button>
                  <Button
                    type="primary"
                    disabled={!dirty || !isValid}
                    htmlType="submit"
                  >
                    Добавить
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <Modal
        title="Вы действительно хотите удалить заявку?"
        centered
        open={deleteReq.active}
        onOk={() => handleDeleteReq()}
        onCancel={() => setDeleteReq({ id: "", active: false })}
      >
        <div style={{ marginTop: 10, opacity: 0 }}>/</div>
      </Modal>
    </>
  );
};

export default OrderTable;
