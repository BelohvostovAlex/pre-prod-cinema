import { Component } from "react";

import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    this.setState({ error: error });
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <h1>{error?.message}</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
