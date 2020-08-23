import React, {Component, Fragment} from 'react';
import ComponentF from "./ComponentF";
import {UserConsumer} from "./userContextParentComponent";

class ComponentE extends Component {
    render() {
        return (
            <Fragment>
                <ComponentF/>
                {/*<UserConsumer>*/}
                {/*    {*/}
                {/*        (theValuePassed) => {*/}
                {/*            return <div>Component E:  {theValuePassed}</div>*/}
                {/*        }*/}
                {/*    }*/}
                {/*</UserConsumer>*/}
            </Fragment>
        );
    }
}

export default ComponentE;