
export default function About() {

  const items = [
    {
      id: 1,
      title: "Vetted Creators",
      description: "We conduct a four stage vetting process for all new creators. Only 30% have made it onto the Directory.",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebd5473342759fab89b_Group%20533.png",
    },
    {
      id: 2,
      title: "Craft at Scale",
      description: "We’re built for the premium creative industry. We help you scale your marketing while keeping the craft.",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebde07d0e32b80b8337_Group%20534.png"
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "You can pay via bank transfer or credit card, plus use our escrow solutions to help protect everyone.",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebdb4ac3caac8cd53c6_Group%20535.png"
    },
    {
      id: 4,
      title: "Production Support",
      description: "Our project managers can help you find the perfect creators to work with and oversee the project if needed.",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebd5fedd1c706973aee_Group%20536.png"
    }
  ]

  return (
    <div className="text-center p-20">
      <h1 className="text-4xl pb-16 text-secondary">Why GetCraft?</h1>
      <div className="grid grid-cols-4">
        {items.map(res => (
          <div key={res.id} className="text-center">
            <img src={res.logo} alt={res.title} className="m-auto w-20 h-20 pb-5" />
            <p className="text-lg font-bold text-gray">{res.title}</p>
            <p className="text-sm pl-5 pr-5 text-gray">{res.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
