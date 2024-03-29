import styled from 'styled-components'
import FolderIcon from '../../assets/Folder.svg'

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 24px auto 0;
  
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  padding: 25px 24px;
  
  label{
    max-width: 400px;
  }
`

export const About = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media screen and (max-width: 380px){
    flex-direction: column;
  }
`
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  
  background: #D5E4F7;
  border-radius: 50%;

  position: relative;

  &::before {
    display: block;
    content: 'НЧ';
  }
  
`
export const Name = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
`
export const List = styled.ul`
  display: flex;
  gap: 16px;

  list-style: none;

  li {
    display: flex;
    gap: 4px;

    &::before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-image: url(${FolderIcon})
    }
  }
  @media screen and (max-width: 380px){
    flex-direction: column;
  }
`
export const SimpleLink = styled.a`
  font-size: 12px;
  line-height: 16px;

  color: var(--purple);
  text-decoration: none;

  &:hover {
    color: #484BD5;
  }
`

export const Divider = styled.hr`
  height: 1px;
  border: 1px solid #00000014;
`
export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap:24px;
  button{
    margin-top: 24px;
  }
`
