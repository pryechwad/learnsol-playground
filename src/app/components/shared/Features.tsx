import React, { useState } from 'react';
import styled from 'styled-components';

const featuresData = [
  { id: 1, title: 'Interactive Design', description: 'Explore dynamic and responsive layouts.' },
  { id: 2, title: 'Advanced Functionality', description: 'Leverage cutting-edge features for your projects.' },
  { id: 3, title: 'Seamless Integration', description: 'Integrate effortlessly with existing systems.' },
];

const FeatureCard = styled.div`
  background-color: transparent;
  color: white;
  border: 2px solid #add8e6; // Changed box outline to faint blue
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturesContainer = styled.div`
  background-color: transparent; // Removed white background
  color: #f5f5f5; // Ensured all text is dark white
  padding: 24px;
  border-radius: 8px;
`;

const FeaturesHeading = styled.h2`
  color: white; // Ensured heading text is white
  font-size: 2rem;
  font-weight: bold; // Made heading bold
  text-align: center;
  margin-bottom: 24px;
`;

const FeatureCardTitle = styled.h3`
  color: white; // Changed feature card titles to white
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const FeatureCardDescription = styled.p`
  color: white; // Changed feature card description text to white
  font-size: 1rem;
  margin-top: 8px;
`;

const UpcomingFeaturesContainer = styled.div`
  background-color: transparent;
  color: white;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
`;

const UpcomingFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const UpcomingFeatureCard = styled.div`
  background-color: transparent;
  color: white;
  border: 2px solid #add8e6; // Changed box outline to faint blue
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const upcomingFeatures = [
  {
    title: "Real-Time Collaboration",
    description: "Enable multiple users to work on the same project simultaneously with seamless updates.",
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to provide actionable insights and recommendations.",
  },
  {
    title: "Enhanced Security",
    description: "Implement advanced security measures to protect user data and ensure privacy.",
  },
];

const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (id: number) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  return (
    <div>
      <FeaturesContainer>
        <FeaturesHeading>Key Features</FeaturesHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              className={`feature-card p-6 bg-transparent rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 cursor-pointer ${expandedFeature === feature.id ? 'border-2 border-blue-500' : ''}`}
              onClick={() => toggleFeature(feature.id)}
            >
              <FeatureCardTitle className="text-xl font-semibold mb-3 text-gray-700">{feature.title}</FeatureCardTitle>
              {expandedFeature === feature.id && (
                <FeatureCardDescription className="text-gray-600">{feature.description}</FeatureCardDescription>
              )}
            </FeatureCard>
          ))}
        </div>
      </FeaturesContainer>

      <UpcomingFeaturesContainer>
        <FeaturesHeading>Upcoming Features</FeaturesHeading>
        <UpcomingFeaturesGrid>
          {upcomingFeatures.map((feature, index) => (
            <UpcomingFeatureCard key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </UpcomingFeatureCard>
          ))}
        </UpcomingFeaturesGrid>
      </UpcomingFeaturesContainer>
    </div>
  );
};

export default Features;