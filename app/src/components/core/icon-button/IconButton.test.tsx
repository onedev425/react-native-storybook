import React from 'react'
import { View } from 'react-native'
import { render, fireEvent, RenderAPI } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'

import { withTheme } from '~/theme/hocs'
import { Icons } from '~/assets'

import { IconButton } from './IconButton'

describe('IconButton', function () {
  let screen: RenderAPI
  let handlePress: jest.Mock
  let button: ReactTestInstance

  beforeEach(() => {
    handlePress = jest.fn()

    const InnerScreen = () => (
      <View testID="Root">
        <IconButton
          onPress={handlePress}
          icon={<Icons.CircularArrow testID="IconButton" />}
          accessibilityLabel="This is the text"
          text="This is the text"
        />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />)
    button = screen.getByTestId('IconButton')
  })

  it('should render', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByTestId('IconButton'),
    )
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByText('This is the text'),
    )
  })

  it('should click', () => {
    fireEvent.press(button)
    expect(handlePress).toHaveBeenCalledTimes(1)
  })

  it('should have accessibility label', () => {
    expect(screen.getByTestId('Root')).toContainElement(
      screen.getByLabelText('This is the text'),
    )
  })
})
