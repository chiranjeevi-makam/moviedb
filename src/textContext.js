import React from 'react'

const globalDataContext = React.createContext({
  search: 'avatar',
  change: () => {},
})

export default globalDataContext
