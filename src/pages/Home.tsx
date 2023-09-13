import { Link } from 'react-router-dom';
import AboutCard from '../components/AboutCard';
import aboutContent from '../configs/stuff'

const App = () => {
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
