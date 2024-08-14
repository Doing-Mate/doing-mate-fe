import { auth, githubProvider, googleProvider } from "./firebase";
import { onAuthStateChanged, signInWithPopup, User } from "firebase/auth";

class Auth {
  login(name: string) {
    const provider = this.getProvider(name);
    return signInWithPopup(auth, provider);
  }
  getProvider(name: string) {
    switch (name) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  }

  logout() {
    return auth.signOut();
  }

  onAuthChange = (callback: (user: User) => void) => {
    onAuthStateChanged(auth, (user) => {
      callback(user!);
    });
  };
}
export default Auth;
