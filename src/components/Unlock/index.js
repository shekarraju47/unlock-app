import {useState} from 'react'

import {MainContainer, LockImg, Button, Heading} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocked] = useState(true)

  const lockedImg = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const Handler = () => {
    setLocked(prev => !prev)
  }
  return (
    <>
      <MainContainer>
        <h1>Hello</h1>
        <LockImg alt={isLocked ? 'lock' : 'unlock'} src={lockedImg} />
        <Heading>
          {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </Heading>
        <Button onClick={Handler}>{isLocked ? 'Unlock' : 'Lock'}</Button>
      </MainContainer>
    </>
  )
}

export default Unlock
