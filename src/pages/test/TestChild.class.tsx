import { Component } from "react";
import { Button } from "antd";

interface IProps {
  name: string;
}
interface IState {
  myAge: number;
}
export class TestChildClass extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      myAge: 0,
    };
  }
  sayMe = () => {
    console.log(this.props.name);
  };
  //  事件合并test
  mergeHandler = () => {
    // this.setState({ myAge: this.state.myAge + 1 });
    // this.setState({ myAge: this.state.myAge + 1 });
    // this.setState({ myAge: this.state.myAge + 1 });
    // this.setState({ myAge: this.state.myAge + 1 });
    // this.setState({ myAge: this.state.myAge + 1 }, () => {
    //   console.log(this.state.myAge, "myAgess");
    // });
    // this.setState((state) => ({ ...state, myAge: this.state.myAge + 1 }));
    // this.setState((state) => ({ ...state, myAge: this.state.myAge + 1 }));
    // this.setState((state) => ({ ...state, myAge: this.state.myAge + 1 }));
    // this.setState((state) => ({ ...state, myAge: this.state.myAge + 1 }));
    // this.setState((state) => ({ ...state, myAge: this.state.myAge + 1 }));
    // this.setState(
    //   (state) => ({ ...state, myAge: this.state.myAge + 1 }),
    //   () => {
    //     console.log(this.state.myAge, "myAgess");
    //   }
    // );
    this.setState({ myAge: 0 });
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h1>child Class</h1>
        <Button onClick={this.mergeHandler}>事件合并test</Button>
      </div>
    );
  }
}
