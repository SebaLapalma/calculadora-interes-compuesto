import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  &@media screen (max-width 600px){
    width: 100%;
  }
`

export default Container