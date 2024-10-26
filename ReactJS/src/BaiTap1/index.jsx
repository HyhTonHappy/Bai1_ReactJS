import Header from "./header.jsx";
import MainContent from "./main_content.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
function BaiTap1() {
    return(
      <div>
      <Header />
      <div className="container">
        <MainContent />
      </div>

        <div className="container">
        <Cards/>
        </div>

            <Footer />
      </div>  
    );
}
export default BaiTap1;