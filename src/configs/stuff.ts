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

const signInForm = [
	{
		name: 'email',
		text: 'Email',
        type: 'email'
	},
	{
		name: 'password',
		text: 'Password',
        type: 'password'
	},
];

const signUpForm = [
	{
		name: 'email',
		text: 'Email',
		type: 'email',
	},
	{
		name: 'password',
		text: 'Password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		text: 'Confirm Password',
		type: 'password',
	},
];

export { aboutContent, signInForm, signUpForm };
