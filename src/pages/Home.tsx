import { Link } from 'react-router-dom';
import AboutCard from '../components/AboutCard';

const App = () => {
	const aboutContent = [
		{
			title: 'วางแผน',
			iconName: 'assignment',
			desc: ['วางแผนการเรียนด้วย', 'To-Do list ของเรา'],
		},
		{
			title: 'เรียน',
			iconName: 'edit_document',
			desc: ['เพิ่มโฟกัสด้วย ', 'Pomodoro Technique'],
		},
		{
			title: 'ทบทวน',
			iconName: 'rate_review',
			desc: ['ทบทวนโดยการใช้ ', 'Flashcard หรือแบบทดสอบ'],
		},
	];

	return (
		<>
			<main className="h-[93.1vh] flex flex-col justify-center items-center sph">
				<h1 className="text-4xl font-bold text-center">StudySync คืออะไร</h1>
				<div className="flex w-screen justify-evenly mt-7 p-14 bg-main">
					{aboutContent.map((stuff) => {
						return (
							<AboutCard iconName={stuff.iconName} desc={stuff.desc}>
								{stuff.title}
							</AboutCard>
						);
					})}
				</div>
				<Link to="/login">
					<button className="px-24 py-4 mt-10 text-2xl font-bold transition-all duration-200 rounded-md bg-main active:scale-95 hover:shadow-lg">เริ่มเลย</button>
				</Link>
			</main>
		</>
	);
};

export default App;
