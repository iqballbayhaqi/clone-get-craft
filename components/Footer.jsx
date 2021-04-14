export default function Footer() {
  const menus = {
    "Content Producers": [
      {
        id: 1,
        title: "Writers & Editors",
        link: "https://getcraft.com/en/written",
      },
      {
        id: 2,
        title: "Designers",
        link: "https://getcraft.com/en/design",
      },
      {
        id: 3,
        title: "Videographers",
        link: "https://getcraft.com/en/videography",
      },
      {
        id: 4,
        title: "Photographers",
        link: "https://getcraft.com/en/photography",
      },
      {
        id: 5,
        title: "Producers",
        link: "https://getcraft.com/en/project-delivery-specialists",
      },
    ],
    "Marketing Specialists": [
      {
        id: 1,
        title: "Research Specialists",
        link: "https://getcraft.com/en/research",
      },
      {
        id: 2,
        title: "Branding Specialists",
        link: "https://getcraft.com/en/branding-and-design-specialists",
      },
      {
        id: 3,
        title: "Creative Specialists",
        link: "https://getcraft.com/en/creative-and-strategic-specialists",
      },
      {
        id: 4,
        title: "Content Specialists",
        link: "https://getcraft.com/en/content-specialists",
      },
      {
        id: 5,
        title: "Digital Marketing Specialists",
        link: "https://getcraft.com/en/media",
      },
      {
        id: 6,
        title: "Social Media Specialists",
        link: "https://getcraft.com/en/social-media-specialists",
      },
      {
        id: 7,
        title: "Media Specialists",
        link: "https://getcraft.com/en/media-specialists",
      },
      {
        id: 8,
        title: "PR & Event Specialists",
        link: "https://getcraft.com/en/pr-specialists",
      },
      {
        id: 9,
        title: "Technology Specialists",
        link: "https://getcraft.com/en/technology",
      },
    ],
    "Media Partners": [
      {
        id: 1,
        title: "Celebrities and Influencers",
        link: "https://getcraft.com/en/influencers",
      },
      {
        id: 2,
        title: "Publishers",
        link: "https://getcraft.com/en/publishers",
      },
      {
        id: 3,
        title: "TV",
        link: "https://getcraft.com/en/tv",
      },
      {
        id: 4,
        title: "Radio",
        link: "https://getcraft.com/en/radio-nationwide",
      },
      {
        id: 5,
        title: "Out Of Home",
        link: "https://getcraft.com/en/out-of-home",
      },
    ],
    "Visit GetCraft": [
      {
        id: 1,
        title: "Directory",
        link: "https://getcraft.com/en",
      },
      {
        id: 2,
        title: "Jobs",
        link: "https://getcraft.com/jobs",
      },
      {
        id: 3,
        title: "Managed",
        link: "https://getcraft.com/managed-services",
      },
      {
        id: 4,
        title: "Crafters",
        link: "http://crafters.getcraft.com/",
      },
      {
        id: 5,
        title: "MarketingCraft",
        link: "https://marketingcraft.getcraft.com/",
      },
    ],
    "Payment Methods": [
      {
        id: 1,
        title: "How it Works",
        link: "https://help.getcraft.com/en/knowledge",
      },
      {
        id: 2,
        title: "GetPaid",
        link: "https://getcraft.com/premium",
      },
    ],
  };

  return (
    <div className="text-center p-16 bg-secondary">
      <div className="grid grid-cols-5">
        {Object.keys(menus)
          .slice(0, 3)
          .map((menu, index) => (
            <div key={index}>
              <p className="text-white text-left text-base pb-3">{menu}</p>
              {menus[menu].map((res) => (
                <p className="text-grey text-left cursor-pointer">
                  {res.title}
                </p>
              ))}
            </div>
          ))}
        <div className="grid grid-rows-2">
          {Object.keys(menus)
            .slice(3)
            .map((menu, index) => (
              <div key={index} style={{ marginTop: index !== 0 && 20 }}>
                <p className="text-white text-left text-base pb-3">{menu}</p>
                {menus[menu].map((res) => (
                  <p className="text-grey text-left cursor-pointer">
                    {res.title}
                  </p>
                ))}
              </div>
            ))}
        </div>
        <div>
          <div className="flex justify-start pt-10 pb-10">
            <img
              className="mr-3"
              style={{ height: 25 }}
              src="https://assets.website-files.com/602f66b9d931923cd7d5fbe6/602f66c532216ea3a85b2e54_bank.png"
              alt="bank transfer"
            />
            <img
              className="mr-3"
              style={{ height: 25 }}
              src="https://assets.website-files.com/602f66b9d931923cd7d5fbe6/602f66c532216e7d535b2e56_visa.png"
              alt="visa"
            />
            <img
              className="mr-3"
              style={{ height: 25 }}
              src="https://assets.website-files.com/602f66b9d931923cd7d5fbe6/602f66c532216e58b25b2e58_mc.png"
              alt="master card"
            />
          </div>
          <div>
            <p className="text-white text-left text-base pb-3">Support</p>
            <p className="text-grey text-left cursor-pointer">FAQ</p>
            <p className="text-grey text-left cursor-pointer">
              Terms and conditions
            </p>
            <p className="text-grey text-left cursor-pointer">Need help?</p>
            <p className="text-grey text-left cursor-pointer">
              support@getcraft.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-white pt-3">
        <div>
          <img
            src="https://assets.website-files.com/5f17b8c284f5ec1135c789d9/5f2b876e9f1e328695892abd_GetCraft%20logo%20white.png"
            alt="get craft logo"
          />
          <p className="text-white text-left text-xs pt-2">
            Copyright © 2021 GetCRAFT
          </p>
        </div>
        <div className="flex justify-end">
          <img
            style={{ height: 30 }}
            className="mr-4 cursor-pointer"
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f91ee8fb78a455e95d37a_%EF%82%8C.png"
            alt="get craft linkedin"
          />
          <img
            style={{ height: 30 }}
            className="mr-4 cursor-pointer"
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f91ee8fb78a75af95d37e_%EF%82%81.png"
            alt="get craft twitter"
          />
          <img
            style={{ height: 30 }}
            className="mr-4 cursor-pointer"
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f91ee8fb78aa75a95d380_%EF%82%82.png"
            alt="get craft facebook"
          />
          <img
            style={{ height: 30 }}
            className="mr-4 cursor-pointer"
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f91ee8fb78ad75a95d37c_instagram.png"
            alt="get craft instagram"
          />
          <img
            style={{ height: 30 }}
            className="mr-4 cursor-pointer"
            src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f91ee8fb78a7f1895d378_youtube.png"
            alt="get craft youtube"
          />
        </div>
      </div>
    </div>
  );
}
