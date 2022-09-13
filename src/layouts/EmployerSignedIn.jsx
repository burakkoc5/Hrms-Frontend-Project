import React,{useEffect,useState} from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { useDispatch } from 'react-redux/es/exports';
import { signOut } from '../store/actions/signInActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import EmployeeService from '../services/employeeService';
import EmployerService from '../services/employerService';
import { NavLink } from 'react-router-dom';


export default function EmployerSignedIn() {

    const { user } = useSelector((state) => state.signIn);

    const [employer, setEmployer] = useState({})

    useEffect(() => {
        let accountService = new EmployerService();
        accountService.getEmployer(user.id).then(result => setEmployer(result.data.data))
      
    }, [])
    

    const dispatch = useDispatch();

    const handleSignOut = ()=>{
      dispatch(signOut())
      console.log("Çıkış yapıldı")
    }


  return (
    <div>

        <Menu.Item>
        <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQHZ7Io--ayoPA/profile-displayphoto-shrink_400_400/0/1657130401446?e=1666828800&v=beta&t=Y3luguiF4_AGqVJjpLp03TwlysOO4BpAAvcH4Bpk_Eg"></Image>
                {console.log(user)}
                <Dropdown pointing="top left" text={employer.companyName}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgiler" icon="info" />
                        <Dropdown.Item as={NavLink} to='/employer/addJobAdv' text="İş ilanı ekle" icon="add" />
                        <Dropdown.Item as={NavLink} to='/employer/myAdvertisements' text="İş İlanlarım" icon="add" />
                        <Dropdown.Item onClick={handleSignOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
        </Menu.Item>
    </div>
  )
}
