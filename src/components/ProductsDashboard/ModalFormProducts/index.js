import { Form, Modal, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";


const ModalFormProducts = ({open, onCancel, onSubmit,formData, loading}) => {
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
                <Form.Item label="Name" name="name" rules={[{required:true,message:"Tên sản phẩm là bắt buộc!"}]}>
                    <Input placeholder="Tên sản phẩm"/>
                </Form.Item>
                <Form.Item label="Code" name="code" rules={[{required:true,message:"Mã sản phẩm là bắt buộc!"}]}>
                    <Input placeholder="Mã sản phẩm"/>
                </Form.Item>
                <Form.Item label="Price" name="price" rules={[{required:true,message:"Giá sản phẩm là bắt buộc!"},{type:"number", message:"Số điện thoại phải là số"}]}>
                    <InputNumber placeholder="Giá sản phẩm"/>
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{required:true,message:"mô tả là bắt buộc!"}]}>
                    <Input placeholder="Mô tả"/>
                </Form.Item>
                <Form.Item label="Thumnail" name="Thumbnail" rules={[{required:true,message:"Ảnh sản phẩm là bắt buộc"}]}>
                    <Input placeholder="Ảnh sản phẩm"/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalFormProducts;