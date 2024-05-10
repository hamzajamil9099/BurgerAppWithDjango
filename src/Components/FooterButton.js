import styled from 'styled-components';
export const StyledButton = styled.button `
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;
    color: white;
    background-color: ${(props) => props.btnmode === 'more' ? "#8f5e1e" : "#d39952"};
    &:hover {
    background-color: ${(props) => props.btnmode === 'more' ? "##99703f" : "#d39952"};
    color: #fff;
  }
`
export const LessButton = styled(StyledButton)`
    &:disabled {
        background-color: #ac9980;
        border: 1px solid #7e7365;
        color: #ccc;
        cursor: default;
  }
`