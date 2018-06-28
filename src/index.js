import React from 'react'
import { StyleSheet } from 'react-native'

const styled = Component => {
  const comp = styles => {
    return ({ style, children, ...rest }) => {
      let composed = []
      if (styles) {
        composed = [
          ...composed,
          StyleSheet.create({
            styles
          }).styles
        ]
      }

      if (Array.isArray(style)) {
        composed = [...composed, ...style]
      } else if (style) {
        composed = [
          ...composed,
          StyleSheet.create({
            style
          }).style
        ]
      }

      return <Component {...{ style: composed }} {...rest}>{children}</Component>
    }
  }

  return arg => {
    if (typeof arg === 'function') {
      return comp(arg())
    }

    return comp()(arg)
  }
}

export default styled
