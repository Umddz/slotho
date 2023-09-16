"use client"
import { lazy, Suspense } from 'react'
import Loader from "./Loader"
import End from './End'

const S1 = lazy(() => import('./S1'))
const S2 = lazy(() => import('./S2'))
const Partners = lazy(() => import('./Partners'))

export default function Home() {
  return (
      <Suspense fallback={<Loader width="15%" center={true} />}>
          <S1 />
          <Partners />
          <S2 />
          <End />
      </Suspense>
  )
}
