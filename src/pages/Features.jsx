/* eslint-disable react/prop-types */
const FeaturesOverview = () => (

  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Create Tasks" description="Easily add and manage tasks with a few clicks." icon="📝" />
        <FeatureCard title="Track Progress" description="Monitor your progress with intuitive tools." icon="📊" />
        <FeatureCard title="Organize Projects" description="Group tasks into projects for better management." icon="📁" />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeaturesOverview;