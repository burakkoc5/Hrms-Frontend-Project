import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import CityService from '../services/cityService';


export default function Cities() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data))
    })

    return (
        <div><Menu.Item>
            Cities
            <Menu.Menu>
                {
                    cities.map(city => (
                        <Menu.Item
                            name={city.name}
                            key={city.id}
                        >
                            {city.name}
                        </Menu.Item>
                    ))
                }
            </Menu.Menu>
        </Menu.Item></div>
    )
}
