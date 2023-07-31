import React from 'react';
import './Home.css';
import Layout from '../Layouts/Layout.js'

function Home() {
return (
    <Layout>
    <div className="center">
        <div className="banner">
            <div className="banner-body">
                <h2 className="welcome-title">Welcome!</h2>
                <p className="welcome-body">To view this project code, please click <a href="google.com">here</a>!</p>
            </div>
        </div>
        
        <div className="about-me">
        <div className="am-banner-body">
            <h1 className="am-title">About Me</h1>
            <p className="am-body">I am a software developer. I have worked in the industry for 3 years, collaborating with others in developing / enhancing products as a full stack developer. </p>
        </div>
        <div className="am-banner-body">
            <h1 className="am-title">What have I done?</h1>
            <div>
                <p>Do I want to use node to grab my experiences from database?</p>
                <div style={{"text-align": "left"}}>
                    <h3>Junior Developer, Telmy; Melbourne, Australia  (2022 - 2023)</h3>
                    <p>Working together with 4 other developers to develop and update features of the product, while at the same time fixing bugs.</p>
                    <ul>
                        <li>Learned the systems and a new programming language in about a week</li>
                        <li>Single-handedly created a Project Tagging system in about 1 month</li>
                        <li>Helped to develop a log cropping system that freed about 5 GB worth of server space ( ~ 20% at the time) and eliminated the need to buy more storage</li>
                        <li>Pushed briefing documents to be converted from basic slides showing front end designs to use Product Requirement Development templates to reduce confusion over feature requirements</li>
                    </ul>

                    <h3>Project Engineer, Wipro Limited; Melbourne, Australia (2020 -2022)</h3>
                    <ul>
                        <li>Used NLP and data processing in python to analyse and present a given problem</li>
                        <li>Completed the AWS Security Fundamental Course</li>
                        <li>Achieved a AWS Cloud Practitioner Certification on June 2020</li>
                        <li>Managed client’s ServiceNow system for BAU activity including granting access, reporting, creating catalog items and updating / inputing data, closing around on average 10 tickets a day</li>
                        <li>Created a function to automatically assign tickets to specific groups based on type of ticket as about 20% of the weekly tickets could be automatically reassigned to a specific group</li>
                    </ul>

                    <h3>Director of Photography and Videography, ASEAN GALA (2019) </h3>
                    <ul>
                        <li>Led a group of 3 photographers and videographers to create marketing materials, organise a photo booth and document the event</li>
                        <li>Led the team to help create 1 trailer, 7 video posts to promote the event, 2 committee photo shoots, and a fun video to be shown on the day, which included planning out shoots, shooting and editing with only a few days to produce each post</li>
                    </ul>
                    <h3>International Student Ambassador Volunteer, UMSU International (2018) </h3>
                    <p>Volunteered to be an International Student Ambassador (ISA), helping the organisation promote and run events. This includes event documentation, handing out flyers, and setting up / down for events.</p>
                    <ul>
                        <li>Awarded the Best ISA 2018, inputting about 160 hours of volunteering</li>
                    </ul>
                    <h3>Software Engineer Intern, Bizzy.co.id;  Jakarta, Indonesia (February 2018 - March 2018)</h3>
                    <p>Trained for two weeks to use Node.js, Express, Bitbucket and AWS API Gateway</p>
                    <ul>
                    <li>Created methods to grab data from the database using Node.js and Express</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
    </Layout>
);
}

export default Home;