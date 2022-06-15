import React from 'react'
import { Button } from 'antd'


export default function antd1() {
  return (
    <div>
      <Button type='primary' danger ghost={false} loading={false} onClick={() => {
        console.log('antd')
      }}>antd</Button>
    </div>
  )
}
