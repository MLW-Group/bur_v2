
import React, { useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, InputRef, Popconfirm, Select, Space, Table, TableColumnType, Typography } from 'antd';
import axios from 'axios';
import { FilterDropdownProps } from 'antd/es/table/interface';


interface Item {
    id: string;
    name: string;
    markerColor: number;
    colorLabel?: string;
    description: string;
}
interface Marks {
    id: string;
    name: string;
    markerColor: number;
    colorLabel?: string;
    latitude: string;
    longitude: string;
    description: string;
}[]
interface MarksColor {
    value: string;
    label: string
}[]
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
const colorsMapping = [
    { value: '#ed4543', label: 'красный' },
    { value: '#1e98ff', label: 'светло синий' },
    { value: '#177bc9', label: 'темно синий' },
    { value: '#1bad03', label: 'темно зеленый' },
    { value: '#595959', label: 'серый' },
    { value: '#56db40', label: 'зеленый' },
    { value: 'red', label: 'красный' },
]

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
    const inputNode = dataIndex === 'colorLabel' ? <Select
        options={colorsMapping} /> : <Input />;

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
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record: Item) => record.id === editingKey;

    const edit = (record) => {
        form.setFieldsValue({ name: '', description: '', markerColor: '', ...record });
        setEditingKey(record.id!);
    };

    const cancel = () => {
        setEditingKey('');
    };
    function getColorLabel(colorValue, colorMappings) {
        for (let i = 0; i < colorMappings.length; i++) {
            if (colorMappings[i].value === colorValue) {
                return colorMappings[i].label;
            }
        }
        return 'неизвестный цвет';
    }

    function assignColors(dataArray: Marks[], colorMappings: MarksColor[]) {
        const coloredDataArray = [];
        for (let i = 0; i < dataArray.length; i++) {
            const item = dataArray[i];
            const colorLabel = getColorLabel(item.markerColor, colorMappings);
            const coloredItem = { ...item, colorLabel: colorLabel };
            // @ts-ignore
            coloredDataArray.push(coloredItem);
        }
        return coloredDataArray;
    }
    const newMarks = assignColors(marks, colorsMapping);
    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            const { data } = await axios.post(
                `https://bur-api.macwel.app/api/v1/marker/update`,
                {
                    id: key,
                    name: row.name,
                    description: row.description,
                    markerColor: row.colorLabel
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
            dataIndex: 'colorLabel',
            width: '15%',
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
                    dataSource={newMarks}
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
