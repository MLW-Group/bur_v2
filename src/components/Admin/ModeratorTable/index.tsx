"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, Select, Space, Table, Typography } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Form, Formik } from "formik";

interface DataType {
  key: React.Key | null;
  email: string;
  name: string;
  status: string;
  id: string;
  role?: string;
  roleLabel?: string;
}
interface UserType {
  email: string;
  name: string;
  password: string;
  active: boolean;
  role?: string;
  id?: string;
}
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
interface IUser {
  password: string;
  name: string;
  email: string;
  role: string;
  id: string;
}
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  email: Yup.string().required("Введите Email"),
});
const CreateValidationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  email: Yup.string().required("Введите Email"),
  password: Yup.string().required("Введите пароль"),
});
const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const initialValues = {
  active: false,
  email: "",
  name: "",
  password: "",
  // role: "MODERATOR",
};
const rolesCode = [
  { value: "MODERATOR", label: "Модератор" },
  { value: "ADMIN", label: "Админ" },
];
const ModeratorTable: React.FC = () => {
  const [openModal, setOpenModal] = useState<UserType>(initialValues);
  const [token, setToken] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const formikRef = useRef();
  const [deleteUser, setDeleteUser] = useState({
    id: "",
    active: false,
  });
  const [createUser, setCreateUser] = useState<UserType>(initialValues);

  const [me, setMe] = useState<UserType>(initialValues);
  const columns: TableColumnsType<DataType> = [
    {
      title: "ФИО",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Роль",
      dataIndex: "roleLabel",
    },
    {
      title: "Действия",
      dataIndex: "status",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setOpenModal({
                id: record.id,
                name: record.name,
                email: record.email,
                password: "",
                active: true,
                role: record.role,
              });
            }}
          >
            Редактировать
          </Button>
          {me.role === "ADMIN" ? (
            <Button
              type="dashed"
              onClick={() => {
                setDeleteUser({ id: record.id, active: true });
              }}
            >
              Удалить
            </Button>
          ) : null}
        </Space>
      ),
    },
  ];

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        `https://bur-api.macwel.app/api/v1/user`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAllUsers(data.data);
    } catch (error: any) {
      if (error.response.data.statusCode === 403) {
        router.push("/admin/order");
      }
      console.log("🚀 ~ getAllUsers ~ error:", error);
    }
  };

  const getMe = async () => {
    try {
      const { data } = await axios.get(
        `https://bur-api.macwel.app/api/v1/user/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMe(data.data);
    } catch (error: any) {}
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")! as string;
    setToken(accessToken);
    if (!accessToken) {
      router.push("/admin");
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      getAllUsers();
      getMe();
    }
  }, [token]);

  const handleCreate = async (data: IUser) => {
    const { password, name, email, role } = data;
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/user/create`,
        {
          password,
          name,
          email,
          role: role ? role : undefined,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllUsers();
      setCreateUser(initialValues);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/user/delete/${deleteUser.id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllUsers();
      setDeleteUser({ id: "", active: false });
    } catch (error) {}
  };
  const handleUpdate = async (data: IUser) => {
    const { password, name, email, role, id } = data;
    try {
      const { data } = await axios.post(
        `https://bur-api.macwel.app/api/v1/user/update/${id}`,
        {
          password: password ? password : undefined,
          name,
          email,
          role: role ? role : undefined,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getAllUsers();
      setOpenModal(initialValues);
    } catch (error) {}
  };

  function getRolesLabel(colorValue, status) {
    for (let i = 0; i < status.length; i++) {
      if (status[i].value === colorValue) {
        return status[i].label;
      }
    }
    return "неизвестная роль";
  }

  function assignRoles(dataArray: any, role: any) {
    const coloredDataArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      const item = dataArray[i];
      const roleLabel = getRolesLabel(item.role, role);
      const coloredItem = { ...item, roleLabel: roleLabel };
      // @ts-ignore
      coloredDataArray.push(coloredItem);
    }
    return coloredDataArray;
  }
  const newMarks = assignRoles(allUsers, rolesCode);

  return (
    <>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Button
          type="primary"
          onClick={() => setCreateUser({ ...createUser, active: true })}
        >
          Добавить нового модератора
        </Button>
      </div>
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
        title="Редактировать модератора"
        centered
        open={openModal.active}
        // onOk={() => handleUpdate()}
        onCancel={() => {
          setOpenModal(initialValues);
          // @ts-ignore
          formikRef.current?.resetForm();
        }}
        footer={null}
      >
        <Formik
          validationSchema={ValidationSchema}
          ref={formikRef}
          initialValues={{
            name: openModal.name,
            email: openModal.email,
            id: openModal.id!,
            password: openModal.password,
            role: openModal.role!,
          }}
          onSubmit={handleUpdate}
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
                <Typography>Имя пользователя</Typography>
                <Input
                  style={{ width: "100%" }}
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>{errors.name}</p>
                <Typography>Email</Typography>
                <Input
                  style={{ width: "100%" }}
                  value={values.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>{errors.email}</p>
                <Typography>Пароль</Typography>
                <Input
                  type="password"
                  style={{ width: "100%" }}
                  value={values.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>
                  {errors.password}
                </p>
                {me.role === "ADMIN" ? (
                  <>
                    <Typography>Роль</Typography>
                    <Select
                      value={values.role}
                      onChange={(e) => setFieldValue("role", e)}
                      style={{ width: "100%" }}
                      options={rolesCode}
                    />
                  </>
                ) : null}
                <p style={{ color: "red", marginBottom: 10 }}>{errors.role}</p>
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
                    Редактировать
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <Modal
        title="Вы действительно хотите удалить модератора?"
        centered
        open={deleteUser.active}
        onOk={() => handleDelete()}
        onCancel={() => setDeleteUser({ id: "", active: false })}
      >
        <div style={{ marginTop: 10, opacity: 0 }}>/</div>
      </Modal>
      <Modal
        footer={null}
        title="Добавить нового модератора"
        centered
        open={createUser.active}
        onCancel={() => {
          setCreateUser(initialValues);
          // @ts-ignore
          formikRef.current?.resetForm();
        }}
      >
        <Formik
          validationSchema={CreateValidationSchema}
          ref={formikRef}
          initialValues={{
            name: "",
            email: "",
            id: "",
            password: "",
            role: "",
          }}
          onSubmit={handleCreate}
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
                <Typography>Имя пользователя</Typography>
                <Input
                  style={{ width: "100%" }}
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>{errors.name}</p>
                <Typography>Email</Typography>
                <Input
                  style={{ width: "100%" }}
                  value={values.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>{errors.email}</p>
                <Typography>Пароль</Typography>
                <Input
                  type="password"
                  style={{ width: "100%" }}
                  value={values.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                />
                <p style={{ color: "red", marginBottom: 10 }}>
                  {errors.password}
                </p>
                {me.role === "ADMIN" ? (
                  <>
                    <Typography>Роль</Typography>
                    <Select
                      value={values.role}
                      onChange={(e) => setFieldValue("role", e)}
                      style={{ width: "100%" }}
                      options={[
                        { value: "MODERATOR", label: "Модератор" },
                        { value: "ADMIN", label: "Админ" },
                      ]}
                    />
                  </>
                ) : null}
                <p style={{ color: "red", marginBottom: 10 }}>{errors.role}</p>
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
    </>
  );
};

export default ModeratorTable;
