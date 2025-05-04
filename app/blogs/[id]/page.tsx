import BlogClient from "./client"

// Define the blog articles directly here to avoid import issues with static generation
const blogArticles = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 15, 2025",
    readTime: "5 min read",
    excerpt:
      "Explore how telemedicine is revolutionizing healthcare access and delivery in the post-pandemic world.",
    content: "# The Future of Telemedicine\n\nTelemedicine has emerged as one of the most transformative innovations in healthcare delivery. The COVID-19 pandemic accelerated its adoption, and now it's reshaping how patients receive care.\n\n## Expanding Access to Care\n\nOne of the most significant benefits of telemedicine is its ability to reach underserved populations. Rural communities, which often face physician shortages, can now connect with specialists from major medical centers without the burden of travel.\n\n## Technological Advancements\n\nThe technology behind telemedicine continues to evolve rapidly. High-definition video conferencing, secure messaging platforms, and remote monitoring tools have made virtual consultations increasingly effective. Some platforms now integrate with wearable devices to provide real-time patient data to healthcare providers.\n\n## Challenges and Considerations\n\nDespite its promise, telemedicine faces hurdles in widespread implementation. Reimbursement policies, licensing regulations across state lines, and digital literacy among certain populations remain challenges to address.\n\n## The Future Outlook\n\nAs technology continues to advance, we can expect telemedicine to become even more sophisticated. AI-assisted diagnostics, virtual reality applications for physical therapy, and enhanced remote monitoring capabilities are just on the horizon. The healthcare landscape will likely evolve into a hybrid model, combining the convenience of telemedicine with the irreplaceable aspects of in-person care.",
  },
  {
    id: 2,
    title: "Nutrition Tips for Better Health",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 10, 2025",
    readTime: "7 min read",
    excerpt:
      "Learn about the latest nutritional research and how to incorporate healthy eating habits into your daily routine.",
    content: "# Nutrition Tips for Better Health\n\nPracticing good nutrition is fundamental to overall health and wellbeing. Here's what current research suggests for maintaining a balanced diet.\n\n## The Power of Whole Foods\n\nMinimally processed foods retain more nutrients and contain fewer additives. Emphasizing fruits, vegetables, whole grains, lean proteins, and healthy fats creates a foundation for good health.\n\n## Understanding Macronutrients\n\nProtein, carbohydrates, and fats all play essential roles in the body. Rather than eliminating any one macronutrient group, focus on quality sources of each:\n\n- **Proteins**: Lean meats, fish, beans, legumes, and plant-based options\n- **Carbohydrates**: Whole grains, fruits, vegetables, and legumes\n- **Fats**: Olive oil, avocados, nuts, seeds, and fatty fish\n\n## Hydration Matters\n\nWater is essential for nearly every bodily function. Most adults should aim for 8-10 glasses daily, with adjustments for activity level and climate.\n\n## Personalized Approaches\n\nNutrition is not one-size-fits-all. Factors like age, activity level, medical conditions, and even genetics can influence dietary needs. Working with healthcare providers can help develop an appropriate plan for individual circumstances.\n\n## Simple Daily Habits\n\n1. Eat a variety of colorful fruits and vegetables\n2. Choose whole grains over refined options\n3. Include protein with each meal\n4. Stay hydrated throughout the day\n5. Practice mindful eating by paying attention to hunger and fullness cues",
  },
  {
    id: 3,
    title: "Understanding Mental Health",
    image:
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 5, 2025",
    readTime: "6 min read",
    excerpt:
      "Breaking down stigmas and providing resources for mental health awareness and support in communities.",
    content: "# Understanding Mental Health\n\nMental health is an essential component of overall wellbeing that affects how we think, feel, and act. Despite its importance, misconceptions and stigma often prevent open discussions and timely interventions.\n\n## Common Mental Health Conditions\n\nMental health conditions are common and treatable. Some of the most prevalent include:\n\n- **Anxiety disorders**: Affecting roughly 19% of adults annually\n- **Depression**: One of the leading causes of disability worldwide\n- **Post-traumatic stress disorder (PTSD)**: Affecting people who have experienced trauma\n- **Bipolar disorder**: Characterized by unusual shifts in mood and energy levels\n\n## Warning Signs\n\nRecognizing early signs of mental health challenges can lead to earlier intervention. Watch for:\n\n- Persistent sadness or irritability\n- Excessive fears or worries\n- Extreme mood changes\n- Changes in sleeping or eating patterns\n- Difficulty concentrating\n- Withdrawal from social activities\n\n## Seeking Help\n\nProfessional support is crucial for managing mental health conditions. Options include:\n\n- Primary care providers\n- Mental health specialists (psychiatrists, psychologists, counselors)\n- Support groups\n- Hotlines for immediate assistance\n\n## Reducing Stigma\n\nOpen conversations about mental health help normalize these experiences. Treating mental health conditions with the same importance as physical health conditions is essential for creating supportive communities.\n\n## Self-Care Strategies\n\nWhile not a replacement for professional treatment when needed, self-care practices can support mental wellbeing:\n\n1. Regular physical activity\n2. Adequate sleep\n3. Stress management techniques\n4. Maintaining social connections\n5. Setting realistic goals\n6. Mindfulness and meditation",
  },
  {
    id: 4,
    title: "Childhood Vaccination Guide",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 28, 2025",
    readTime: "8 min read",
    excerpt:
      "A comprehensive overview of recommended childhood vaccines and their importance for public health.",
    content: "# Childhood Vaccination Guide\n\nVaccinations are one of the most effective ways to protect children from serious diseases. This guide provides information about recommended childhood vaccines, their schedules, and answers to common questions.\n\n## Core Childhood Vaccines\n\nThe following vaccines are typically recommended for children from birth to age 6:\n\n- Hepatitis B\n- Rotavirus\n- Diphtheria, Tetanus, & Pertussis (DTaP)\n- Haemophilus influenzae type b (Hib)\n- Pneumococcal\n- Inactivated Poliovirus\n- Influenza (annual)\n- Measles, Mumps, Rubella (MMR)\n- Varicella (Chickenpox)\n- Hepatitis A\n\n## Understanding Vaccine Schedules\n\nVaccine schedules are carefully designed by medical experts to provide protection when children are most vulnerable to diseases. Following the recommended schedule ensures optimal protection.\n\n## Vaccine Safety\n\nVaccines undergo rigorous testing for safety and effectiveness before approval. Continuous monitoring ensures that safety standards are maintained. While mild side effects like soreness or low-grade fever may occur, serious reactions are extremely rare.\n\n## Community Protection\n\nVaccinations protect not only the individual child but also vulnerable community members who cannot be vaccinated due to age or medical conditions. This concept, known as \"herd immunity,\" helps prevent disease outbreaks.\n\n## Navigating Vaccine Decisions\n\nParents with questions about vaccines should consult healthcare providers for accurate information based on medical research. Pediatricians can address concerns and help parents make informed decisions about their children's health.",
  },
  {
    id: 5,
    title: "Heart Health: Prevention and Care",
    image:
      "https://images.unsplash.com/photo-1559757175-7b21e7afdd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 20, 2025",
    readTime: "6 min read",
    excerpt:
      "Essential strategies for maintaining cardiovascular health and reducing the risk of heart disease.",
    content: "# Heart Health: Prevention and Care\n\nCardiovascular disease remains one of the leading causes of death globally. Understanding risk factors and preventive measures can significantly reduce the likelihood of developing heart problems.\n\n## Risk Factors\n\nSome cardiovascular risk factors cannot be changed, such as age, gender, and family history. However, many others can be managed through lifestyle choices:\n\n- High blood pressure\n- High cholesterol\n- Smoking\n- Physical inactivity\n- Obesity\n- Diabetes\n- Poor diet\n- Excessive alcohol consumption\n- Chronic stress\n\n## Preventive Strategies\n\n### Healthy Eating Patterns\n\nDietary approaches like the Mediterranean or DASH diet have been shown to support heart health. These emphasize:\n- Fruits and vegetables\n- Whole grains\n- Lean proteins\n- Healthy fats (olive oil, nuts, avocados)\n- Limited processed foods and added sugars\n\n### Regular Physical Activity\n\nAim for at least 150 minutes of moderate-intensity exercise per week. Activities can include:\n- Brisk walking\n- Swimming\n- Cycling\n- Strength training\n\n### Know Your Numbers\n\nRegular health screenings help track important indicators:\n- Blood pressure\n- Cholesterol levels\n- Blood glucose\n- Body mass index (BMI)\n\n## Warning Signs\n\nRecognizing the signs of a heart attack can save lives. Common symptoms include:\n- Chest pain or discomfort\n- Pain radiating to the arm, back, neck, or jaw\n- Shortness of breath\n- Nausea or lightheadedness\n- Unusual fatigue\n\nWomen may experience less typical symptoms such as unusual fatigue, sleep disturbances, and shortness of breath.\n\n## When to Seek Help\n\nIf you suspect a heart attack, call emergency services immediately. Early intervention significantly improves outcomes and can prevent permanent heart damage.",
  }
];

// Generate static params for all blog articles
export async function generateStaticParams() {
  return blogArticles.map((blog) => ({
    id: String(blog.id),
  }))
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const blogId = parseInt(params.id)
  const blog = blogArticles.find((b) => b.id === blogId)
  
  return <BlogClient blog={blog} />
} 