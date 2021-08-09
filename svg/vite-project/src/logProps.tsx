import React from 'react'


function FancyButton(props:any) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}



function logProps(WrappedComponent: React.FunctionComponent) {
  class LogProps extends React.Component {
    componentDidMount() {
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps
}

export default logProps(FancyButton);


