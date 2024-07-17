import * as React from "react";

export default class VectorAuthHeaderLogo extends React.PureComponent {
    public render(): React.ReactElement {
        const logoUrl = "res/vector-icons/my_logo.png";

        return (
            <aside className="mx_AuthHeaderLogo">
                <img src={logoUrl} alt="Astrobyte Connect" style={{ height: '54px', marginTop: '2px' }} />
            </aside>
        );
    }
}
