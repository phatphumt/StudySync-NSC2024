import { Button } from 'react-bootstrap';
import '../styles/App.sass';
import '../styles/Home.sass';

const App = () => {
	const aboutContent = [
		{
			title: 'วางแผน',
			iconName: 'assignment',
			desc: 'วางแผนการเรียนด้วย',
			descB: 'To-Do list ของเรา',
		},
		{
			title: 'เรียน',
			iconName: 'edit_document',
			desc: 'เพิ่มโฟกัสด้วย ',
			descB: 'Pomodoro Technique',
		},
		{
			title: 'ทบทวน',
			iconName: 'rate_review',
			desc: 'ทบทวนโดยการใช้ ',
			descB: 'Flashcard หรือแบบทดสอบ',
		},
	];

	return (
		<>
			<main>
				<h1>StudySync คืออะไร</h1>
				<div className="about">
					{aboutContent.map((stuff) => {
						return (
							<div className="about-content">
								<h2>{stuff.title}</h2>
								<span className="material-symbols-outlined icons">
									{stuff.iconName}
								</span>
								<p>
									{stuff.desc}
									<br />
									{stuff.descB}
								</p>
							</div>
						);
					})}
				</div>
				<Button variant="secondary" className="start--btn">
					เริ่มเลย
				</Button>
			</main>
		</>
	);
};

export default App;
