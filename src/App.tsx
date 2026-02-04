import { Resume } from "./components/Resume";
import { DownloadPDFButton } from "./components/DownloadPDFButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faEnvelope, faMobile);

function App() {
  return (
    <>
      <DownloadPDFButton />
      <Resume />
    </>
  );
}

export default App;
