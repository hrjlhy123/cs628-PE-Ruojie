import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Jack Hao</h1>
                <p>2025 Terry Ave, Seattle, USA, 98121 | (206) 551-4288 | hrjlhy@gmail.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle, Seattle, USA | July 2026</p>
                    <p>GPA: 3.8/4.0</p>
                    <h3>Master of Science in Data Analytics & Artificial Intelligence</h3>
                    <p>Hong Kong Baptist University, Hong Kong SAR | September 2022</p>
                    <p>GPA: 2.84/4.0</p>
                    <h3>Bachlor of Science in Geography Information System</h3>
                    <p>Beijing University of Civil Engineer & Architecture, Beijing, China | July 2016</p>
                    <p>GPA: 2.55/4.0</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a personal website using React and deployed it on GitHub Pages
                    </p>
                    <p>
                        Source code: {" "}
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Under construction
                        </a>
                    </p>

                    <h3>Online Bookstore</h3>
                    <p>
                        Developed a web application for an online bookstore using Spring Boot and MySQL
                    </p>
                    <p>
                        Source code: {" "}
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          Under construction  
                        </a>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Resume