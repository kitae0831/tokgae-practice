import React from 'react'

import { HStack, Switch, Text } from '@chakra-ui/react'

import TemplateLayout from '@/components/@Templates/TemplateLayout'

import AlertExample from './components/AlertExample'
import ButtonExample from './components/ButtonExample'
import CheckboxExample from './components/Checkbox'
import { InputSection } from './components/InputSection'
import RadioExample from './components/Radio'
import Section from './components/Section'
import SwitchExample from './components/Switch'

const Components = () => {
  const [isDisable, setIsDisable] = React.useState(false)
  return (
    <TemplateLayout
      w={'100%'}
      title={'Components'}
      gap={'20px'}
      p={'100px'}
      alignItems={'center'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <HStack>
        <Text textStyle={'heading-02'}>Toggle Disable</Text>
        <Switch
          isChecked={isDisable}
          onChange={(e) => setIsDisable(e.target.checked)}
        />
      </HStack>
      <Section title={'Radio'}>
        <RadioExample isAllDisable={isDisable} />
      </Section>
      <Section title={'Switch'}>
        <SwitchExample isAllDisable={isDisable} />
      </Section>
      <Section title={'Checkbox'}>
        <CheckboxExample isAllDisable={isDisable} />
      </Section>
      <Section title={'Input'}>
        <InputSection />
      </Section>
      <Section title={'Button'}>
        <ButtonExample />
      </Section>
      <Section title={'Alert'}>
        <AlertExample />
      </Section>
    </TemplateLayout>
  )
}

export default Components
