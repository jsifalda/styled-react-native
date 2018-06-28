# Styled react native components
### For easy styling of react native components and its style composition

## Usage
```js
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
  const Headline = styled(Text)

  <Headline {...{style: {color: 'red'}}} />
```
