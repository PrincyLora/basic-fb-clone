import React from 'react'

function Unorderedlisttest({items}) {
  return (
    <div>
        <ul>
{items.map((item,i)=><li key={i}>{item}</li>)}
</ul>
    </div>
  )
}

export default Unorderedlisttest
