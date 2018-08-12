import styled from 'styled-components'
import { platformSize } from './utils/theme';

export const Header = styled.div`
  margin: 50px;
`

export const Title = styled.div`
  font-size: 21px;
`

export const Content = styled.div`
  margin: 50px;

  @media (max-width: ${platformSize.tablet}px) {
    margin: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const ContentContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: row;

  @media (max-width: ${platformSize.tablet}px) {
    flex-direction: column;
    height: 100%
  }
`

export const Footer = styled.div`
  margin: 50px;
`