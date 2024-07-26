import Header from "../components/Header";

function Dashboard() {
    return (
        <div className=' justify-center'>
            <Header />

            {/* Body */}
            <div className="rounded-md bg-white py-4 px-6 shadow-2xl mt-4 text-start">
                <p>
                    Hello! I am Aadhil Ahamed, an undergraduate student in Software Engineering. This project demonstrate
                    an user registration system with email verification. The frontend is built in React JS, at the same time
                    the backend is built in Spring Boot.
                </p>
                <br />
                <p>
                    I have use some technologies for this project as following:

                    <ol className="italic text-gray-700 list-disc ps-10">
                        <li>React JS</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                        <li>Spring Boot 3</li>
                        <li>Spring Security 6</li>
                        <li>JDK 17</li>
                        <li>Java Mail Sender</li>
                    </ol>
                </p>
                <br />
                <p>
                    Find more about this project on <a href="https://github.com/AadhilMR/react-email-verification" target="_blank" className="italic underline">GitHub: react-email-verification</a>.
                    <br />
                    Find out the spring boot project(the backend) on <a href="https://github.com/AadhilMR/spring-email-verification" target="_blank" className="italic underline">GitHub: spring-email-verification</a>.
                    <br />
                    Find my other projects on <a href="https://github.com/AadhilMR" target="_blank" className="italic underline">GitHub</a>.
                    <br />
                    Find me on <a href="http://www.linkedin.com/in/aadhil-ahamed--198c360" target="_blank" className="italic underline">LinkedIn</a>.
                    <br />
                    Find me on <a href="https://www.hackerrank.com/profile/aadhil2001ahamed" target="_blank" className="italic underline">HackerRank</a>.
                </p>
                <br />
                <p className="text-center text-xs">2024 - Published by Aadhil Ahamed on GitHub</p>
            </div>
            {/* Body */}
        </div>
    );
}

export default Dashboard;