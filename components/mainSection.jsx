import { Fragment } from "react";
import items from "../helpers/data-main-section";

export default function MainSection() {

  const ItemCard = ({ data }) => {
    return (
      <a key={data.id} href={data.link} target="_blank" className="filter hover:brightness-125">
        <div
          className="flex items-center justify-center relative"
        >
          <img src={data.image} alt={data.title} />
          <p className="text-sm text-white w-2/5 absolute opacity-100 font-rubik">{`${data.title} >`}</p>
        </div>
      </a>
    );
  };

  return (
    <div className="text-center p-20 bg-secondary">
      <h1 className="text-4xl pb-5 text-white font-epilogue font-semibold">What's inside?</h1>
      <p className="text-2xl text-white pb-20 font-epilogue">
        10,000+ Vetted Creative Professionals & Businesses
      </p>

      <div className="ml-28 mr-28">
        {items.map((res, index) => (
          <div
            key={res.id}
            className="grid grid-cols-4 gap-4"
            style={{ marginTop: index !== 0 && 20 }}
          >
            {res.id % 2 === 1 ? (
              <Fragment>
                <div className="text-left col-span-2">
                  <p className="text-white text-4xl leading-tight font-epilogue">
                    {res.title}
                  </p>
                  <p className="text-white w-2/3 pt-3 font-rubik">
                    {res.tags.join(" / ")}
                  </p>
                  <p className="text-primary pt-5 cursor-pointer hover:underline w-max font-epilogue">
                    <a href={res.link} target="_blank">
                      {"Show More >"}
                    </a>
                  </p>
                </div>
                {res.data.slice(0, 2).map((res) => (
                  <ItemCard key={res.id} data={res} />
                ))}
              </Fragment>
            ) : (
              <Fragment>
                {res.data.slice(0, 2).map((res) => (
                  <ItemCard key={res.id} data={res} />
                ))}
                <div className="w-full col-span-2 flex flex-col justify-center items-end text-right font-epilogue">
                  <p className="text-white text-4xl leading-tight">
                    {res.title}
                  </p>
                  <p className="text-white w-2/3 pt-3 font-rubik">
                    {res.tags.join(" / ")}
                  </p>
                  <div className="flex justify-end">
                    <p className="text-primary pt-5 cursor-pointer hover:underline w-max font-epilogue">
                      <a href={res.link} target="_blank">
                        {"Show More >"}
                      </a>
                    </p>
                  </div>
                </div>
              </Fragment>
            )}
            {res.data.slice(2).map((res) => (
              <ItemCard key={res.id} data={res} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
