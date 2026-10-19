import Navbar from "./sharedComponents/Navbar.jsx";
import Hero from "./sharedComponents/Hero.jsx";
import Footer from "./sharedComponents/Footer.jsx";
import Cards from "./sharedComponents/Cards.jsx";
import "./App.css";

// Would be in a separate file if it were a big project
// Reusable cards component grabbing data from na array
const cards = [
  {
    id: 1,
    image: "https://marketing.org.nz/hs-fs/hubfs/Marketing%20South%202026%20Featured%20image-2.png?width=382&height=226&name=Marketing%20South%202026%20Featured%20image-2.png",
    title: "Card One",
    subtitle: "1 One First Uno",
  },
  {
    id: 2,
    image: "https://marketing.org.nz/hs-fs/hubfs/2026LearningandDevelopment/Images/Listing%20Images/CritThink-F2F.png?width=382&name=CritThink-F2F.png",
    title: "Card Two",
    subtitle: "2 Two Second Dos",
  },
  {
    id: 3,
    image: "https://marketing.org.nz/hs-fs/hubfs/Mark%20Ritson%20Event%202026%20-%20Featured%20Image%20-%20(382x226px).png?width=382&name=Mark%20Ritson%20Event%202026%20-%20Featured%20Image%20-%20(382x226px).png",
    title: "Card Three",
    subtitle: "3 Three Third Tres",
  },
  {
    id: 4,
    image: "https://wallpapercave.com/wp/wp2808032.jpg",
    title: "Card Four",
    subtitle: "4 Four Quatro",
  },
  {
    id: 5,
    image: "https://d7hftxdivxxvm.cloudfront.net/?quality=85&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910",
    title: "Card Five",
    subtitle: "5 Five Fifth Sinco",
  },
  {
    id: 6,
   image: "https://static.wikitide.net/windowswallpaperwiki/2/2b/Img24_%28Windows_Vista%29.jpg",
    title: "Card Six",
    subtitle: "6 Six Sixth Sais",
  },
  {
    id: 7,
    image: "https://static.wikia.nocookie.net/wallpapers/images/d/d8/Img0-Win8Dev.jpg/revision/latest/scale-to-width-down/1000?cb=20240331125439",
    title: "Card Seven",
    subtitle: "7 Seven Seventh Syete",
  },
  {
    id: 8,
   image: "https://static.wikitide.net/windowswallpaperwiki/7/7b/Img0_%28Windows_8%29.jpg",
    title: "Card Eight",
    subtitle: "8 Eight Eight Otso",
  },
  {
    id: 9,
    image: "https://images7.alphacoders.com/655/thumb-1920-655347.jpg",
    title: "Card Nine",
    subtitle: "9 Nine Ninth Newbe",
  },
];

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {/* reusable card comps taking data frfom array */}
        {cards.map((card) => ( <Cards key={card.id} image={card.image} title={card.title} subtitle={card.subtitle} /> ))} 
      </div>
      <Footer />
    </div>
  );
}
