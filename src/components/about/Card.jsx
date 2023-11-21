import { Link } from "react-router-dom";

const Card = ({ data, link }) => {
  const { image, name, position, institution, phone } = data || {};
  return (
    <div className="aboutProfile p-4 bg-[#FFFFFF] shadow my-3 flex flex-col items-center">
      <div className="aboutProfile-img my-4">
        <picture>
          {image?.url ? (
            <img src={image.url} className="object-cover" alt="profile" />
          ) : (
            <img
              src={`/assets/profile.jpg`}
              className="object-cover"
              alt="profile"
            />
          )}
        </picture>
      </div>

      <div className="aboutProfile-identity">
        <h4 className="font-medium text-md">{name}</h4>
        <h5>{position}</h5>
        {phone && <h5>মোবাইলঃ {phone}</h5>}
        <h6>{institution}</h6>
      </div>

      <div className="aboutProfile-button text-white mt-5">
        <Link to={link}>বিস্তারিত</Link>
      </div>
    </div>
  );
};

export default Card;
