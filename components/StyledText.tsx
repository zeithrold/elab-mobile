import React from 'react'
import { Text, type TextProps } from './Themed'

export function MonoText (props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />
}
