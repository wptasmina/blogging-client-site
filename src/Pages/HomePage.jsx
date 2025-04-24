
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import FAQs from "../component/FAQs";
import Latest_Blog from "../component/LatestBlog/Latest_Blog";
import MarqueeSlice from "./MarqueeSlice";
import Review from "./Review";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Latest_Blog />
      <Newsletter />
      <MarqueeSlice />
      <FAQs />
      <Review />
    </>
  )
}
