import "./App.css";
import Layout from "./components/Layout.js";
import { Container, Content, Errorboundarypage } from "./components";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  let navigate = useNavigate();
  return (
    <Container>
      <Layout />

      <ErrorBoundary
        FallbackComponent={Errorboundarypage}
        onReset={() => {
          navigate("/");
        }}
      >
        <Content>
          <AppRouter />
        </Content>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
