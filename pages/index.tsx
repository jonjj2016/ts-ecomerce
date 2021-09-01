import { useEffect } from "react";
import play from '../playground';

export default function Home() {
useEffect(() => {
  play()
}, [])
  const message: string = 'Hello World';
  
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}
