import Href from '../href';

interface Experience {
  date: string;
  company: string;
  link: string;
  location?: string;
  description?: string;
}

const experiences: Experience[] = [
  {
    date: '2023-Now',
    company: 'Software Engineer at Soko Aerial',
    link: 'https://sokoaerial.com',
    location: 'Remote, Ghana',
  },
  {
    date: 'Dec 2024',
    company: "Web Developer with Eli's Konsepts",
    link: 'https://gh.linkedin.com/in/caleb-eli-248a481bb',
    description: "Contracted for Quattro Formaggi's new website and admin dashboard",
  },
  {
    date: 'Feb 2024',
    company: 'Fullstack Web Developer at Tevrozo',
    link: 'https://tevrozo.com',
    description: 'Next.js, TailwindCSS, TypeScript, Firebase',
  },
];

const volunteering: Experience[] = [
  {
    date: '2022-2023',
    company: 'PCI Chair at NSBE-KNUST',
    link: 'https://nsbe.org',
    location: 'Kumasi, Ghana',
    description: '(Pre-Collegiate Initiative Chair) Helped train high school students in STEM',
  },
];

const ExperienceItem = ({ experience }: { experience: Experience }) => (
  <div className="flex max-sm:flex-col gap-1 sm:gap-6">
    <time className="text-muted-foreground sm:w-20">{experience.date}</time>
    <div>
      <Href href={experience.link} className="w-fit flex flex-wrap gap-1">
        <>{experience.company}</>
      </Href>
      {experience.location && <p className="text-muted-foreground">{experience.location}</p>}
      {experience.description && <p className="text-muted-foreground">{experience.description}</p>}
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-3">
      <p id='work' className="text-muted-foreground text-xs font-medium">Work Experience</p>
      <div className="gap-12 flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

const Volunteering = () => {
  return (
    <div className="flex flex-col gap-3">
      <p id='volunteering' className="text-muted-foreground text-xs font-medium">Volunteering</p>
      <div className="gap-12 flex flex-col">
        {volunteering.map((vol, index) => (
          <ExperienceItem key={index} experience={vol} />
        ))}
      </div>
    </div>
  );
};

export { WorkExperience, Volunteering };
