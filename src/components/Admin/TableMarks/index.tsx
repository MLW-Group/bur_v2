// import React, { useRef, useState } from "react";
// // import "./index.css";
// // import { SearchOutlined } from "@ant-design/icons";
// import { GetRef, TableColumnsType, TableColumnType } from "antd";
// import { Button, Input, Space, Table } from "antd";
// import type { FilterDropdownProps } from "antd/es/table/interface";
// type InputRef = GetRef<typeof Input>;

// interface DataType {
//     id: string;
//     name: string;
//     description: number;
//     longitude: string;
//     latitude: string;
//     markerColor: string;
// }

// type DataIndex = keyof DataType;

// // const data: DataType[] = [
// //     {
// //         key: "1",
// //         name: "John Brown",
// //         age: 32,
// //         address: "New York No. 1 Lake Park",
// //     },
// //     {
// //         key: "2",
// //         name: "Joe Black",
// //         age: 42,
// //         address: "London No. 1 Lake Park",
// //     },
// //     {
// //         key: "3",
// //         name: "Jim Green",
// //         age: 32,
// //         address: "Sydney No. 1 Lake Park",
// //     },
// //     {
// //         key: "4",
// //         name: "Jim Red",
// //         age: 32,
// //         address: "London No. 2 Lake Park",
// //     },
// // ];

// export default function TableMarks({ marks, deleteMark }) {
// const [searchText, setSearchText] = useState("");
// const [searchedColumn, setSearchedColumn] = useState("");
// const searchInput = useRef<InputRef>(null);

// const handleSearch = (
//     selectedKeys: string[],
//     confirm: FilterDropdownProps["confirm"],
//     dataIndex: DataIndex
// ) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
// };

// const handleReset = (clearFilters: () => void) => {
//     clearFilters();
//     setSearchText("");
// };


//     const columns: (TableColumnsType<DataType> & { editable?: boolean; }) = [
//         {
//             title: "Название",
//             dataIndex: "name",
//             key: "name",
//             width: "10%",
//             editable: true,
//             ...getColumnSearchProps("name"),
//         },
//         {
//             title: "Описание",
//             dataIndex: "description",
//             key: "description",
//             width: "10%",
//             editable: true,
//             ...getColumnSearchProps("description"),
//         },
//         {
//             title: "Цвет маркера",
//             dataIndex: "markerColor",
//             key: "markerColor",
//             width: "10%",
//             editable: true,
//             ...getColumnSearchProps("markerColor"),
//         },
//         {
//             title: 'Action',
//             dataIndex: '',
//             key: 'id',
//             width: "10%",
//             render: (obj) => {
//                 return (
//                     <div style={{
//                         display: 'flex',
//                         gap: 10
//                     }}>
//                         <a onClick={() => deleteMark(obj.id)}>Delete</a>
//                         <a onClick={() => deleteMark(obj.id)}>Change</a>
//                     </div>
//                 )
//             },
//         },
//     ];

//     return <Table columns={columns} dataSource={marks} />;
// };

import React, { useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, InputRef, Popconfirm, Space, Table, TableColumnType, Typography } from 'antd';
import axios from 'axios';
import { FilterDropdownProps } from 'antd/es/table/interface';


interface Item {
    id: string;
    name: string;
    markerColor: number;
    description: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
interface DataType {
    id: string;
    name: string;
    description: number;
    longitude: string;
    latitude: string;
    markerColor: string;
}
type DataIndex = keyof DataType;
export default function TableMarks({ marks, deleteMark, getAllMarks, token }) {
    const [form] = Form.useForm();
    const [data, setData] = useState(marks);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: Item) => record.id === editingKey;

    const edit = (record) => {
        form.setFieldsValue({ name: '', description: '', markerColor: '', ...record });
        setEditingKey(record.id!);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            const { data } = await axios.post(
                `https://bur-api.macwel.app/api/v1/marker/update`,
                {
                    id: key,
                    name: row.name,
                    description: row.description,
                    markerColor: row.markerColor
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            getAllMarks();
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const searchInput = useRef<InputRef>(null);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps["confirm"],
        dataIndex: DataIndex
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (
        dataIndex: DataIndex
    ): TableColumnType<DataType> => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys as string[], confirm, dataIndex)
                    }
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys as string[], confirm, dataIndex)
                        }
                        // icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),

        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
    });

    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            width: '40%',
            editable: true,
            ...getColumnSearchProps("name"),
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            width: '25%',
            editable: true,
        },
        {
            title: 'Цвет',
            dataIndex: 'markerColor',
            width: '10%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
                            Сохранить
                        </Typography.Link>
                        <Typography.Link onClick={cancel}>
                            <a>Отменить</a>
                        </Typography.Link>
                    </span>
                ) : (
                    <span>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Изменить
                        </Typography.Link>
                        <Typography.Link style={{ marginLeft: 10 }} onClick={() => deleteMark(record.id)}>
                            Удалить
                        </Typography.Link>
                    </span>
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        // @ts-ignore
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <div
            style={{ background: 'white' }}>

            <Form form={form} component={false} >
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={marks}
                    // @ts-ignore
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>
    );
};
