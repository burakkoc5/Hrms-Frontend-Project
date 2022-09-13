import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function Companies() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    })

    return (
        <div>
            <Menu.Item>
                İşverenler
                <Menu.Menu>
                    {
                        employers.map(employer => (
                            <Menu.Item
                                name={employer.companyName}
                                key = {employer.id}
                            >
                                {employer.companyName}
                            </Menu.Item>
                        ))
                    }

                </Menu.Menu>
            </Menu.Item>
        </div>
    )
}
