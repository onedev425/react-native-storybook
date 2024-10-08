import PickingService from '~/services/picking'

const group = PickingService.forPlatform({
  web: {
    sfProDisplay: 'SFProDisplay',
  },
  ios: {
    sfProDisplay: 'SFProDisplay',
  },
  android: {
    sfProDisplay: 'SF-Pro-Display',
  },
})

const separator = PickingService.forPlatform({
  web: {
    [group.sfProDisplay]: '-',
  },
  ios: {
    [group.sfProDisplay]: '-',
  },
  android: {
    [group.sfProDisplay]: '-',
  },
})

const style = {
  regular: 'Regular',
  medium: 'Medium',
  semiBold: 'Semibold',
  bold: 'Bold',
}

export default {
  style,
  group,
  separator,
}
