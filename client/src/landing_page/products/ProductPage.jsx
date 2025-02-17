import Hero from "./Hero";
import LeftSection from "./Left";
import RightSection from "./Right";
import Universe from "./Universe";

function Product() {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        imageUrl={"kite.png"}
        productName={"Kite"}
        productDescription={
          "Kite is a stock market trading and investment platform that allows users to buy and sell stocks, apply for IPOs, and more. It's available on mobile and web. "
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appStore={""}
      ></LeftSection>

      <RightSection
        imageUrl="kiteconnect.png"
        productName="Connect Api"
        productDescription="Connect Api- Connect through api seamlessly wihting no time"
        learnMore=""
      ></RightSection>

      <LeftSection
        imageUrl={"coin (1).png"}
        productName={"Coin"}
        productDescription={
          "Coin for toin product so good that no trader can resist"
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appStore={""}
      ></LeftSection>

      <RightSection
        imageUrl="console (1).png"
        productName="Console to console you"
        productDescription="Console yourself with our console ai"
        learnMore=""
      ></RightSection>

      <LeftSection
        imageUrl={"varsity.png"}
        productName={"Varsity"}
        productDescription={"Online self paced Educating Resources for traders"}
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appStore={""}
      ></LeftSection>
      <Universe/>
    </>
  );
}

export default Product;
