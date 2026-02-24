import React, { useContext } from 'react'
import { Context } from '../Context'

function Feedbek() {
    const {feedbek} = useContext(Context)
  return (
    <div>
      <h1>{feedbek}</h1>
    </div>
  )
}

export default Feedbek
