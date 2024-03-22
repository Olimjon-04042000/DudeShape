import About from "./components/About";
import AllFurniture from "./components/AllFurniture";
import Companies from "./components/Companies";
import Customers from "./components/Customers";
import Header from "./components/Header";
import Info from "./components/Info";
import PopularFurnitures from "./components/PopularFurnitures";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
   <main>
    <div className="container">
      <Header/>
      <Info/>
      <Companies />
      <About />
      <PopularFurnitures />
      {/* <AllFurniture /> */}
      <Customers />
      <Subscribe />
    </div>
   </main>
  );
}
