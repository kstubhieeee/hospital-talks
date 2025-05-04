import StoryClient from "./client"

// Define the web stories array directly here to avoid import issues with static generation
const webStories = [
  {
    id: 1,
    title: "COVID-19 Recovery Stories",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Inspiring stories of resilience and recovery from COVID-19 patients around the world.",
    content: "# COVID-19 Recovery Stories\n\nInspiring stories of resilience and recovery from COVID-19 patients around the world. These accounts highlight the human spirit and the dedication of healthcare professionals during challenging times.\n\n## John's Journey\n\nJohn, a 45-year-old teacher, spent 30 days in the ICU. His recovery journey involved physical therapy and community support.\n\n## Maria's Experience\n\nMaria recovered at home with telemedicine support. Her story showcases how remote healthcare solutions helped patients during the pandemic.\n\n## Healthcare Heroes\n\nBehind every recovery story are dedicated healthcare professionals who worked tirelessly during the pandemic.",
  },
  {
    id: 2,
    title: "Mental Health Awareness",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Breaking down stigmas and providing resources for mental health support in communities.",
    content: "# Mental Health Awareness\n\nBreaking down stigmas and providing resources for mental health support in communities. Mental health is just as important as physical health.\n\n## Understanding Anxiety\n\nAnxiety disorders affect millions of people worldwide. Early recognition and proper support can make a significant difference.\n\n## Depression Awareness\n\nUnderstanding the signs of depression and knowing when to seek help can save lives. Community support plays a crucial role.\n\n## Resources Available\n\nMany organizations offer free or affordable mental health resources. Telemedicine has made professional help more accessible than ever before.",
  },
  {
    id: 3,
    title: "Healthcare Heroes",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Celebrating the dedication and sacrifice of healthcare professionals on the frontlines.",
    content: "# Healthcare Heroes\n\nCelebrating the dedication and sacrifice of healthcare professionals on the frontlines. These individuals have shown extraordinary courage during challenging times.\n\n## Frontline Nurses\n\nNurses have been the backbone of our healthcare system, providing direct care to patients under unprecedented circumstances.\n\n## Emergency Responders\n\nFrom paramedics to emergency room staff, these professionals have adapted quickly to changing protocols while providing lifesaving care.\n\n## Supporting Staff\n\nBehind every medical team are essential workers who keep facilities running, including janitorial staff, administrators, and technicians.",
  },
  {
    id: 4,
    title: "Advancements in Medical Technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Exploring the latest innovations in healthcare technology changing patient outcomes.",
    content: "# Advancements in Medical Technology\n\nExploring the latest innovations in healthcare technology changing patient outcomes. From AI-assisted diagnostics to robotic surgeries, technology is revolutionizing healthcare.\n\n## AI in Diagnostics\n\nArtificial intelligence is helping doctors identify diseases earlier and more accurately than ever before.\n\n## Robotic Surgery\n\nMinimally invasive procedures performed with robotic assistance are reducing recovery times and improving precision.\n\n## Telehealth Revolution\n\nThe rapid adoption of telehealth has improved access to care for rural and underserved populations.",
  },
  {
    id: 5,
    title: "Preventive Health Practices",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Simple daily habits that can significantly improve your long-term health outcomes.",
    content: "# Preventive Health Practices\n\nSimple daily habits that can significantly improve your long-term health outcomes. Prevention is always better than cure.\n\n## Nutrition Basics\n\nA balanced diet rich in fruits, vegetables, and whole grains forms the foundation of good health.\n\n## Regular Exercise\n\nJust 30 minutes of moderate activity daily can reduce the risk of numerous chronic conditions.\n\n## Mental Wellness Practices\n\nMindfulness, meditation, and adequate sleep are essential components of preventive health that are often overlooked.",
  },
];

// Generate static params for all story pages
export async function generateStaticParams() {
  return webStories.map((story) => ({
    id: String(story.id),
  }))
}

export default function StoryPage({ params }: { params: { id: string } }) {
  const storyId = parseInt(params.id)
  const story = webStories.find((s) => s.id === storyId)
  
  return <StoryClient story={story} />
} 