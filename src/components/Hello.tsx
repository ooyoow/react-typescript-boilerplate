import * as React from "react";
import { Button } from "kv-design";

export interface HelloProps {
  compiler: string;
  framework: string;
}
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      <Button label="primary" />
    </div>;
  }
}
