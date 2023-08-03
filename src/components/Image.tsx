import image from "/src/images/Site-logo.png";

function Image({ currentImage }: { currentImage: string }) {
  return (
    <>
      <img src={image} alt="Image"></img>;
      <img src={`/src/images/${currentImage}`} className="bannerImage"></img>;
    </>
  );
}

export default Image;
