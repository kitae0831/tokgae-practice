import { checkboxAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(() => ({
  control: {
    borderColor: 'content.6',
    background: 'transparent',
    borderRadius: '3px',
    _hover: {
      background: 'transparent',
      borderColor: 'content.6',
    },
    _indeterminate: {
      background: 'primary.3',
      borderColor: 'primary.3',
      _hover: {
        background: 'primary.3',
        borderColor: 'primary.3',
      },
    },
    _checked: {
      background: 'primary.3',
      borderColor: 'primary.3',
      _hover: {
        background: 'primary.3',
        borderColor: 'primary.3',
      },
    },
    _disabled: {
      color: 'content.7',
      borderColor: 'content.7',
      background: 'transparent',
      _hover: {
        color: 'content.7',
        borderColor: 'content.7',
        background: 'transparent',
      },
      _checked: {
        background: 'primary.2',
        borderColor: 'primary.2',
        color: 'content.8',
        _hover: {
          background: 'primary.2',
          color: 'content.8',

          borderColor: 'primary.2',
        },
      },
    },
  },
  label: {
    ml: '4px',
    color: 'text.tertiary',
    transition: 'all 0.2s ease-in-out',
    lineHeight: '24px',

    _hover: {
      color: 'text.tertiary',
    },

    _focus: {
      color: 'text.primary',
    },

    _checked: {
      color: 'text.primary',

      _hover: {
        color: 'text.primary',
      },
    },
  },
}))

const sizes = {
  sm: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px', p: '2px' },
    label: { ...textStyles['pre-body-02'] },
  }),
  md: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px' }, // p 2px 안됨
    label: { ...textStyles['pre-body-02'] },
  }),
  lg: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px' },
    label: { ...textStyles['pre-body-01'] },
  }),
}

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
export default Checkbox
