document.addEventListener("touchstart", function(){}, true);

function renderTestimonial({text, author, title }, targetId)  {
    const container = document.getElementById(targetId);
    if (!container) return;

    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
        <p class="label top" style="color:#42496F;">Testimonial</p>
        <p class="testimonial-text">"${text}"</p>
        <p class="testimonial-author">${author}</p>
        <p class="testimonial-title">${title}</p>
    `;
    container.appendChild(card);
}

renderTestimonial({
    text: "Andres' understanding of combined design and business goals makes him a valued collaborator. He is a creative thinker that solves problems with patience and deep experience. Andres' work on UI and UX systems resulted in increased efficiency and productivity. He plays a major part in new innovative products that drive real growth and success.",
    author: "Dan Revitte",
    title: "Director of Product Design, CNN"
}, "project-alpha-testimonial");

renderTestimonial({
    text: "At Forbes, I had the pleasure of working with Andres in his role as the product design lead on the list table and template consolidation to boost user engagement and deliver a modern, scalable layout. He demonstrated strong cross-functional collaboration with engineering, product, editorial, and operations teams, consistently balancing creativity, business goals, and technical constraints.",
    author: "Traci Kalamajka", 
    title: "Director of Product Management, Forbes"
}, "project-beta-testimonial");

renderTestimonial({
    text: "I've had the privilege of working closely with Andres over the past two years on design system improvements. What truly makes him exceptional is his dedication to open communication and his uncanny ability to turn high-level strategy into clear, actionable steps. Whether he's aligning cross-functional teams or proactively seeking feedback, he always ensures everyone is on the same page. I've worked with many designers in my career, but few are as collaborative and effective as he is.",
    author: "Matthew Waldron", 
    title: "Senior Software Engineer, Forbes"
}, "project-gamma-testimonial");

renderTestimonial({
    text: "I had the pleasure of working for Andres for over two years. Through his creative direction, vision and unflagging encouragement, he helped me grow and create some of the best design work of my career.",
    author: "Nick DeSantis", 
    title: "Creative Director, The Trade Desk"
}, "project-delta-testimonial");

renderTestimonial({
    text: "I had the pleasure of working for Andres for a year at Forbes, where he built and managed a team of designers, and helped us transform stories and data points into compelling visual narratives. He was invested in his team, allowing ample time for professional development and skill-sharing, and facilitated collaboration between writers and designers across the newsroom. I was impressed by his organizational and decision-making skills, as well as his dedication and passion for his work. Andres truly helped me grow as a designer.",
    author: "Holly Warfield", 
    title: "Art Director, The Trade Desk"
}, "project-epsilon-testimonial");

renderTestimonial({
    text: "Andres is an exceptional design leader who brings deep product design expertise and a strong commitment to scaling design systems, manifesting in true business impact. His dedication to education and mentorship empowers teams to adopt best practices, fostering a culture of design excellence. Beyond his expertise, he leads with integrity—always building bridges across teams and advocating for thoughtful, user-centered solutions.",
    author: "Richard Sancho", 
    title: "VP of Product Design, Forbes"
}, "project-zeta-testimonial");