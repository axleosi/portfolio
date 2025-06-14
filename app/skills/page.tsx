import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiMongodb,
  SiPostgresql, SiNextdotjs, SiExpress
} from 'react-icons/si';
import { IconType } from 'react-icons';

const SkillItem = ({ icon: Icon, name }: { icon: IconType, name: string }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <Icon className="text-4xl text-blue-400 mb-2" />
    <p className="text-sm">{name}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col gap-24">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Frontend</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              <SkillItem icon={FaHtml5} name="HTML5" />
              <SkillItem icon={FaCss3Alt} name="CSS3" />
              <SkillItem icon={SiJavascript} name="JavaScript" />
              <SkillItem icon={SiTypescript} name="TypeScript" />
              <SkillItem icon={FaReact} name="React" />
              <SkillItem icon={SiNextdotjs} name="Next.js" />
              <SkillItem icon={SiTailwindcss} name="Tailwind" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Backend</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              <SkillItem icon={FaNodeJs} name="Node.js" />
              <SkillItem icon={SiExpress} name="Express.js" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Databases</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              <SkillItem icon={SiMongodb} name="MongoDB" />
              <SkillItem icon={SiPostgresql} name="PostgreSQL" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Tools</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              <SkillItem icon={FaGitAlt} name="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
