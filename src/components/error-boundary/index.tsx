import { Alert, AlertTitle } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: Error['message'];
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message };
  }

  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.log('Uncaught error:', error, errorInfo);
  // }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
          }}>
          <Box sx={{ width: 500 }}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Error Message: <strong>{this.state.message}</strong>
            </Alert>
          </Box>
        </div>
      );
    }

    return this.props.children;
  }
}
