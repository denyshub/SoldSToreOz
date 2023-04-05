import GreenNike from "../images/shoes/greenNike.jpg";
import BlackAdidas from "../images/shoes/blackAdidas.jpg";
import AirForce1White from "../images/shoes/airForce1White.jpg";
import JordanGrey from "../images/shoes/jordanGrey.jpg";
import DunkYellow from "../images/shoes/dunkYellow.jpg";
import NikeBones from "../images/shoes/nikeBones.jpg";
import JordanBlack from "../images/shoes/dunkBlack.jpg";
import DunkGreenGlow from "../images/shoes/dunkGreenGlow.jpg";
import BlazerWhite from "../images/shoes/blazerWhite.jpg";


let state = {
 productData: [
    { id: 1, name: "Nike Green", price: 1500, imgMain: GreenNike, liked: false },
    {
      id: 2,
      name: "Adidas Black",
      price: 500,
      imgMain: BlackAdidas,
      liked: false
    },
    {
      id: 3,
      name: "Air Force 1 White",
      price: 200,
      imgMain: AirForce1White,
      liked: false
    },
    { id: 4, name: "Jordan Grey", price: 300, imgMain: JordanGrey,liked: false },
    { id: 5, name: "Dunk Yellow", price: 300, imgMain: DunkYellow,liked: false },
    { id: 6, name: "Nike Bones", price: 400, imgMain: NikeBones,liked: false },
    { id: 7, name: "Dunk Black", price: 300, imgMain: JordanBlack,liked: false },
    {
      id: 8,
      name: "Dunk Green Glow",
      price: 300,
      imgMain: DunkGreenGlow,
      liked: false
    },
    {
      id: 9,
      name: "Blazer White",
      price: 250,
      imgMain: BlazerWhite,
      liked: false
    },
  ]
}

export default state;