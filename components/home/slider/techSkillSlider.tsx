import Image from "next/image";
import {
  DiAngularSimple,
  DiReact,
  DiNodejs,
  DiJsBadge,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiSass,
  DiMongodb,
  DiGit,
  DiLinux,
  DiDocker,
  DiPython,
  DiJava,
  DiGithubBadge
} from "react-icons/di";

import { SiNextdotjs, SiAwsamplify, SiJira, SiKubernetes } from "react-icons/si";

export default function TechSkillSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-background-100 p-4 rounded-lg flex flex-col gap-4 h-max">
        <div className="text-base font-semibold">Frontend</div>
        <div className="flex items-center flex-wrap gap-4 opacity-50">
          <div>
            <DiAngularSimple size={36}/>
          </div>
          <div>
            <DiReact size={36} />
          </div>
          <div>
            <DiJsBadge size={36} />
          </div>
          <div>
            <DiHtml5 size={36} />
          </div>
          <div>
            <DiCss3 size={36} />
          </div>
          <div>
            <DiSass size={36} />
          </div>
          <div>
            <SiNextdotjs size={36}/>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-background-100 p-4 rounded-lg flex flex-col gap-2.5 h-max">
        <div className="text-base font-semibold">Backend</div>
        <div className="flex items-center flex-wrap gap-4 opacity-50">
          <div>
            <DiNodejs size={36} />
          </div>
          <div>
            <DiPython size={36} />
          </div>
          <div>
            <DiJava size={36} />
          </div>
          <div>
            <SiNextdotjs size={36}/>
          </div>
          <div>
            <DiPostgresql size={36} />
          </div>
          <div>
            <DiMysql size={36} />
          </div>
          <div>
            <DiMongodb size={36} />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-background-100 p-4 rounded-lg flex flex-col gap-2.5 h-max">
        <div className="text-base font-semibold">Tools</div>
        <div className="flex items-center flex-wrap gap-4 opacity-50">
          <div>
            <DiGit size={36} />
          </div>
          <div>
            <DiLinux size={36} />
          </div>
          <div>
            <DiDocker size={36} />
          </div>
          <div>
            <SiAwsamplify size={36}/>
          </div>
          <div>
            <SiJira size={36}/>
          </div>
          <div>
            <SiKubernetes size={36}/>
          </div>
          <div>
            <DiGithubBadge size={36}/>
          </div>
        </div>
      </div>
    </div>
  );
}
