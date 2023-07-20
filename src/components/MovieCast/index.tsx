import ActorInterace from "../../types/actorType";
import { Content } from "./style";

import noProfilePic from "./../../images/noprofilePic.jpg";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

const MovieCast = (cast: ActorInterace[]) => {
  return (
    <Content>
      <p className="title">Cast:</p>
      <div className="actors">
        {Object.values(cast).map((actor, index) => {
          return (
            <div key={index} className="card">
              {actor.profile_path ? (
                <img src={imagesURL + actor.profile_path} alt={actor.name} />
              ) : (
                <img src={noProfilePic} alt={actor.name} />
              )}
              <div className="name">
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Content>
  );
};

export default MovieCast;
