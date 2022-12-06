import React, { useState } from 'react';
import './scss/App.scss';
import Image from 'react-bootstrap/Image'
import logo from './asset/logo.png'
import google from './asset/google-icon.png'
import line from './asset/line-icon.png'
import { Form, InputGroup, ToggleButton } from 'react-bootstrap';

function App() {
  return (
    <div className='PageOne'>
        <div className='logo'>
        <Image src={logo} className='m-auto'/>
        </div>
        <Form className='login bg-white rounded'>
          <label className='block text-center fw-bold mb-6 mt-8 text-xl'>ログイン</label>
          <div className='w-75 m-auto'>
            <InputGroup>
              <label className='label-input'>ログインID</label>
              <Form.Control
                placeholder='Hello'
              />
            </InputGroup>
            <InputGroup className='mt-4'>
              <label className='label-input'>パスワード</label>
              <Form.Control
                placeholder='Hello'
              />
            </InputGroup>
            <InputGroup className="mb-4 ml-24 mt-4">
              <input type="checkbox" className='mr-2 h-5 w-5'/>
              ログイン情報を保存する
            </InputGroup>
          </div>
          <div className='flex'>
            <button className="btn flex m-auto" type="submit">ログイン</button>
          </div>
        </Form>
        <a href='#' className='ahref'>パスワードをお忘れですか？</a>
        <Form className='span bg-white rounded'>
          <label className='block text-center fw-bold mb-6 mt-8 text-xl'>他サービスIDでログイン</label>
          <div className='m-auto'>
            <InputGroup className='link-icon m-auto'>
              <button className='flex my-auto ml-4'>
                <Image src={line} className='w-10 h-10'/>
                <label className='mt-2'>LINE</label>
              </button>
            </InputGroup>
            <InputGroup className='link-icon mt-6 mx-auto'>
              <button className='flex my-auto ml-4'>
                <Image src={google} className='w-10 h-10'/>
                <label className='mt-2'>Google</label>
              </button>
            </InputGroup>
          </div>
        </Form>
        <div className='footer'>
          <div className='flex mt-3 ml-2'>
            <a href='#' >個人情報保護法</a>
            <a href='#' className='ml-6'>運営会社</a>
            <label className='text-white absolute right-0 mr-8'>©2021 株式会社家価値サポート</label>
          </div>
        </div>
    </div>
  );
}

export default App;
