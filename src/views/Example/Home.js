import React from "react";
import { useNavigate } from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {
    return <WrappedComponent {...props} navigate={useNavigate()} />;
};

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigate("/todo");
        }, 3000);
    }
    //HOC: higher order component

    render() {
        return <div>Hello world from Homepage with Eric & Hoi Dan IT</div>;
    }
}

export default withRouter(Home);
