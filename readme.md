# Styled react native components
### For easy styling of react native components and its style composition

**Read more about this package in [this Medium article - Advanced React Native styling with a few lines of code](https://medium.com/@JSifalda/advanced-react-native-styling-with-a-few-lines-of-code-4b6a94385015)**

## Usage
```js
  import styled from 'styled-react-native'
  import { Text } from 'react-native'

  const Headline = styled(Text)(() => {
    return {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
  })

  const BoldHeadline = styled(Headline)(() => {
    return {
      fontWeight: 'bold'
    }
  })
```

or

```js
  import styled from 'styled-react-native'
  import { Text } from 'react-native'

  const Headline = styled(Text)
  <Headline {...{style: {color: 'red'}}} />
```
