import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal } from "antd";
import { TableCustom, Avatar, ButtonAction,Description } from './styles';
const {confirm} = Modal;


const TableProducts = ({products, onDelete, onEdit, loading}) => {
    const showConfirm = (id) => {
        confirm({
          title: 'Bạn có muốn xóa cuốn sách này ?',
          icon: <ExclamationCircleFilled />,
          content: 'Dữ liệu sẽ mất vĩnh viễn',
          onOk() {
            onDelete(id)
          },
          onCancel() {
          },
        });
      };

    const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (_,item) =>{
                return(
                        <Description >
                        {item.description}
                        </Description>
                    
                )
            }
        },
        {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: (_,item) =>{
                return(
                    <Avatar src={item.thumbnail}/>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_,item) =>{
                return(
                    <div>
                        <ButtonAction act={"edit"} onClick={()=>{onEdit(item.id)}}>Edit</ButtonAction>
                        <ButtonAction act={"delete"} onClick={()=>{showConfirm(item.id)}}>Delete</ButtonAction>
                    </div>
                )
            }
        },
    ]

    return(
        <TableCustom columns={columns} dataSource={products} loading={loading} scroll={{
            y: 430
          }}/>
    )
}

export default TableProducts;