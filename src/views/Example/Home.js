import React from "react";
import { withRouter } from "../HOC/withRouter";
import logo from "../../assets/images/logoChannel.png";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.navigate("/todo");
        // }, 3000);
    }
    //HOC: higher order component

    render() {
        console.log(">>> check props redux ", this.props.dataRedux);

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

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};

export default connect(mapStateToProps)(withRouter(Home));
