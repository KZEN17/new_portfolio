import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  upwork,
  unix,
  ecomm,
  blog,
  shareit,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "March 2018 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "March 2018 - Present",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "   Working in close collaboration with designers, product managers, and fellow developers from diverse backgrounds to produce top-notch products.",
      "      Executing responsive design techniques and guaranteeing seamless compatibility across various web browsers.",
      "      Actively engaging in code reviews, offering valuable feedback to fellow developers to enhance overall code quality.",
    ],
  },
  {
    title: "Web & Mobile Developer",
    company_name: "Unix Gaming",
    icon: unix,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "     Collaborated closely with clients to understand their requirements and translate them into effective wireframe designs.",
      "     Utilized Websocket connectivity to address complex issues related to real-time lead prioritization, ensuring a smooth and efficient user experience.",
      "      Built comprehensive mock designs that accurately represented the intended look and functionality of the final product, aiding in the evaluation and feedback process.",
      "      Incorporated feedback from clients and team members to refine and iterate upon wireframe designs, ensuring alignment with project goals and user expectations.",
      "      Conducted usability testing on mock designs to gather valuable insights and make informed design decisions for optimal user engagement.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Unix Gaming",
    icon: unix,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "      As a full stack developer, my expertise lies in developing and maintaining web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack and other associated technologies. I specialize in:",

      "Working collaboratively with cross-functional teams, including designers, product managers, and fellow developers, to collectively deliver high-quality products.",
      "Ensuring the implementation of responsive design techniques and guaranteeing seamless cross-browser compatibility to enhance user experience across various devices and platforms.",
      "Actively participating in code reviews, providing constructive feedback to fellow developers to improve code quality, maintain consistency, and optimize overall performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zack has outstanding work ethic, he always makes sure the code is tested and reviewed before submitting it. When things are a bit more complex, he does his research and resolves issues in his free time. Will definitely hire again.",
    name: "Jackie Govaerts",
    designation: "CTO",
    company: "HelpDeskHeroes",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Without doubt one of the most talented programmers out there.  I always go back to Warren when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed.",
    name: "ZEN Mart",
    designation: "CEO",
    company: "ZEN Mart",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Without doubt one of the most talented programmers out there.  I always go back to Warren when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed.",
    name: "Mary Ellene Bautista",
    designation: "CEO",
    company: "ZEN House",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    testimonial:
      "Zlatko is a very good developer, he understands the objective easily and comes up with his own suggestions and solutions. Pays great attention to details. Experienced with Flutter and is able to fix and improve other developers' code. Will work with him again!",
    name: "Jackie Govaerts",
    designation: "CTO",
    company: "HelpDeskHeroes",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Our ecommerce website, built with React, offers a super smooth shopping experience. With a sleek and visually appealing design, it showcases products in an organized manner. Complex data management is seamlessly handled through React's state management, enabling real-time inventory updates and smooth checkout processes. The website's responsive design guarantees a consistent user experience across various devices. With a focus on performance, our ecommerce website delivers efficient browsing and a user-friendly interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/KZEN17/ecommerce_nextjs",
  },
  {
    name: "Amazing Blog Website",
    description:
      "Experience a next-level blog website powered by Next.js and GraphQL. With Next.js, we deliver lightning-fast page loading and server-side rendering, ensuring a seamless browsing experience. GraphQL empowers flexible data fetching, allowing you to explore rich content effortlessly. Our blog website combines the best of both technologies to provide an immersive and efficient platform for reading and discovering captivating articles. Stay updated with engaging blog posts and enjoy a smooth, interactive user interface designed to enhance your reading pleasure.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/KZEN17/blog-nextjs-graphql",
  },
  {
    name: "Share It",
    description:
      "Discover the perfect web app built with Sanity and React, featuring seamless integration with Google sign-in and login functionality. With Sanity, we offer a robust content management system that ensures easy management and organization of your app's data. Combined with React's powerful UI capabilities, our web app provides a delightful user experience. The Google sign-in and login feature enhances accessibility, allowing users to securely authenticate and access personalized content. Enjoy a streamlined and secure experience while effortlessly navigating and interacting with our web app's rich features",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shareit,
    source_code_link: "https://github.com/KZEN17/shareit-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
