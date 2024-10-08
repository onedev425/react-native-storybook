import React, { useState, useCallback } from 'react'
import { TouchableWithoutFeedbackProps } from 'react-native'
import noop from 'lodash/noop'
import { Title, Text } from '~/components/core'

import { Container, InnerBase, GradientBack } from './styles'

export interface IGradientButton extends TouchableWithoutFeedbackProps {
  active?: boolean
  title: string
  description: string
  onPress?: () => void
}

/**
 * `<GradientButton>`
 *
 * @param {object} props
 * @param {boolean} props.active - Button's state.
 * @return {React.ReactNode}
 */
const GradientButton: React.FC<IGradientButton> = ({
  active = false,
  title,
  description,
  onPress = noop,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = useCallback(() => {
    setIsPressed(true)
  }, [setIsPressed])

  const handlePressOut = useCallback(() => {
    setIsPressed(false)
  }, [setIsPressed])

  return (
    <Container
      active={active}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <InnerBase
        testID={`ButtonInner${active ? 1 : 0}`}
        isPressed={isPressed}
        active={active}
      >
        {active && <GradientBack />}

        <Title
          variant="header"
          color={active ? 'white' : 'textSecondary'}
          zIndex={1}
          noselect
        >
          {title}
        </Title>

        <Text
          fontSize="body1"
          color={active ? 'white' : 'textSecondary'}
          zIndex={1}
          noselect
        >
          {description}
        </Text>
      </InnerBase>
    </Container>
  )
}

export { GradientButton }
