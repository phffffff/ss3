import styled from "styled-components"

const ButtonCustoms = styled.button`
    font-size: 1rem;
    background-color: red;
    color: ${props => props.fontColor || 'white'}
`

const ButtonLarge = styled(ButtonCustoms)`
    padding: 10px 20px;
    outline: none;
    border: none;
`
export {
    ButtonCustoms,
    ButtonLarge,
}