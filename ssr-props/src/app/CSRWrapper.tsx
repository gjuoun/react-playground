"use client"

import { PropsWithChildren, useEffect } from "react"

let count = 0

export const CSRWrapper = ({children, data}: PropsWithChildren<{data: any}>) => {

  useEffect(() => {
    console.log("I got data", data)
  })

  return <div >{children}</div>
}