import React, {useState} from 'react'
import PrimaryInput from '../../../components/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton'
import Heading from '../../../components/Heading'
import { loggingin } from '../../../redux/Login'
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                triggerclick={() => loggingin(email, password)}
                label={'Login'}
              />
            </div>
  
            
          </div>
        </div>
       
      </>
    )
}

export default LoginForm
