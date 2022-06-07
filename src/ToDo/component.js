import styled from 'styled-components'

export const Remove = styled.button`
    background-color: #ba1e13;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    color: #fff;
    border: none;
    text-align:center;

    :hover {background-color: #96170e}
  `
  
  export const TodoIt = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: .5rem;
        margin-right: .5rem;
        max-width: 576px;
        overflow-y: scroll;
        
       ::-webkit-scrollbar {
       width: 12px;
       height: 10px;
       }

       ::-webkit-scrollbar-thumb {
       background: #434343;
       border-radius: 10px;
       margin: 20px;
       }
  `

  export const TodoBox = styled.ul`
        listStyle: none;
        margin : 0;
        padding: 0;
        max-height: 430px;
        overflow-y: scroll; 
        

::-webkit-scrollbar {
width: 12px;
height: 10px;
}

::-webkit-scrollbar-thumb {
background: #434343;
border-radius: 10px;
margin: 20px;
}
  `