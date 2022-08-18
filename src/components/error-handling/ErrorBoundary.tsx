import { Component } from 'react';

interface ErrorBoundaryProps {
  fallBackComponent: any;
  children: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false } as ErrorBoundaryState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
