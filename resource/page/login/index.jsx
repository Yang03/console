import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'

import './index.scss'

const FormItem = Form.Item

class NormalLoginForm extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({type: 'USER_FETCH_REQUESTED', payload: { 'a' : 1}})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login-page">   
                <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                    rules: [{ required: true, message: '请输入邮箱!' }],
                    })(
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱地址" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button> 
                </FormItem>
                <FormItem>
                    <a href="">还没注册</a>
                </FormItem>
            </Form>
        </div>)
    }
}
const Login = Form.create()(NormalLoginForm)

function mapStateToProps(state) {
    return state 
}
export default connect(mapStateToProps)(Login)