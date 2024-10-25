import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  x_mark,
  yoga,
  webinar,
  scoreImg,
  pplAuction,
  shahmat,
  youtube,
  sachin,
  somya,
  vineet,
  asif,
  sidharth,
  abhinav,
  shaurya,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "team",
    title: "Team",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Networking opportunities",
    content:
      "We collaborate with other institutions to expand our sports network and engage with athletes from diverse backgrounds,while leveraging social media to connect with potential partners and sponsors.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "World Class Sports facilities",
    content:
      "committed to providing world-class sports facilities, encompassing state-of-the-art infrastructure, cutting-edge equipment, and expert coaching staff. With a focus on excellence.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Personal guidance and individual mentorship",
    content:
      "Dedicated to providing athletes with personalized guidance and mentorship to foster their individual growth and development. Our goal is to offer tailored support that empowers athletes to maximize their potential and excel in their respective sports.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "800+",
  },
  {
    id: "stats-2",
    title: "Sports",
    value: "30+",
  },
  {
    id: "stats-3",
    title: "Total Events",
    value: "50+",
  },
];

export const footerLinks = [
  // {
  //   title: "Useful Links",
  //   links: [
  //     {
  //       name: "Content",
  //       link: "https://www.hoobank.com/content/",
  //     },
  //     {
  //       name: "How it Works",
  //       link: "https://www.hoobank.com/how-it-works/",
  //     },
  //     {
  //       name: "Create",
  //       link: "https://www.hoobank.com/create/",
  //     },
  //     {
  //       name: "Explore",
  //       link: "https://www.hoobank.com/explore/",
  //     },
  //     {
  //       name: "Terms & Services",
  //       link: "https://www.hoobank.com/terms-and-services/",
  //     },
  //   ],
  // },
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Features",
        link: "#features",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Team",
        link: "#team",
      },

      {
        name: "Events",
        link: "#events",
      },
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://instagram.com/dsciitm",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://m.facebook.com/profile.php?id=100095228385368&mibextid=ZbWKwL",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/dsciitmbs",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/dsc-iit-madras/",
  },
  {
    id: "social-media-5",
    icon: youtube,
    link: "https://www.youtube.com/@dsciitm",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

type Events = {
  image: string;
  link: string;
  title: string;
  content: string;
};

type Past_Events = {
  image: string;
  link: string;
  title: string;
  content: string;
};

export const events: Events[] = [
  // {
  //   image: shaurya,
  //   link: "https://forms.gle/CvfditZoJhpkHeT3A",
  //   title: "Shaurya'23",
  //   content: "Inter institutional Sports Competion: Our first offline sports representation at IIT Kharagpur",
  // },
];

export const past_events:Past_Events[]=[
  {
    image: shaurya,
    link: "https://forms.gle/CvfditZoJhpkHeT3A",
    title: "Shaurya'23",
    content: "Inter institutional Sports Competion: Our first offline sports representation at IIT Kharagpur",
  },
  {
    image: x_mark,
    link: "https://saavan.iitmparadox.org/events/sports/15",
    title: "X Marks The Spot",
    content:
      "X Marks the Spot : Resurrection is an online treasure hunt being conducted in Saavan’23. The event will take place on Instagram.",
  },
  {
    image: yoga,
    link: "https://saavan.iitmparadox.org/events/sports/34",
    title: "Mindful Living: A Yoga Workshop",
    content:
      "In these modern times, when we find ourselves increasingly online for work or play, its easy to slip into unhealthy lifestyles and lose touch with our souls.",
  },
  {
    image: webinar,
    link: "https://saavan.iitmparadox.org/events/sports/23",
    title: "Unveiling the Power Within: Exploring Martial Arts",
    content:
      "Join us for an engaging and insightful webinar as martial arts enthusiast and fitness advocate, Vanshika Fulara",
  },
  {
    image: scoreImg,
    link: "https://saavan.iitmparadox.org/events/sports/36",
    title: "Score'N Sketch",
    content:
      "Get ready to ignite your artistic spark at Score'N Sketch, the electrifying Savan online event! Organised by IIT MADRAS, this event is your chance to unleash your creative genius.",
  },
  {
    image: pplAuction,
    link: "https://saavan.iitmparadox.org/events/sports/43",
    title: "PPL Auction",
    content:
      "Auction is where players in the common pool are sold to the highest bidder as per the PPL rules and regulations about the formation of the squads.",
  },
  {
    image: shahmat,
    link: "https://saavan.iitmparadox.org/events/sports/5",
    title: "Chess Championship",
    content: "Paradox in Saavan presents Saavan Chess Championship 2023",
  },
]

type Team = {
  image: string;
  name: string;
  position: string;
};

export const president: Team[] = [
  {
    image: sachin,
    name: "Sachin Pandey",
    position: "President",
  },
  {
    image: somya,
    name: "Somyabrata Mahapatra",
    position: "Vice President",
  },
  {
    image: vineet,
    name: "Vineet Pandey",
    position: "Secretariat Head",
  },
  {
    image: asif,
    name: "Asif Ansari",
    position: "Secretariat Head",
  },
   {
    image: abhinav,
    name: "Abhinaw Kumar",
    position: "Director of Recruitment Board",
  },
  {
    image: sidharth,
    name: "Siddharth Patel",
    position: "Member, Recruitment Board",
  },
 
];

export const secreatry:Team[]=[
    {
    image: vineet,
    name: "Vineet Pandey",
    position: "Secretariat Head",
  },
  {
    image: asif,
    name: "Asif Ansari",
    position: "Secretariat Head",
  },
  {
    image: abhinav,
    name: "Abhinaw Kumar",
    position: "Director of Recruitment Board",
  },
  {
    image: sidharth,
    name: "Siddharth Patel",
    position: "Member, Recruitment Board",
  },
  
]

export const Recruitment:Team[]=[
     {
    image: abhinav,
    name: "Abhinaw Kumar",
    position: "Director of Recruitment Board",
  },
  {
    image: sidharth,
    name: "Siddharth Patel",
    position: "Member, Recruitment Board",
  },
]

export const Team_footerLinks = [
  // {
  //   title: "Useful Links",
  //   links: [
  //     {
  //       name: "Content",
  //       link: "https://www.hoobank.com/content/",
  //     },
  //     {
  //       name: "How it Works",
  //       link: "https://www.hoobank.com/how-it-works/",
  //     },
  //     {
  //       name: "Create",
  //       link: "https://www.hoobank.com/create/",
  //     },
  //     {
  //       name: "Explore",
  //       link: "https://www.hoobank.com/explore/",
  //     },
  //     {
  //       name: "Terms & Services",
  //       link: "https://www.hoobank.com/terms-and-services/",
  //     },
  //   ],
  // },
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Features",
        link: "#features",
      },
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Team",
        link: "#team",
      },

      {
        name: "Events",
        link: "#events",
      },
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];



export const team=[president,secreatry,Recruitment];

export const post=["President","Secreatry","Recruitment"]