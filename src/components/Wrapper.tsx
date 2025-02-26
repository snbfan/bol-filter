import { PropsWithChildren, ReactElement } from 'react';

export function Wrapper({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="xs:w-100 md:w-80 px-6 pt-4 pb-6 m-4 bg-gray-50 rounded-md border-1 border-gray-300">{ children }</div>
  );
}