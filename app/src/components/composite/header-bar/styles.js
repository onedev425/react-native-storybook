import styled from 'styled-components/native'

import { Box, Title as TitleCore } from '../../core'

export const Container = styled(Box).attrs({
  bg: 'white',
  p: 5,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const Title = styled(TitleCore)`
  flex: 1;
`
