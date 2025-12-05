<h1>🗂️ Project Management App</h1>



<p>
    The <strong>Project Management App</strong> is a powerful tool designed to help teams manage projects and tasks effectively. Developed with a robust backend powered by <strong>JEE (Java Enterprise Edition)</strong> and a dynamic frontend built with <strong>React</strong>, this application enables seamless task assignment, project tracking, and progress management.
</p>

<h2>🌟 Features</h2>
<ul>
    <li>📝 <strong>Task Management</strong>: Create, update, and delete tasks.</li>
    <li>📂 <strong>Project Management</strong>: Organize tasks into projects, track deadlines, and monitor project progress.</li>
</ul>

<h2>🛠️ Technology Stack</h2>
<ul>
    <li><strong>Backend:</strong> JEE (Java Enterprise Edition)</li>
    <li><strong>Application Server:</strong> WildFly</li>
    <li><strong>Frontend:</strong> React</li>
    <li><strong>Database:</strong> MySQL</li>
    <li><strong>Architecture:</strong> RESTful API</li>
    <li><strong>Build Tools:</strong> Webpack for Frontend</li>
</ul>

<h2>📸 Screenshots</h2>

<!-- Replace with actual screenshots -->
<p><strong>1. Dashboard</strong></p>
<p><img src="https://example.com/screenshot-dashboard.png" alt="Dashboard"></p>

<p><strong>2. Task Management</strong></p>
<p><img src="https://example.com/screenshot-task-management.png" alt="Task Management"></p>

<p><strong>3. Project Overview</strong></p>
<p><img src="https://example.com/screenshot-project-overview.png" alt="Project Overview"></p>

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html">Java JDK 11+</a></li>
    <li><a href="https://wildfly.org/downloads/">WildFly Application Server</a></li>
    <li><a href="https://reactjs.org/">Node.js & npm (for React)</a></li>
    <li><a href="https://dev.mysql.com/downloads/installer/">MySQL Server</a></li>
</ul>

<h3>Installation</h3>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <pre><code>git clone https://github.com/HoussemRg/project-management-app.git
cd project-management-app
    </code></pre>
    
    <li><strong>Backend Setup:</strong></li>
    <ul>
        <li>Deploy the <code>/backend</code> application on WildFly. Make sure WildFly is installed and running.</li>
        <li>Configure the MySQL datasource in the WildFly admin console.</li>
        <li>Ensure the database credentials are updated in your application configuration files.</li>
    </ul>
    
    <li><strong>Frontend Setup:</strong></li>
    <ul>
        <li>Navigate to the <code>/frontend</code> folder and run:</li>
        <pre><code>npm install
npm start</code></pre>
        <li>This will start the React development server.</li>
    </ul>

    <li><strong>Database Setup:</strong></li>
    <ul>
        <li>Create a MySQL database named <code>project_management</code> and import the schema from the <code>db/project_management.sql</code> file.</li>
    </ul>

    <li><strong>Access the App:</strong></li>
    <ul>
        <li>Backend (WildFly): <code>http://localhost:8080</code></li>
        <li>Frontend: <code>http://localhost:3000</code></li>
    </ul>
</ol>

<h2>🎯 Usage</h2>
<ol>
    <li><strong>Create Projects</strong> by navigating to the Projects section.</li>
    <li><strong>Assign Tasks</strong> to team members and set due dates.</li>
</ol>

<h2>🤝 Contributing</h2>
<p>We welcome contributions! Here's how you can help:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature/new-feature</code>).</li>
    <li>Make your changes and commit (<code>git commit -am 'Add new feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature/new-feature</code>).</li>
    <li>Create a new Pull Request.</li>
</ol>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>👨‍💻 Author</h2>
<p><strong>Houssem</strong></p>
<ul>
    <li><a href="https://www.linkedin.com/in/houssem-regaieg-589526258/">LinkedIn</a></li>
    <li><a href="https://github.com/HoussemRg">GitHub</a></li>
</ul>
