import { Mail, User, GraduationCap, Code2, Heart, Trophy, MapPin, Camera, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import DP from './assets/dp.png';

const profile = {
  name: 'Dipti Dipak Kshirsagar',
  role: 'Engineering Student',
  dob: '08/01/2008',
  className: 'First Year Engineering',
  branch: 'Electrical Engineering',
  email: 'dipti@gmail.com',
  location: 'Maharashtra, India',
};

const scores = [
  { exam: 'SSC', year: '2022–2023', score: '85%' },
  { exam: 'HSC', year: '2024–2025', score: '78%' },
  { exam: 'First Semester', year: '2025–2026', score: '8.5 CGPA' },
];

const skills = ['C Programming', 'HTML', 'CSS', 'Responsive Design'];
const hobbies = ['Bike Riding', 'Coding', 'Learning Technology'];
const activities = ['Master Degree in Judo Karate', 'State Level Throw Ball Selection', 'Technical Events'];
const languages = ['English', 'Hindi', 'Marathi'];


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">{title}</h2>
      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),transparent_35%)]" />

      <section className="min-h-screen flex items-center px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mt-4">{profile.role}</p>
            <p className="text-slate-400 mt-6 text-lg max-w-xl leading-relaxed">
              A premium digital portfolio showcasing academics, technical skills, achievements, and personal excellence.
            </p>

          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-cyan-500/30 rounded-full"></div>

              <div className="relative w-72 h-72 md:w-100 md:h-110 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2 overflow-hidden">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                  <img
                    src={DP}
                    alt="Profile"
                    className="w-full h-full object-center object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-300" size={36} />
      </section>

      <section className="py-24 px-6 lg:px-16">
        <SectionTitle title="About Me" subtitle="Personal information and educational background." />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 space-y-5">
            <Info icon={<User />} label="Name" value={profile.name} />
            <Info icon={<GraduationCap />} label="Class" value={profile.className} />
            <Info icon={<Code2 />} label="Branch" value={profile.branch} />
            <Info icon={<Mail />} label="Email" value={profile.email} />
            <Info icon={<MapPin />} label="Location" value={profile.location} />
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4">Qualification</th>
                  <th className="text-left py-4">Year</th>
                  <th className="text-left py-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((item, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4">{item.exam}</td>
                    <td>{item.year}</td>
                    <td className="text-cyan-300 font-bold">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16">
        <SectionTitle title="Skills & Achievements" subtitle="Technical expertise, hobbies, and activities." />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <Card title="Skills" icon={<Code2 />} items={skills} />
          <Card title="Hobbies" icon={<Heart />} items={hobbies} />
          <Card title="Activities" icon={<Trophy />} items={activities} />
          <Card title="Languages" icon={<ChevronDown />} items={languages} />
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <p className="text-slate-400">Building a professional future.</p>
          </div>
          <div className="flex gap-5">


            <div className="p-4 rounded-full bg-white/5 hover:bg-cyan-500/20 transition"><Mail /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Info({ icon, label, value }) {
  return <div className="flex gap-4 items-center border-b border-white/10 pb-4"><div className="text-cyan-300">{icon}</div><div><p className="text-slate-400 text-sm">{label}</p><p className="font-semibold">{value}</p></div></div>;
}

function Card({ title, icon, items }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
      <div className="flex items-center gap-3 mb-6 text-cyan-300">{icon}<h3 className="text-2xl font-bold text-white">{title}</h3></div>
      <div className="space-y-4">
        {items.map((item, i) => <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">{item}</div>)}
      </div>
    </div>
  );
}

export default App;