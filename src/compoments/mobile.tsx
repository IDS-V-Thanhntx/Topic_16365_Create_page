import '../scss/Mobile.scss';
import Image from 'react-bootstrap/Image'
import logo from '../asset/logo.png'
import google from '../asset/google-icon.png'
import line from '../asset/line-icon.png'
import { Form, InputGroup } from 'react-bootstrap';   
const Mobile = () => (
  <div className='PageOne'>
  <div className='logo flex justify-center mb-0.5'>
      <Image src={logo}/>
  </div>
  <div className='inline justify-center mt-28 w-full'>
      <div className='mx-auto p-10 w-3/4 col'>
          <Form className='login bg-white rounded'>
              <label className='label-content block text-center mt-10 text-xl'>ログイン</label>
              <div className='w-75 m-auto'>
                  <InputGroup>
                  <label className='label-input'>ログインID</label>
                  <Form.Control
                      placeholder='メールアドレスまたは電話番号'
                  />
                  </InputGroup>
                  <InputGroup>
                  <label className='label-input'>パスワード</label>
                  <Form.Control
                      className="input-email"
                      placeholder='パスワード'
                  />
                  </InputGroup>
                  <InputGroup>
                      <Form.Check 
                          label='ログイン情報を保存する'
                          className='font-normal'
                      />
                  </InputGroup>
              </div>
              <div className='flex'>
                  <button className="btn flex m-auto" type="submit">ログイン</button>
              </div>
          </Form>
          <a href='#' className='link block text-center'>パスワードをお忘れですか？</a>
      </div>
      <div className='col mr-64 mx-auto p-10 w-3/4 col'>
          <Form className='span bg-white rounded'>
          <label className='label-content block text-center mt-10 text-xl'>他サービスIDでログイン</label>
          <div className='mx-auto mt-[43px]'>
              <button className='flex link-icon m-auto flex ml-4'>
                  <div className='flex width-full my-auto ml-5'>
                      <Image src={line} className='w-10 h-10'/>
                      <label className='mt-2 ml-5'>LINE</label>
                  </div>
              </button>
              <button className='flex link-icon m-auto ml-4'>
                  <div className='flex width-full my-auto ml-5'>
                      <Image src={google} className='w-10 h-10'/>
                      <label className='mt-2 ml-5'>Google</label>
                  </div>
              </button>
          </div>
          </Form>
      </div>
  </div>
  <div className='footer'>
  <div className='flex mt-3 ml-2'>
      <a href='#' >個人情報保護法</a>
      <a href='#' className='ml-6'>運営会社</a>
      <label className='text-white absolute right-0 mr-8'>©2021 株式会社家価値サポート</label>
  </div>
  </div>
</div>
)

export default Mobile;