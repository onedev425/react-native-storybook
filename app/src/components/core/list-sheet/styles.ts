import styled from 'styled-components/native'
import { TouchableWithoutFeedbackProps, Dimensions } from 'react-native'

import { getMetrics, getSpace } from '~/theme'

import { Box, IBox } from '../box'

export const getMaxHeight = (props) => {
  const { height } = Dimensions.get('window')
  return props.maxHeight || height * 0.9
}

export const getBottomSpace = (props, isExtra = false) => {
  const bottomSpace = getMetrics('bottomSpace')(props)
  const contentBottomSpace = bottomSpace > 0 ? 0 : getSpace('sm')(props)

  return isExtra ? bottomSpace + contentBottomSpace : contentBottomSpace
}

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const Overlay = styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>``

export const OverlayBackground = styled(Box).attrs({
  bg: 'black',
})<IBox>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Body = styled(Box).attrs((props) => {
  return {
    pb: getMetrics('bottomSpace')(props),
    bg: 'white',
    btlr: 3,
    btrr: 3,
  }
})``

export const Header = styled(Box).attrs({
  px: 'md',
  height: 60,
})`
  flex-direction: row;
  align-items: center;
`

export const Content = styled.ScrollView.attrs((props) => ({
  keyboardShouldPersistTaps: 'handled',

  contentContainerStyle: {
    paddingBottom: getBottomSpace(props),
  },
}))``
