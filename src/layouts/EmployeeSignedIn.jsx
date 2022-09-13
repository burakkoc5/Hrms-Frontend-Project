import React,{useState, useEffect} from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { useDispatch } from 'react-redux/es/exports';
import { signOut } from '../store/actions/signInActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import EmployeeService from '../services/employeeService';


export default function EmployeeSignedIn() {

    const { user } = useSelector((state) => state.signIn);

    const [employee, setEmployee] = useState({})

    const dispatch = useDispatch();

    const handleSignOut = ()=>{
      dispatch(signOut())
      console.log("Çıkış yapıldı")
    }

    
    useEffect(() => {
      
      let accountService = new EmployeeService();
      accountService.getEmployee(user.id).then(result => setEmployee(result.data.data))

    }, [])
    
    


  return (
    <div>

        <Menu.Item>
        <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQHZ7Io--ayoPA/profile-displayphoto-shrink_400_400/0/1657130401446?e=1666828800&v=beta&t=Y3luguiF4_AGqVJjpLp03TwlysOO4BpAAvcH4Bpk_Eg"></Image>
                {console.log(user)}
                <Dropdown pointing="top left" text={employee.name}>
                    <Dropdown.Menu>ta)
                        <Dropdown.Item text="Bilgiler" icon="info" />
                        <Dropdown.Item onClick={handleSignOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
        </Menu.Item>
    </div>
  )
}
