import "./App.css";

import { useState } from "react";
import ListMovies from "./Movies/List";
import Add from "./Movies/Add.js";
import Navbar from "./Movies/Navbar.js";
import Rating from "./Movies/Rating";
import { BrowserRouter as Router, Route } from "react-router-dom";
import movies from "./WatchedMovies";
import Home from "./Home";

function App() {
  const [moviedata, setmoviedata] = useState([
    {
      id: 0,
      title: "Spider-Man: No Way Home (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      rate: 8.4,
      description:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      trailer: "https://youtu.be/WgU7P6o-GkM",
    },
    {
      id: 1,
      title: "Nightmare Alley (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/680klE0dIreQQOyWKFgNnCAJtws.jpg",
      rate: 7.2,
      description:
        "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
      trailer: "https://youtu.be/Q81Yf46Oj3s",
    },
    {
      id: 2,
      title: "Encanto (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      rate: 7.7,
      description:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      trailer: "https://youtu.be/togmdDHG3Pw",
    },
    {
      id: 3,
      title: "Eternals (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
      rate: 7.2,
      description:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      trailer: "https://youtu.be/0WVDKZJkGlY",
    },
    {
      id: 4,
      title: "The Requin (2022)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
      rate: 4.5,
      description:
        "A couple on a romantic getaway find themselves stranded at sea when a tropical storm sweeps away their villa. In order to survive, they are forced to fight the elements, while sharks circle below.",
      trailer: "https://youtu.be/kWXK5fibfko",
    },
    {
      id: 5,
      title: "Red Notice (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
      rate: 6.8,
      description:
        "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      trailer: "https://youtu.be/Pj0wz7zu3Ms",
    },
    {
      id: 6,
      title: "Venom: Let There Be Carnage (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      rate: 7.1,
      description:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      trailer: "https://youtu.be/-ezfi6FQ8Ds",
    },
    {
      id: 7,
      title: "Through My Window (2022)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
      rate: 7.9,
      description:
        "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
      trailer: "https://youtu.be/_zxhK3Z-R0c",
    },
    {
      id: 12,
      title: "Vis A Vis",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
      rate: 2,
      description:
        "Locked Up, originally titled in Spanish as Vis A Vis , is a Spanish serial drama television series produced by Globomedia, initially for Spanish Network Antena 3 and later on for Fox Spain. It premiered on 20 April 2015.[2] The series begins by focusing on a young woman who is sent to prison and then goes on to depict the image of prison and law enforcement systems.",
      trailer: "https://www.youtube.com/embed/ceNKwOvSVm8",
    },
    {
      id: 13,
      title: "Cukur",
      posterUrl:
        "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
      rate: 3,
      description:
        "A dangerous neighborhood, The Pit, ran by a noble mafia family called Koçovars. When the family is in the danger of losing the control of The Pit, their youngest son now must come back to his home, where he could never escape from.",
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
    },
    {
      id: 14,
      title: "See",
      posterUrl:
        "https://fr.web.img6.acsta.net/pictures/19/09/10/20/30/1507616.jpg",
      rate: 3,
      description:
        "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.",
      trailer: "https://www.youtube.com/embed/7Rg0y7NT1gU",
    },
    {
      id: 15,
      title: "SHERLOCK",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
      rate: 5,
      description:
        "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      trailer: "https://www.youtube.com/embed/IrBKwzL3K7s",
    },
    {
      id: 8,
      title: "Resident Evil: Welcome to Raccoon City (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
      rate: 6.2,
      description:
        "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
      trailer: "https://www.youtube.com/embed/YQeUmSD1c3g",
    },
    {
      id: 9,
      title: "Free Guy (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
      rate: 7.7,
      description:
        "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
      trailer: "https://youtu.be/cttnRmcr_ME",
    },
    {
      id: 10,
      title: "Sing 2 (2021)",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      rate: 8.2,
      description:
        "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      trailer: "https://youtu.be/EPZu5MA2uqI",
    },
    {
      id: 11,
      title: "The Walking deads",
      posterUrl:
        "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
      rate: 4.1,
      description:
        "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
      trailer: "https://www.youtube.com/embed/sfAc2U20uyg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        rate={rate}
        setRate={setRate}
      >
        {" "}
      </Navbar>
      {/* <Rating  rate = {rate} setRate = {setRate} /> */}
      <Add moviedata={moviedata} setmoviedata={setmoviedata} />
      <ListMovies
        search={search}
        moviedata={moviedata}
        setmoviedata={setmoviedata}
        rate={rate}
      />
    </div>
  );
}

export default App;
