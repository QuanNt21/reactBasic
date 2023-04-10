import React from "react";
import { withRouter } from "../HOC/withRouter";
import logo from "../../assets/images/logoChannel.png";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigate("/todo");
        }, 3000);
    }
    //HOC: higher order component

    render() {
        return (
            <>
                <div>Hello world from Homepage with Eric & Hoi Dan IT</div>
                <div>
                    <img
                        src={logo}
                        style={{
                            width: "200px",
                            height: "200px",
                            marginTop: "20px",
                        }}
                    />
                </div>
            </>
        );
    }
}

export default withRouter(Home);
