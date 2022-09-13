import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import Cities from './Cities'
import Companies from './Companies'


export default function FilterMenu() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Input placeholder='Search...' />
                </Menu.Item>
                <Cities></Cities>
                <Companies></Companies>
                
            </Menu>
        </div>
    )
}
