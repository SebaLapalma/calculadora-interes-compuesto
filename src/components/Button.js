import styled from 'styled-components'

const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background: violet;
    }
`

export default Button
