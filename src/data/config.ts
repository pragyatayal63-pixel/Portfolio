const config = {
  title: "Pragya Tayal | Full-Stack MERN & AI Developer",
  description: {
    long: "Explore the portfolio of Pragya Tayal, a full-stack MERN & AI developer and Wipro-certified Java developer specializing in interactive web experiences, microservices, and machine learning solutions. Let's build something amazing together!",
    short:
      "Discover the portfolio of Pragya Tayal, a full-stack MERN & AI developer creating intelligent web experiences and innovative projects.",
  },
  keywords: [
    "Pragya Tayal",
    "Pragya",
    "portfolio",
    "full-stack developer",
    "MERN developer",
    "AI & ML",
    "Java developer",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
  ],
  author: "Pragya Tayal",
  email: "pragyatayal63@gmail.com",
  site: "https://github.com/pragyatayal63-pixel",

  // for github stars button
  githubUsername: "pragyatayal63-pixel",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/PragyaTayal13",
    linkedin: "https://www.linkedin.com/in/pragya-tayal-719931328/",
    instagram: "https://www.instagram.com/pragyat111?stkn=aDU1YmQ4dWNydnFo",
    facebook: "https://www.facebook.com",
    github: "https://github.com/pragyatayal63-pixel",
  },
};
export { config };
