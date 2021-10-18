import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {useHistory} from 'react-router-dom'
import PrimaryInput from '../../../components/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton'
import Heading from '../../../components/Heading'
import { loggingin } from '../../../redux/Login'
function LoginForm() {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [buttonmessage, setButtonmessage] = useState('login')
    const history = useHistory()

    const handleclick = (email:string,password:string) => {
      setButtonmessage('loading.........')
      loggingin(email, password)
      setTimeout(() => {
        if (localStorage.getItem('success') === null) {
          toast(localStorage.getItem('error'))
        }else{
          history.push('/dashboard')
        }
        setButtonmessage('login')
      }, 3000);
    }
    return (
        <>
        <div className="w-full bg-green-appgreen h-screen flex justify-center items-center">
          <div>
            <Heading label={"Open Your Book"} />
            <div>
              <PrimaryInput
                label={"Email"}
                triggerchange={(e:any) => setEmail(e.target.value)}
                type={"email"}
              />
              <PrimaryInput
                label={"Password"}
                triggerchange={(e:any) => setPassword(e.target.value)}
                type={"password"}
              />
              <PrimaryButton
                triggerclick={() => handleclick(email, password)}
                label={buttonmessage}
              />
            </div>
            <Toaster />
            
          </div>
        </div>
       
      </>
    )
}

export default LoginForm
