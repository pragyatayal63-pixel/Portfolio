import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "spotify-netflix-replicas",
    category: "Frontend Engineering",
    title: "Spotify & Netflix Web Replicas",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    live: "https://github.com/pragyatayal63-pixel",
    github: "https://github.com/pragyatayal63-pixel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            High-performance streaming frontends replicating Spotify & Netflix UI/UX.
          </TypographyP>
          <TypographyP className="font-mono">
            Built high-performance responsive streaming frontends with modular UI architecture, media carousels, and client state management — closely mirroring the design systems of Spotify and Netflix using React.js, JavaScript, CSS Grid, and REST APIs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "jarvis-ai-assistant",
    category: "AI / Automation",
    title: "JARVIS — AI Voice Assistant",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://github.com/pragyatayal63-pixel",
    github: "https://github.com/pragyatayal63-pixel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Python voice assistant with speech-to-text and OS automation achieving 95% command accuracy.
          </TypographyP>
          <TypographyP className="font-mono">
            Developed a Python voice assistant leveraging speech-to-text engines and event-driven automation handlers executing complex system commands with 95% accuracy. Built on top of speech recognition libraries with modular command dispatch architecture.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "yieldsense-ai",
    category: "AI / Machine Learning",
    title: "YieldSense AI — Agricultural Yield Prediction",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://github.com/pragyatayal63-pixel",
    github: "https://github.com/pragyatayal63-pixel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predictive AI system forecasting harvest yield using soil metrics, climate data, and crop statistics.
          </TypographyP>
          <TypographyP className="font-mono">
            Architected a predictive AI model evaluating soil metrics, historical climate, and crop statistics to forecast harvest yield using Scikit-Learn, Random Forest, and XGBoost. Fine-tuned regression algorithms and launched an interactive Flask web console for agronomists to optimize crop selection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "psytrack",
    category: "AI Mental Health & Safety",
    title: "PsyTrack — AI Mental Health & Emergency Alert System",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://github.com/pragyatayal63-pixel",
    github: "https://github.com/pragyatayal63-pixel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI Mental Health platform with real-time NLP sentiment analysis and emergency care team notifications.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built an AI mental health platform using NLP sentiment analysis to track mood patterns and detect critical risk indicators. Engineered automated real-time alerts to trigger instant emergency care team notifications during elevated distress events.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "freelance-marketplace",
    category: "Full-Stack Marketplace",
    title: "Local Freelancer Marketplace",
    src: "/assets/projects-screenshots/kanbi/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://github.com/pragyatayal63-pixel",
    github: "https://github.com/pragyatayal63-pixel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Campus freelancer network connecting local businesses with student service providers.
          </TypographyP>
          <TypographyP className="font-mono ">
            Designed a campus freelancer network connecting local businesses with student service providers (tutoring, dev, design). Integrated secure escrow workflows, automated commission processing, and role-based client-freelancer dashboards.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
