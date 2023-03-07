import { ButtonCustoms, ButtonLarge } from './StyledComponent'


function StyleComponentWithComponent({ children }) {
    return (
        <ButtonLarge>{children}</ButtonLarge>
        // <div>Helo</div>
    );
}

export default StyleComponentWithComponent;