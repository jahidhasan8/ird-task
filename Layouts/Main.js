import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer"

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
        <Main>{children}</Main>
  
        <Footer></Footer>
  
      </>
    );
};
