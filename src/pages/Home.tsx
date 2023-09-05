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
			<main className="main--wrapper h--full--nav">
				<h1 className="studysync--title">StudySync คืออะไร</h1>
				<div className="about--wrapper">
					{aboutContent.map((stuff) => {
						return (
							<AboutCard iconName={stuff.iconName} desc={stuff.desc}>
								{stuff.title}
							</AboutCard>
						);
					})}
				</div>
				<Link to="/login">
					<button className="start--btn">เริ่มเลย</button>
				</Link>
			</main>
		</>
	);
};

export default App;
