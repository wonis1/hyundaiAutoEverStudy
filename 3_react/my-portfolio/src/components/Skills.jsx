import Skill from './Skiil.jsx';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <Skill name="JavaScript" level="Advanced" />
        <Skill name="React" level="Intermediate" />
        <Skill name="React" level="Intermediate" />
        <Skill name="React" level="Intermediate" />
        <Skill name="React" level="Intermediate" />
        {/* 더 추가... */}
      </div>
    </section>
  );
}

export default Skills;