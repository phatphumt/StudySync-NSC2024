import { Link } from 'react-router-dom';
import AboutCard from '../components/AboutCard';
import { aboutContent } from '../configs/stuff';
import { useAuth } from '../context/AuthContext';

const Home = () => {
	const authstuff = useAuth();
	return (
		<>
			<main className="pt-[5vh] main--wrapper xs:h-[93vh] xs:pt-0">
				<h1 className="pb-0 studysync--title xs:pb-7">StudySync คืออะไร</h1>
				<div className="py-0 about--wrapper xs:py-10">
					{aboutContent.map((stuff) => {
						return (
							<AboutCard iconName={stuff.iconName} desc={stuff.desc}>
								{stuff.title}
							</AboutCard>
						);
					})}
				</div>
				<Link to={!authstuff?.user ? '/login' : '/dashboard'}>
					<button className="start--btn">เริ่มเลย</button>
				</Link>
			</main>
		</>
	);
};

export default Home;
