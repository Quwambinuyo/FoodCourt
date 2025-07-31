import { MdArrowForwardIos } from "react-icons/md";
import { imageData } from "../utils/data";

const Title = () => {
  return (
    <div>
      <div className="mt-5 flex gap-3 items-center">
        <span className="font-bold font-Roboto">Title</span>
        <span>
          <MdArrowForwardIos />
        </span>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {imageData.map((image) => {
          const { imageSrc, name, id } = image;
          return (
            <div key={id} className="flex flex-col   items-center">
              <img
                src={imageSrc}
                alt={name}
                className="rounded-[50%] sm:rounded-md  w-[120px] h-[120px] sm:w-[400px] sm:h-[200px]"
              />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex mt-5 items-center gap-3">
        <span className="font-bold font-Roboto">Title</span>
        <span>
          <MdArrowForwardIos />
        </span>
      </div>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mt-3">
        <div className="flex gap-2">
          {imageData.map((item) => {
            const { imageSrc, name, id } = item;
            return (
              <div key={id} className="inline-block shrink-0">
                <img
                  src={imageSrc}
                  alt=""
                  className="h-[140px] w-[140px] sm:w-[250px] sm:h-[250px] rounded-md"
                />
                <p>{name}</p>
                <p>{id}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Title;
