import styled from 'styled-components'
import { platformSize } from '../utils/theme';

export const GraphControlContainer = styled.div`
  display: flex;
  margin: auto;

  @media (max-width: ${platformSize.tablet}px) {
    margin-bottom: 40px;
  }
`

export const GraphContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const Title = styled.div`
  font-size: 21px;
`

export const Table = styled.div`
  padding-top: 40px;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  text-align: center;
`

export const HeaderCell = styled.div`
  width: 200px;
`

export const ContentCell = styled.div`
  width: 200px;
`