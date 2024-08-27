import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Home(props) {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Monthly Active Users',
                data: [500, 1000, 1500, 2000, 2500, 3000],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="bg-gray-100 flex items-start justify-center p-3 rounded-xl">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile card on the left */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <img
                        src="https://img.win3000.com/m00/98/46/1c0a8d4896ca60a3b268268300c5ef43.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">YUKI LAMY</h1>
                    <p className="text-gray-600 mb-4 text-center">
                        I am a passionate web developer with expertise in creating dynamic and responsive websites using modern technologies. My goal is to build intuitive and engaging user experiences.
                    </p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-grasy-900">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                            <FaTwitter size={28} />
                        </a>
                    </div>

                    <div className="flex justify-center space-x-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Web Development</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">UI/UX Design</span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">React.js</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Skills</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 font-bold">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React.js, Vue.js</li>
                            <li>Node.js, Express</li>
                            <li>UI/UX Design, Figma</li>
                        </ul>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Projects</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Project A:</strong> A responsive e-commerce website built with React and Redux.</li>
                            <li><strong>Project B:</strong> A mobile-friendly blogging platform using Vue.js and Firebase.</li>
                        </ul>
                    </div>
                </div>

                {/* Content section on the right: chart + details右侧内容部分：图表 + 详细信息 */}
                {/*  */}
                <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">User Growth</h2>
                        <div className="h-64">
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">More About Me</h2>
                        <p className="text-gray-600 mb-2">
                            I have over 5 years of experience in the tech industry, working with a wide range of technologies including HTML, CSS, JavaScript, and various front-end frameworks. I am particularly skilled in React.js and have a deep understanding of component-based architecture.
                        </p>
                        <p className="text-gray-600 mb-2">
                            In addition to web development, I have a strong passion for UI/UX design, striving to create interfaces that are not only visually appealing but also highly functional. I believe that great design is the key to a successful product.
                        </p>
                        <p className="text-gray-600">
                            Outside of work, I enjoy contributing to open-source projects and staying up-to-date with the latest trends in web development. I am always eager to learn and take on new challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
