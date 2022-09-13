import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default function Footer() {
  return (
    <div>
      <Menu secondary inverted fixed='bottom' widths={5} color="teal">
        <Container>
        <Menu.Item
          icon="copyright outline"
          name='All rights reserved 2022'
        />
        <Menu.Item
          name='About'
        />
        <Menu.Item
          name='Terms of Use'
        />
        <Menu.Item
          name='Contact Us'
        />
        <Menu.Item
          name='Privacy policy'

        />
        </Container>
      </Menu>
    </div>
  )
}
