import AuthProvider from "./ProvideAuth";
import { useHistory } from "react-router";

function AuthButton() {
  let history = useHistory();
  let auth = AuthProvider.useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;