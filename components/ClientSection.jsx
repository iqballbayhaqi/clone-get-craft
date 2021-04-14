
export default function ClientSection() {
  const clients = [
    {
      id: 1,
      client: "Gojek",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53e032216e394c5aea6c_Group%20527.png",
    },
    {
      id: 2,
      client: "P&G",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53e032216ec65d5aea6d_Group%20526.png"
    },
    {
      id: 3,
      client: "CocaCola",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53de6b6bfe807db8267e_Group%20521.png"
    },
    {
      id: 4,
      client: "Samsung",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53df457b6ba005912535_Group%20522.png"
    },
    {
      id: 5,
      client: "Tokopedia",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53df01eb782e7b3addc1_Group%20523.png"
    },
    {
      id: 6,
      client: "WPP",
      logo: "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f546585f3c11be5e3c2fc_Group%20525.png"
    }
  ];

  return (
    <div className="grid grid-cols-7 gap-4 p-5 items-center w-full bg-secondary">
      <p className="text-right text-xs text-white ml-10">
        Trusted by 1,500+ brands and agencies
      </p>
      {clients.map(res => {
        return <img key={res.id} src={res.logo} alt={res.client} className="h-5" />
      })}
    </div>
  );
}
