import * as React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Define types for props
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorPage extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log the error to an error reporting service if necessary
    console.log("Error:", error, "Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback />
      );
    }

    return this.props.children;
  }
}

// Separate component to handle navigation
const ErrorFallback: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <h1>Internal Server Error</h1>
      <p>Ooops! Something went wrong, you should go back.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export { ErrorPage };
