import { Switch } from '@chakra-ui/react'

import ImagePrimarySecondaryTextCell from 'components/atoms/Cell/ImagePrimarySecondaryTextCell/ImagePrimarySecondaryTextCell#1'
import ImagePrimaryTextCell from 'components/atoms/Cell/ImagePrimaryTextCell/ImagePrimaryTextCell#1'
import PrimarySecondaryTextCell from 'components/atoms/Cell/PrimarySecondaryTextCell/PrimarySecondaryTextCell#1'

import TagsCell from 'components/atoms/Cell/TagsCell/TagsCell#1'

import { Table, Td, TrInTbody, Th, Tbody, Thead } from './index'

export default {
  component: Table,
  title: 'Molecules/Table/Basic#1',
}

export const Basic = () => {
  return (
    <Table>
      <Thead>
        <Th minW="25%">Pessoa</Th>
        <Th minW="25%">Mâe</Th>
        <Th minW="20%">Data</Th>
        <Th minW="15%">Tags</Th>
        <Th minW="15%">Status</Th>
      </Thead>
      <Tbody>
        {[1, 2, 3, 4, 5].map((item) => (
          <TrInTbody key={item}>
            <Td minW="25%">
              <ImagePrimarySecondaryTextCell
                primaryText="Jorge Barros"
                secondaryText="123.856.886.09"
                src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
              />
            </Td>

            <Td minW="25%">
              <ImagePrimaryTextCell
                text="Giovanna Vasconcelos"
                src="https://randomuser.me/api/portraits/women/63.jpg"
              />
            </Td>

            <Td minW="20%">
              <PrimarySecondaryTextCell
                primaryText="17 de setembro de 2020"
                secondaryText="17:59"
              />
            </Td>

            <Td minW="15%">
              <TagsCell
                tags={[
                  { label: 'Green', value: 'Green' },
                  { label: 'Blue', value: 'Blue' },
                  { label: 'Yellow', value: 'Yellow' },
                ]}
              />
            </Td>

            <Td minW="15%">
              <Switch />
            </Td>
          </TrInTbody>
        ))}
      </Tbody>
    </Table>
  )
}
