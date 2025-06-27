export default function SkillBar({ skill }: { skill: { name: string, level: number } }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}
