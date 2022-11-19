import React from "react";
import { CardComponent1 } from "../cardComponent1/cardComponent1";
import { CardComponent2 } from "../cardComponent2/cardComponent2";
import { CardComponent3 } from "../cardComponent3/cardComponent3";

let cardImg1 =
  "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg";
let cardImg2 =
  "https://www.denofgeek.com/wp-content/uploads/2021/01/webstory-captain-america-cover03.jpg";
let cardImg3 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Spiderman_warner.jpg/1200px-Spiderman_warner.jpg";
let title = "Lorem, ipsum dolor.";
let description =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodiexcepturi quae incidunt ad pariatur ducimus.";

export const HeaderComponent = ({ mainImg, mainTtl, mainTtl2, mainDct }) => {
  return (
    <div>
      <header>
        <img className="image-main" src={mainImg} alt="" />
        <h1>{mainTtl}</h1>
      </header>
      <main>
        <h2>{mainTtl2}</h2>
        <p>{mainDct}</p>
      </main>
      <aside>
        <ul class="list-style">
          <CardComponent1
            img={cardImg1}
            ttl={title}
            dct={description}
          ></CardComponent1>
          <CardComponent2
            img={cardImg2}
            ttl={title}
            dct={description}
          ></CardComponent2>
          <CardComponent3
            img={cardImg3}
            ttl={title}
            dct={description}
          ></CardComponent3>
        </ul>
      </aside>
    </div>
  );
};
