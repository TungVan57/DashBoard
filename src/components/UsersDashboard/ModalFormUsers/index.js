import { Form, Modal, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";


const ModalFormUsers = ({open, onCancel, onSubmit,formData, loading}) => {
    const [form] = Form.useForm();

    const onCreate = async () => {
        const data = await form.validateFields();
        onSubmit(formData.id,data);
    }

    useEffect(()=>{
        if(!open){
            form.resetFields();
        }
    },[open])

    useEffect(()=>{
        if(open && formData.id){
            form.setFieldsValue(formData);
            console.log(formData);
        }
    },[open,formData])

    return(
        <Modal confirmLoading={loading} open={open} onCancel={onCancel} onOk={onCreate}>
            <Form form={form} layout="vertical">
                <Form.Item label="Name" name="name" rules={[{required:true,message:"Tên người dùng là bắt buộc!"}]}>
                    <Input placeholder="Tên người dùng"/>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required:true,message:"Email là bắt buộc!"},{type:"email", message:"Email không đúng định dạng"}]}>
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{required:true,message:"Số điện thoại là bắt buộc!"},{type:"number", message:"Số điện thoại phải là số"}]}>
                    <InputNumber placeholder="Số điện thoại"/>
                </Form.Item>
                <Form.Item label="Status" name="status" rules={[{required:true,message:"Trạng thái là bắt buộc!"}]}>
                    <Select options={[{label:"Active",value: true},{label:"Inactive", value:false}]}/>
                </Form.Item>
                <Form.Item label="Avartar" name="avatar" rules={[{required:true,message:"Hình ảnh là bắt buộc"}]}>
                    <Input placeholder="Ảnh"/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalFormUsers;