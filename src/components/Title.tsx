import { PropsWithChildren, ReactElement } from 'react';

export function Title({ children }: PropsWithChildren): ReactElement {
  return (
    <h1 className="text-lg text-gray-600">{ children }</h1>
  )
}