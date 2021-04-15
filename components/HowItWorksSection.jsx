export default function HowItWorks() {
  const items = [
    {
      id: 1,
      title: "Browse The Directory",
      description:
        "Our directory’s powerful search, filter and portfolio features makes it easy to find and connect with skilled creative professionals and businesses.",
      logo:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222d145e131b6a120502_Mask%20Group-p-500.png",
      action: "Browse Directory",
      link: "https://getcraft.com/en",
    },
    {
      id: 2,
      title: "Post a Job",
      description:
        "Post a job for free on our creative jobs board where interested creative professionals and businesses will directly submit their quotes to you.",
      logo:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222d01a7fb0af3808110_Mask%20Group-1-p-500.png",
      action: "Post a job",
      link: "https://getcraft.com/jobs?brief=public",
    },
    {
      id: 3,
      title: "Schedule a Call",
      description:
        "Need help chosing which creators to work with? Our creative producers can help you select the right creators to work with and oversee the project if needed.",
      logo:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222e01a7fb5eee808111_Rectangle%20196-p-500.png",
      action: "Schedule a call",
      link: "https://getcraft.com/managed-services",
    },
  ];

  return (
    <div className="text-center p-20">
      <h1 className="text-4xl pb-16 text-secondary font-epilogue font-semibold">How It Works</h1>
      <div className="grid grid-cols-3">
        {items.map((res) => (
          <div key={res.id} className="text-center">
            <img src={res.logo} alt={res.title} className="m-auto w-4/5 pb-5" />
            <p className="text-2xl font-bold text-gray font-epilogue">{res.title}</p>
            <p className="text-sm pl-5 pr-5 pt-3 text-gray w-4/5 m-auto font-rubik">
              {res.description}
            </p>
            <p className="text-md pl-5 pr-5 pt-2 text-primary font-epilogue font-semibold">
              <a href={res.link} target="_blank">
                {`${res.action} >`}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
