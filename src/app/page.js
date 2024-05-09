
import { Header } from "./Components/Header";
import { ProjectPage } from "./Components/ProjectPage";


export default function Home() {
  return (
    <main className="main">
      
      {/* Page 1: Présentation */}
      <section className="page1">

        {/* Photo, intro + compétences, navigation, alerte recherche d'alternance */}
        {/* Poissons que ici */}

        {/* Header (Photo + HeaderText) */}
        <Header />

        {/* Composant sideNav */}
        
      </section>


      {/* Page 2: Parcours */}
      <section className="page2">


        {/* Composant sideNav */}
        
      </section>


      {/* Page 3: Projets */}
      <section className="page3">

        {/* Composants iframes */}
        <ProjectPage />

        {/* Composant sideNav */}
      
      </section>


      {/* Page 4: Photographie, animations */}
      <section className="page4">


        {/* Composant sideNav */}
      
      </section>

    </main>
  );
}
