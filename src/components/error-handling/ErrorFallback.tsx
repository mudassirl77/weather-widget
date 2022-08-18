interface ErrorFallbackProps {
  error: { message: string };
  componentStack: any;
  resetErrorBoundary: any;
}

const ErrorFallback = ({
  error,
  componentStack,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
