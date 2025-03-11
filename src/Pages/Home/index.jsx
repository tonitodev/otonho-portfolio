import Header from '../../Components/Header';
import ProjectsList from '../../Components/ProjectsList';
import MyOverview from '../../Components/MyOverview';

function Home () {
  return (
    <>

      <Header />
      <main>
        <ProjectsList />
        <MyOverview />
        {/* <Bio /> */}
      </main>
{/*       <Footer /> */}
    </>
  )
}

export default Home