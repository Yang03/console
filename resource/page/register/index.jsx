import React, { Component } from 'react'
import { Form, Input, Button, Select} from 'antd'
import { companyType } from '../../config/companyType' 

import './index.scss'

const FormItem = Form.Item

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
}

class NormalRegisternForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (<div className="register-page">   
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                    {...formItemLayout}
                    label="邮箱"
                >
                {getFieldDecorator('email', {
                    rules: [{
                    type: 'email', message: '邮箱地址不正确!',
                    }, {
                    required: true, message: '请输入邮箱!',
                    }],
                })(
                    <Input />
                )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码"
                    >
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: '请输入密码!',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="确认密码"
                    >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请再次输入密码!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                    >
                    {getFieldDecorator('name', {
                        rules: [{
                        required: true, message: '请输入用户名!',
                        }],
                    })(
                        <Input type="text" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="公司名称"
                    >
                    {getFieldDecorator('companyName', {
                        rules: [{
                        required: true, message: '请输入公司名称!',
                        }],
                    })(
                        <Input type="text" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                    >
                    {getFieldDecorator('mobile', {
                        rules: [{
                        required: true, message: '请输入手机号!',
                        }],
                    })(
                        <Input type="text" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="公司类型"
                    >
                    {getFieldDecorator('companyType', {
                        rules: [{
                        required: true, message: '请选择公司类型!',
                        }],
                    })(
                        <Select
                            placeholder="请选择公司类型"
                        >
                            {/* <Option value="male">male</Option>
                            <Option value="female">female</Option> */}
                            { companyType.map((item) => <option value={item.value}>{item.label}</option>)}
                        </Select>
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">注册</Button>
                </FormItem>
            </Form>
        </div>)
    }
}
const Register = Form.create()(NormalRegisternForm)
export default Register