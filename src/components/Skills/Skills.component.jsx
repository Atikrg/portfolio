import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import {
      SkillsSection,
      SkillsTitle,
      SkillsGrid,
      SkillsCard,
      SkillsHeader,
      IconWrapper,
      Category,
      SkillsList,
      SkillItem,
} from './skills.styles';

const skillsData = [
      {
            category: 'Frontend',
            icon: <Code className="icon blue" />,
            skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      },
      {
            category: 'Backend',
            icon: <Server className="icon green" />,
            skills: ['Node.js', 'Express', 'MySQL', 'MongoDB'],
      },
      {
            category: 'Mobile Development',
            icon: <Wrench className="icon orange" />, // You can pick a different icon or color here
            skills: ['React Native', 'Expo', 'Flutter'],
      },
      {
            category: 'Tools & Platforms',
            icon: <Wrench className="icon purple" />,
            skills: ['Git', 'Docker', 'Firebase', 'Vercel', 'Postman'],
      },
];
    
const Skills = () => {
      return (
            <SkillsSection>
                  <SkillsTitle>Skills & Technologies</SkillsTitle>
                  <SkillsGrid>
                        {skillsData.map((section, index) => (
                              <SkillsCard key={index}>
                                    <SkillsHeader>
                                          <IconWrapper>{section.icon}</IconWrapper>
                                          <Category>{section.category}</Category>
                                    </SkillsHeader>
                                    <SkillsList>
                                          {section.skills.map((skill, i) => (
                                                <SkillItem key={i}>{skill}</SkillItem>
                                          ))}
                                    </SkillsList>
                              </SkillsCard>
                        ))}
                  </SkillsGrid>
            </SkillsSection>
      );
};

export default Skills;
