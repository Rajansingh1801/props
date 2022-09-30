import Home from "./component/home-page";
import Menu from "./component/menu";

function App() {
  const list = [
    {
      img: "https://i.scdn.co/image/ab67616d0000b2739ca6c8941d918f92885acee8",
      song_name: "Jine laga hoo",
      singer: "Atif Aslam",
      movie_name: "Ramiya vastaiya",
      link: "https://youtu.be/VhRwuWp4MQ8",
    },
    {
      img: "https://i.ytimg.com/vi/iHWE2HoyuIs/maxresdefault.jpg",
      song_name: "Ve Maahi​",
      singer: "Arijit Singh, Asees Kaur",
      movie_name: "Kesari",
      link: "https://youtu.be/j6muwUGdvXw",
    },
    {
      img: "https://pagalfree.com/images/128Tum%20Ho%20-%20Rockstar%20128%20Kbps.jpg",
      song_name: "Tum Ho​",
      singer: "Mohit Chauhan, Suzanne D’Mello",
      movie_name: "Rockstar",
      link: "https://youtu.be/gkCKTuR-ECI",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b273ff1cda069aac9352c258f8d1",
      song_name: "Channa Mereya​",
      singer: "Arijit Singh",
      movie_name: "Ae Dil Hai Mushkil",
      link: "https://youtu.be/284Ov7ysmfA",
    },
    {
      img: "https://i.ytimg.com/vi/ENVBeAhNz1c/maxresdefault.jpg",
      song_name: "Hamari Adhuri Kahani​",
      singer: "Arijit Singh",
      movie_name: "Hamari Adhuri Kahani",
      link: "https://youtu.be/f3FFOBrMmdg",
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b27311dc9c9fa5d9958be9ea4084",
      song_name: " Yeh Dooriyan​",
      singer: "Mohit Chauhan",
      movie_name: "Love Aaj Kal",
      link: "https://youtu.be/DKOLynNhWxo",
    },
  ];
  return (
    <>
      <Home h1="Super Hit Song" p="Cards" />
      <Menu item={list} />  
    </>
  );
}

export default App;
