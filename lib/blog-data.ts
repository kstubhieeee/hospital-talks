// Define the blog data structure to match our admin form structure
export interface BlogSection {
  id: string;
  headline: string;
  image?: string;
  paragraph: string;
}

export interface BlogAuthor {
  name: string;
  bio: string;
  avatar: string;
}

export interface Blog {
  id: number | string;
  title: string;
  excerpt: string;
  featuredImage: string;
  sections: BlogSection[];
  date: string;
  readTime: string;
  author: BlogAuthor;
  enableComments: boolean;
  enableSocialSharing: boolean;
}

// Default author information
export const defaultAuthor: BlogAuthor = {
  name: "Dr. Emily Johnson",
  bio: "Dr. Emily Johnson is a healthcare professional with over 15 years of experience in internal medicine. She is passionate about patient education and preventive care.",
  avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
};

// Sample blog data structured according to our new format
export const structuredBlogArticles: Blog[] = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 15, 2025",
    readTime: "5 min read",
    excerpt: "Explore how telemedicine is revolutionizing healthcare access and delivery in the post-pandemic world.",
    sections: [
      {
        id: "section-1",
        headline: "Expanding Access to Care",
        image: "https://images.unsplash.com/photo-1590928874536-146a3b9ea577?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "One of the most significant benefits of telemedicine is its ability to reach underserved populations. Rural communities, which often face physician shortages, can now connect with specialists from major medical centers without the burden of travel. This expansion of care has been particularly impactful for patients with chronic conditions, mobility issues, or those living in remote areas. Studies have shown that telemedicine can reduce healthcare disparities and improve outcomes for these vulnerable populations."
      },
      {
        id: "section-2",
        headline: "Technological Advancements",
        image: "https://images.unsplash.com/photo-1563510113750-215c438c5bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "The technology behind telemedicine continues to evolve rapidly. High-definition video conferencing, secure messaging platforms, and remote monitoring tools have made virtual consultations increasingly effective. Some platforms now integrate with wearable devices to provide real-time patient data to healthcare providers. AI-assisted diagnostic tools are helping clinicians make more accurate assessments remotely, while virtual reality applications are expanding into areas like physical therapy and mental health treatment."
      },
      {
        id: "section-3",
        headline: "The Future Outlook",
        image: "https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "As technology continues to advance, we can expect telemedicine to become even more sophisticated. AI-assisted diagnostics, virtual reality applications for physical therapy, and enhanced remote monitoring capabilities are just on the horizon. The healthcare landscape will likely evolve into a hybrid model, combining the convenience of telemedicine with the irreplaceable aspects of in-person care. Future regulatory changes may further solidify telemedicine's place in standard healthcare delivery, with increased insurance coverage and streamlined licensing across jurisdictions."
      }
    ],
    author: defaultAuthor,
    enableComments: true,
    enableSocialSharing: true
  },
  {
    id: 2,
    title: "Nutrition Tips for Better Health",
    featuredImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 10, 2025",
    readTime: "7 min read",
    excerpt: "Learn about the latest nutritional research and how to incorporate healthy eating habits into your daily routine.",
    sections: [
      {
        id: "section-1",
        headline: "The Power of Whole Foods",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Minimally processed foods retain more nutrients and contain fewer additives. Emphasizing fruits, vegetables, whole grains, lean proteins, and healthy fats creates a foundation for good health. Recent studies have shown that diets rich in whole, unprocessed foods are associated with lower rates of chronic diseases, including heart disease, diabetes, and certain cancers. The fiber, antioxidants, and phytonutrients found in whole foods work synergistically to support optimal health in ways that supplements cannot replicate."
      },
      {
        id: "section-2",
        headline: "Understanding Macronutrients",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Protein, carbohydrates, and fats all play essential roles in the body. Rather than eliminating any one macronutrient group, focus on quality sources of each. Choose lean proteins like fish, poultry, beans, and legumes. Opt for complex carbohydrates from whole grains, fruits, and vegetables rather than refined options. Select healthy fats from sources like olive oil, avocados, nuts, and fatty fish like salmon. Finding the right balance of these macronutrients for your individual needs can support energy levels, metabolism, and overall health."
      },
      {
        id: "section-3",
        headline: "Personalized Nutrition Approaches",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Nutrition is not one-size-fits-all. Factors like age, activity level, medical conditions, and even genetics can influence dietary needs. Working with healthcare providers can help develop an appropriate plan for individual circumstances. Emerging research in nutrigenomics is revealing how our genetic makeup affects our response to different foods and nutrients. This field holds promise for increasingly personalized nutrition recommendations in the future. Until then, being attuned to how your body responds to different foods can provide valuable insights for optimizing your dietary choices."
      }
    ],
    author: {
      name: "Alex Rivera, RD",
      bio: "Alex is a registered dietitian specializing in plant-based nutrition and preventive health. With a background in both clinical nutrition and culinary arts, he helps people develop sustainable eating habits.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    enableComments: true,
    enableSocialSharing: true
  },
  {
    id: 3,
    title: "Understanding Mental Health",
    featuredImage: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 5, 2025",
    readTime: "6 min read",
    excerpt: "Breaking down stigmas and providing resources for mental health awareness and support in communities.",
    sections: [
      {
        id: "section-1",
        headline: "Common Mental Health Conditions",
        image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Mental health conditions are common and treatable. Some of the most prevalent include anxiety disorders (affecting roughly 19% of adults annually), depression (one of the leading causes of disability worldwide), post-traumatic stress disorder (PTSD), and bipolar disorder. These conditions can affect anyone regardless of age, gender, socioeconomic status, or background. Recognizing that mental health conditions are medical conditions—not character flaws or personal weaknesses—is crucial for reducing stigma and encouraging people to seek appropriate treatment."
      },
      {
        id: "section-2",
        headline: "Recognizing Warning Signs",
        image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Recognizing early signs of mental health challenges can lead to earlier intervention. Warning signs may include persistent sadness or irritability, excessive fears or worries, extreme mood changes, changes in sleeping or eating patterns, difficulty concentrating, or withdrawal from social activities. Physical symptoms like headaches, digestive issues, or unexplained pain can also be manifestations of underlying mental health conditions. If you notice these signs in yourself or someone you care about, reaching out for professional guidance is an important step."
      },
      {
        id: "section-3",
        headline: "Self-Care Strategies",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "While not a replacement for professional treatment when needed, self-care practices can support mental wellbeing. Regular physical activity has been shown to reduce symptoms of depression and anxiety while improving overall mood. Adequate sleep is essential for emotional regulation and cognitive function. Stress management techniques such as mindfulness meditation, deep breathing exercises, or progressive muscle relaxation can help reduce tension. Maintaining social connections provides emotional support and a sense of belonging, both of which are protective factors for mental health. Creating a self-care routine that incorporates these elements can be an important part of maintaining mental wellness."
      }
    ],
    author: {
      name: "Dr. Sarah Chen",
      bio: "Dr. Chen is a clinical psychologist specializing in anxiety disorders and trauma-informed care. She advocates for increased mental health awareness and accessible treatment options.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    enableComments: true,
    enableSocialSharing: true
  },
  {
    id: 4,
    title: "Childhood Vaccination Guide",
    featuredImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 28, 2025",
    readTime: "8 min read",
    excerpt: "A comprehensive overview of recommended childhood vaccines and their importance for public health.",
    sections: [
      {
        id: "section-1",
        headline: "Core Childhood Vaccines",
        image: "https://images.unsplash.com/photo-1576765608622-067971dc9220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "The following vaccines are typically recommended for children from birth to age 6: Hepatitis B, Rotavirus, Diphtheria, Tetanus, & Pertussis (DTaP), Haemophilus influenzae type b (Hib), Pneumococcal, Inactivated Poliovirus, Influenza (annual), Measles, Mumps, Rubella (MMR), Varicella (Chickenpox), and Hepatitis A. These vaccines protect against serious diseases that can cause severe illness, long-term disability, or even death. Thanks to widespread vaccination programs, many diseases that once claimed thousands of lives annually are now rare in developed countries."
      },
      {
        id: "section-2",
        headline: "Vaccine Safety",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Vaccines undergo rigorous testing for safety and effectiveness before approval. The development process typically takes 10-15 years and involves multiple phases of clinical trials with thousands of participants. After approval, vaccines continue to be monitored through various surveillance systems that track any adverse events. While mild side effects like soreness or low-grade fever may occur, serious reactions are extremely rare. The overwhelming scientific consensus, based on hundreds of studies, is that vaccines are safe and that their benefits far outweigh any potential risks."
      },
      {
        id: "section-3",
        headline: "Community Protection",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Vaccinations protect not only the individual child but also vulnerable community members who cannot be vaccinated due to age or medical conditions. This concept, known as 'herd immunity,' helps prevent disease outbreaks. When a high percentage of the population is immunized, the chain of infection is broken, making it difficult for diseases to spread. This is particularly important for protecting infants too young for certain vaccines, people with compromised immune systems, and those with legitimate medical contraindications to vaccines. By vaccinating your child, you're helping to create a shield of protection for your entire community."
      }
    ],
    author: {
      name: "Dr. Michael Thompson",
      bio: "Dr. Thompson is a pediatrician with 20 years of experience in public health. He has worked extensively with immunization programs both domestically and internationally.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    enableComments: true,
    enableSocialSharing: true
  },
  {
    id: 5,
    title: "Heart Health: Prevention and Care",
    featuredImage: "https://images.unsplash.com/photo-1559757175-7b21e7afdd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 20, 2025",
    readTime: "6 min read",
    excerpt: "Essential strategies for maintaining cardiovascular health and reducing the risk of heart disease.",
    sections: [
      {
        id: "section-1",
        headline: "Understanding Risk Factors",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Some cardiovascular risk factors cannot be changed, such as age, gender, and family history. However, many others can be managed through lifestyle choices. These modifiable risk factors include high blood pressure, high cholesterol, smoking, physical inactivity, obesity, diabetes, poor diet, excessive alcohol consumption, and chronic stress. Research has shown that addressing these modifiable risk factors can significantly reduce your chance of developing heart disease—even if you have a genetic predisposition. In fact, studies suggest that lifestyle modifications can reduce heart disease risk by up to 80%."
      },
      {
        id: "section-2",
        headline: "Healthy Eating Patterns",
        image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Dietary approaches like the Mediterranean or DASH diet have been shown to support heart health. These diets emphasize fruits and vegetables, whole grains, lean proteins, healthy fats (olive oil, nuts, avocados), and limited processed foods and added sugars. The Mediterranean diet, in particular, has been extensively studied and has consistently shown benefits for heart health. One landmark study found that following this dietary pattern reduced the risk of heart attacks, strokes, and death from heart disease by about 30%. Particular dietary components that appear protective include omega-3 fatty acids, antioxidants, fiber, and plant sterols."
      },
      {
        id: "section-3",
        headline: "Recognizing Warning Signs",
        image: "https://images.unsplash.com/photo-1544991936-9464fa9ad4a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        paragraph: "Recognizing the signs of a heart attack can save lives. Common symptoms include chest pain or discomfort, pain radiating to the arm, back, neck, or jaw, shortness of breath, nausea or lightheadedness, and unusual fatigue. Women may experience less typical symptoms such as unusual fatigue, sleep disturbances, and shortness of breath. It's important to note that heart attack symptoms can vary greatly between individuals. Some people, particularly those with diabetes, may experience 'silent' heart attacks with minimal symptoms. If you suspect a heart attack, call emergency services immediately. Early intervention significantly improves outcomes and can prevent permanent heart damage."
      }
    ],
    author: defaultAuthor,
    enableComments: true,
    enableSocialSharing: true
  }
]; 