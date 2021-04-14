import Slider from "react-slick";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f68a42ec1ea6977417523_trent.jpeg",
      name: "Trent Lindstone",
      title: "Digital Lead S.E.A of 3M",
      testi:
        "As a company that operates across multiple vertical markets and countries, GetCraft has been valuable partners both regionally and locally for 3M. Few partners offer flexibility across South East Asia like GetCraft. Their model provides support and expertise at regional level complemented by their in country teams who have local and cultural knowledge, which ensures strong and efficient execution. The access to their extensive pool of creators ensures our diverse needs are met, previous programs such influencer campaigns in medical industrial or corporate brand content strategy demonstrates this.",
    },
    {
      id: 2,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f6903e58ab94186d234f2_ardian.jpeg",
      name: "Ardian Sapoetro",
      title: "VP Digital Marketing, TMRW UOB Digital Bank",
      testi:
        "I can say GetCraft is a very reliable partner to work with.Not only providing a platform to help us connect with the best creative professionals out there, but they also provide offline service to manage projects and help us achieve the campaign objective. GetCraft not only has a rich network, they also have good project management service and always take the initiative to share recommendations based on data. This is very helpful. So, it's not a surprise for me if GetCraft has grown rapidly from the first time we worked together in 2017.",
    },
    {
      id: 3,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f69ad547334c453fa67ab_vonn.jpeg",
      name: "Vonn Vincent V. Tanchuan, ALMI",
      title: "Assistant Manager of BPI, Philam",
      testi:
        "I have been working with GetCraft for almost three years now and I commend the team’s mastery of content marketing which is evident through the improvement in several performance metrics for BPI-Philam, including social media engagement, email open and click rates, as well as the steady surge in website traffic. I also appreciate the fact that it’s really easy to work with the different teams which fostered productive collaboration in all projects we do as well as the tailored solutions that they provide to help our brand achieve results.",
    },
    {
      id: 4,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f6a73e07d0ef6710b3849_alvin%20dwi.jpeg",
      name: "Alvin Dwi Saputra",
      title: "Digital Marketing Specialist of Kalbe Consumer Health",
      testi:
        "Partnering with GetCraft helped us to search potential creators and suitable influencers for our brand. GetCraft helped us on briefing the creator until report for the campaign. The result was excellent!",
    },
    {
      id: 5,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f6a89737ee29b154a4e90_sarah%20ismail.jpeg",
      name: "Sarah Ismail",
      title: "Regional Marketing Director of Warner Music",
      testi:
        "GetCraft is a joy to work with. Their rich network of creators brings life to each campaign and they have the efficiency required to keep up with the pace of the global music industry. Their team delivers on a range of ideas with a unique, creative approach that points to their clear grasp of our needs, and an in-depth understanding of market trends.",
    },
    {
      id: 6,
      image:
        "https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f6a978fb78a18fc951265_ovidia%20nomia.jpeg",
      name: "Ovidia Nomia",
      title: "Director of Communications of Procter & Gamble Indonesia",
      testi:
        "As the world of content evolves rapidly everyday, having a partner like GetCraft really helps us to be relevant in the digital ecosystem, which truly benefits us in growing the business",
    },
  ];

  const slider_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center p-20 bg-secondary">
      <h1 className="text-4xl pb-5 text-white">Testimonials</h1>
      <Slider {...slider_settings}>
        <div>
          <div className="grid grid-cols-3">
            {testimonials.splice(0, 3).map((res) => (
              <div key={res.id} className="text-center">
                <img
                  src={res.image}
                  alt={res.name}
                  className="w-20 h-20 rounded-full border border-white m-auto"
                />
                <p className="text-white text-md font-semibold pt-3">
                  {res.name}
                </p>
                <p className="text-gray">{res.title}</p>
                <p className="text-white text-xs w-4/5 m-auto pt-2">
                  {res.testi}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3">
            {testimonials.splice(0,3).map((res) => (
              <div key={res.id} className="text-center">
                <img
                  src={res.image}
                  alt={res.name}
                  className="w-20 h-20 rounded-full border border-white m-auto"
                />
                <p className="text-white text-md font-semibold pt-3">
                  {res.name}
                </p>
                <p className="text-gray text-sm">{res.title}</p>
                <p className="text-white text-xs w-4/5 m-auto pt-2">
                  {res.testi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
}
