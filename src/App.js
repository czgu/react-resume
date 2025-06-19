import { Resume } from "./components/resume";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faEnvelope, faMobile);

function App() {
  return <Resume />;
}

export default App;
