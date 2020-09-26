import React from 'react'

const About = () => {
    return (
        <div className="about-page">
            <h1>What is this?</h1>
            <p>This is an online tool to lookup Twitch.tv Channels.</p>
            <h1>What are the features?</h1>
            <p>
                You can search for channels on the home page by typing in the search bar. 
                By default you can see the top 100 live channels on Twitch but if you type in the search by you begin searching all channels.
                You can then click on any of the Channel 'cards' to view the Channel Profile page.
            </p>
            <h1>What did you use?</h1>
            <p>I created this tool with React JS.</p>
            <h2>Author and Links</h2>
            <ul>
                <li><strong>Author </strong><a href='https://brettbrennan.dev/'>Brett Brennan</a></li>
                <li><strong>Github Repo </strong><a href='https://github.com/BrettBrennan/TwitchLookup'>Twitch Lookup Git Repo</a></li>
                <li><strong>LinkedIn </strong><a href='https://www.linkedin.com/in/brett-brennan-551331a3/'>My LinkedIn Page</a></li>
                <li><strong>Github </strong><a href='https://github.com/BrettBrennan/'>My Github Page</a></li>
            </ul>
        </div>
    )
}

export default About
